import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Brain, Cog, PenTool } from 'lucide-react';
import './Skills.css';

const skillsData = [
    {
        category: "Programming",
        icon: <Code size={24} />,
        items: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"]
    },
    {
        category: "Full-Stack Development",
        icon: <Layers size={24} />,
        items: ["React", "Node.js", "PostgreSQL", "REST API", "Tailwind CSS", "Git", "GitHub"]
    },
    {
        category: "Data and AI",
        icon: <Brain size={24} />,
        items: ["Data Analysis", "Machine Learning", "PyTorch", "Jupyter", "Data Visualisation", "Data Preprocessing"]
    },
    {
        category: "Engineering and Research",
        icon: <Cog size={24} />,
        items: ["Numerical Modelling", "Engineering Data Analysis", "AutoCAD", "Experimental Data", "Technical Documentation"]
    },
    {
        category: "Design and Product",
        icon: <PenTool size={24} />,
        items: ["Figma", "Canva", "UI/UX", "Product Prototyping"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <span className="section-eyebrow">02 — Expertise</span>
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-matrix glass-panel">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            className="skill-row"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="skill-category">
                                {skillGroup.icon}
                                <h3>{skillGroup.category}</h3>
                            </div>
                            <div className="skill-items">
                                {skillGroup.items.map((skill) => (
                                    <span key={skill} className="skill-pill">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
