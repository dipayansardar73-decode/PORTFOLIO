import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Simulation Shader: Solves the wave equation
const simulationVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const simulationFragmentShader = `
  uniform sampler2D tPrev;
  uniform sampler2D tCurr;
  uniform vec2 uMouse;
  uniform float uViscosity;
  uniform int uFrame;
  varying vec2 vUv;

  void main() {
    float delta = 1.0 / 256.0; // Grid spacing based on texture size
    
    // Neighbor styles
    vec4 data = texture2D(tCurr, vUv);
    float p = data.r; // Current height
    
    vec4 prevData = texture2D(tPrev, vUv);
    float oldP = prevData.r; // Previous height

    // Finite difference method for wave propagation
    float neighbors = 
      texture2D(tCurr, vUv + vec2(delta, 0.0)).r +
      texture2D(tCurr, vUv - vec2(delta, 0.0)).r +
      texture2D(tCurr, vUv + vec2(0.0, delta)).r +
      texture2D(tCurr, vUv - vec2(0.0, delta)).r;

    float newP = (neighbors / 2.0 - oldP) * uViscosity;

    // Mouse interaction
    float mouseDist = distance(vUv, uMouse);
    if (mouseDist < 0.03) {
      newP += 0.5 * (1.0 - mouseDist / 0.03);
    }

    // Damping
    newP *= 0.98;

    gl_FragColor = vec4(newP, p, 0.0, 1.0);
  }
`;

// Display Shader: Renders the water based on height map
const waterVertexShader = `
  uniform sampler2D tWater;
  varying vec2 vUv;
  varying float vHeight;

  void main() {
    vUv = uv;
    vec4 info = texture2D(tWater, uv);
    vHeight = info.r;
    
    vec3 pos = position;
    pos.z += vHeight * 0.5; // Displace vertex by height
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const waterFragmentShader = `
  varying float vHeight;
  varying vec2 vUv;

  void main() {
    vec3 colorBase = vec3(0.02, 0.02, 0.05); // Dark deep water
    vec3 colorHighlight = vec3(0.0, 0.74, 0.83); // Cyan highlight
    
    float mixFactor = smoothstep(-0.1, 0.2, vHeight);
    vec3 finalColor = mix(colorBase, colorHighlight, mixFactor * 0.5);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const Simulation = ({ mouse }) => {
    const { gl } = useThree();
    const simMesh = useRef();

    // Double buffering for simulation (Front/Back buffers)
    const [fbo1, fbo2] = useMemo(() => {
        const options = {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat,
            type: THREE.FloatType,
            wrapS: THREE.RepeatWrapping,
            wrapT: THREE.RepeatWrapping,
        };
        return [
            new THREE.WebGLRenderTarget(256, 256, options),
            new THREE.WebGLRenderTarget(256, 256, options)
        ];
    }, []);

    const simMaterial = useMemo(() => {
        return new THREE.ShaderMaterial({
            uniforms: {
                tPrev: { value: null },
                tCurr: { value: null },
                uMouse: { value: new THREE.Vector2(0.5, 0.5) },
                uViscosity: { value: 0.99 },
                uFrame: { value: 0 }
            },
            vertexShader: simulationVertexShader,
            fragmentShader: simulationFragmentShader
        });
    }, []);

    const camera = useMemo(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), []);
    const scene = useMemo(() => {
        const s = new THREE.Scene();
        const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), simMaterial);
        s.add(plane);
        // Keep reference to update uniforms
        simMesh.current = plane;
        return s;
    }, [simMaterial]);

    useFrame((state) => {
        // Swap buffers
        const temp = fbo1;
        // We cannot reassign const refs, but we can swap their usage.
        // Actually, simple ping-pong logic:
        // read from fbo1, write to fbo2. Then next frame read fbo2, write to fbo1.
        // But we need to output the result to a texture that the Water component can read.
    });

    // Simplified logic: Just run shader on a loop, but better to keep it clean.
    // We'll manage ping-pong manually in a loop ref.
    const frameRef = useRef(0);

    useFrame(({ gl, pointer }) => {
        // Update mouse uniform (pointer is -1 to 1, map to 0 to 1)
        simMaterial.uniforms.uMouse.value.set(pointer.x * 0.5 + 0.5, pointer.y * 0.5 + 0.5);
        simMaterial.uniforms.uFrame.value = frameRef.current;

        // Ping Pong
        const read = frameRef.current % 2 === 0 ? fbo1 : fbo2;
        const write = frameRef.current % 2 === 0 ? fbo2 : fbo1;

        simMaterial.uniforms.tPrev.value = read.texture;
        simMaterial.uniforms.tCurr.value = read.texture; // Approximation for stability

        gl.setRenderTarget(write);
        gl.render(scene, camera);
        gl.setRenderTarget(null);

        // Make result available globally or via context? 
        // Easier pattern: Pass the 'write' texture to a parent or use a shared reference.
        // For this single file, let's put the Water mesh here too or pass a specific ref.

        // ACTUALLY better pattern: The Simulation component updates a shared textureRef.
        if (window.waterTexture) window.waterTexture.value = write.texture;

        frameRef.current++;
    });

    return null;
}

const WaterSurface = () => {
    const shaderRef = useRef();

    const material = useMemo(() => new THREE.ShaderMaterial({
        uniforms: {
            tWater: { value: null }
        },
        vertexShader: waterVertexShader,
        fragmentShader: waterFragmentShader,
        wireframe: true, // Grid look is modern technical
        transparent: true,
        opacity: 0.8
    }), []);

    useFrame(() => {
        if (window.waterTexture && window.waterTexture.value) {
            material.uniforms.tWater.value = window.waterTexture.value;
        }
    });

    return (
        <mesh rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[15, 15, 128, 128]} />
            <primitive object={material} attach="material" />
        </mesh>
    );
};

const FloatingGeometries = () => {
    return (
        <group>
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
                <mesh position={[-5, 2, -5]} rotation={[0, 0.5, 0]}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="#00bcd4" wireframe transparent opacity={0.3} />
                </mesh>
            </Float>

            <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
                <mesh position={[6, -1, -8]} rotation={[0.5, 0, 0]}>
                    <octahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial color="#ff4081" wireframe transparent opacity={0.2} />
                </mesh>
            </Float>

            <Float speed={1} rotationIntensity={1} floatIntensity={2.5}>
                <mesh position={[0, 4, -10]} rotation={[0.2, 0.2, 0.2]}>
                    <dodecahedronGeometry args={[0.8, 0]} />
                    <meshStandardMaterial color="#64ffda" wireframe transparent opacity={0.25} />
                </mesh>
            </Float>

            <Float speed={1.2} rotationIntensity={1.2} floatIntensity={2}>
                <mesh position={[-7, -3, -6]} rotation={[0.1, 0.1, 0.1]}>
                    <tetrahedronGeometry args={[1.2, 0]} />
                    <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.1} />
                </mesh>
            </Float>
        </group>
    );
};

const ParticleField = () => {
    const pointsRef = useRef();

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.05;
            pointsRef.current.rotation.x += delta * 0.02;
        }
    });

    return (
        <group ref={pointsRef}>
            <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
};

// Global ref for texture sharing (Hack but simple for this scale)
if (typeof window !== 'undefined') {
    window.waterTexture = { value: null };
}

export default function WaterBackground() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: -1,
            background: '#050505',
            backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(0, 188, 212, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(255, 64, 129, 0.1) 0%, transparent 40%)'
        }}>
            <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
                <Simulation />
                <WaterSurface />
                <FloatingGeometries />
                <ParticleField />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <fog attach="fog" args={['#050505', 0, 25]} />
            </Canvas>
        </div>
    );
}
