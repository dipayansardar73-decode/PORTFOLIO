import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import './SelectedWork.css';

const projectsData = [
    {
        id: 1,
        title: "Vastu — Automated Building Design and Analysis Platform",
        category: "Civil Engineering Technology / Full-Stack Product",
        status: "Prototype",
        summary: "A civil-engineering software platform designed to automate parts of the building-design workflow using computational methods, interactive visualisation and software engineering.",
        problem: "Conventional building-design workflows often require repetitive manual work and movement between multiple disconnected tools.",
        role: "Founder and primary developer responsible for the product concept, interface direction, engineering workflow and development.",
        tech: ["Python", "JavaScript", "Computational Geometry", "AI/ML concepts", "Three.js"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Bhumi — Multilingual AI Platform for Farmers",
        category: "AI / Agriculture Technology",
        status: "Prototype",
        summary: "A multilingual platform designed to provide crop guidance, disease-support workflows, irrigation advice and voice-enabled interaction.",
        problem: "Many farmers face barriers involving language, accessibility and fragmented access to agricultural information.",
        role: "Worked on product workflow, frontend development and voice-enabled interaction.",
        tech: ["React", "Azure Speech", "AI/ML concepts", "IoT concepts"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Water Leakage Detection and Localisation System",
        category: "Machine Learning / Infrastructure",
        status: "Research Prototype",
        summary: "A Python and machine-learning-based system concept for identifying abnormal leakage patterns in water-distribution pipelines using sensor and hydraulic data.",
        problem: "Undetected pipeline leakage causes water loss, infrastructure damage and delayed maintenance.",
        role: "Worked on the system concept, data-driven detection workflow and engineering interpretation.",
        tech: ["Python", "Machine Learning", "Sensor Data", "Hydraulic Analysis"],
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "RailFlow — Railway Scheduling and Traffic Optimisation",
        category: "Optimisation / Transportation",
        status: "Prototype",
        summary: "A Python-based optimisation project exploring improved railway scheduling and transportation-system coordination.",
        problem: "Scheduling conflicts and inefficient resource allocation can reduce the reliability of transport systems.",
        role: "Designed the problem structure, scheduling logic and optimisation workflow.",
        tech: ["Python", "Optimisation Algorithms", "Data Modelling"],
        comingSoon: true
    },
    {
        id: 5,
        title: "EroTwin — Numerical Modelling of Soil Erosion",
        category: "Research / Computational Eng.",
        status: "Research",
        summary: "Experimental and computational analysis of erosion behaviour in a laboratory flume using numerical simulations and structured data analysis.",
        problem: "Understanding soil erosion is critical for sustainable infrastructure and environmental management.",
        role: "Experimental and numerical data organisation, Simulation-result interpretation, Particle-erosion tracking.",
        tech: ["Python", "Numerical Modelling", "CFD-DEM concepts", "Scientific Visualisation"],
        note: "Selected technical details are available for discussion during an interview."
    },
    {
        id: 6,
        title: "Portfolio Platform — Personal Developer Portfolio",
        category: "Frontend / Product Design",
        status: "Live",
        summary: "A responsive personal portfolio designed to present technical projects, research experience and open-source contributions.",
        problem: "Needed a centralized platform to showcase multidisciplinary skills and projects to recruiters and collaborators.",
        role: "Designed, developed and deployed the complete interface.",
        tech: ["React", "Vite", "Framer Motion", "Three.js"],
        link: "https://portfolio-frontend-1n80.onrender.com/",
        github: "https://github.com/dipayansardar73-decode/PORTFOLIO"
    }
];

export default function SelectedWork() {
    const [selectedProject, setSelectedProject] = useState(null);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Live': return 'var(--accent-cyan)';
            case 'Prototype': return '#2196F3';
            case 'Research Prototype': return '#FF9800';
            case 'Research': return '#9C27B0';
            default: return 'var(--text-secondary)';
        }
    };

    const featuredProject = projectsData[0];
    const gridProjects = projectsData.slice(1);

    return (
        <section id="selectedwork" className="projects-section">
            <div className="container">
                <span className="section-eyebrow">05 — Portfolio</span>
                <h2 className="section-title">Selected Work</h2>

                {/* Featured Project */}
                <motion.div 
                    className="featured-project glass-panel"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    onClick={() => setSelectedProject(featuredProject)}
                >
                    <div className="featured-content">
                        <div className="project-header">
                            <span 
                                className="project-status"
                                style={{ borderColor: getStatusColor(featuredProject.status), color: getStatusColor(featuredProject.status) }}
                            >
                                {featuredProject.status}
                            </span>
                            <span className="project-category">{featuredProject.category}</span>
                        </div>
                        <h3 className="project-title-large">{featuredProject.title}</h3>
                        <p className="project-summary-large">{featuredProject.summary}</p>
                        <div className="project-tech-preview">
                            {featuredProject.tech.map(t => (
                                <span key={t} className="tech-tag">{t}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Grid Projects */}
                <div className="projects-grid">
                    {gridProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-content">
                                <div className="project-header">
                                    <span 
                                        className="project-status"
                                        style={{ borderColor: getStatusColor(project.status), color: getStatusColor(project.status) }}
                                    >
                                        {project.status}
                                    </span>
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-category-small">{project.category}</p>
                                <p className="project-summary">{project.summary}</p>
                                
                                <div className="project-tech-preview">
                                    {project.tech.slice(0, 3).map(t => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                    {project.tech.length > 3 && <span className="tech-tag">+{project.tech.length - 3}</span>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                        <motion.div 
                            className="modal-content glass-panel"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={() => setSelectedProject(null)}>
                                <X size={24} />
                            </button>
                            
                            <div className="modal-header">
                                <span 
                                    className="project-status"
                                    style={{ borderColor: getStatusColor(selectedProject.status), color: getStatusColor(selectedProject.status) }}
                                >
                                    {selectedProject.status}
                                </span>
                                <h2>{selectedProject.title}</h2>
                            </div>

                            <div className="modal-body">
                                <div className="modal-section">
                                    <h4>Summary</h4>
                                    <p>{selectedProject.summary}</p>
                                </div>
                                
                                <div className="modal-section">
                                    <h4>The Problem</h4>
                                    <p>{selectedProject.problem}</p>
                                </div>

                                <div className="modal-section">
                                    <h4>My Role</h4>
                                    <p>{selectedProject.role}</p>
                                </div>

                                <div className="modal-section">
                                    <h4>Technologies</h4>
                                    <div className="modal-tags">
                                        {selectedProject.tech.map(t => (
                                            <span key={t} className="tech-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                
                                {selectedProject.note && (
                                    <div className="modal-note">
                                        <p><i>Note: {selectedProject.note}</i></p>
                                    </div>
                                )}
                            </div>

                            <div className="modal-actions">
                                {selectedProject.link && selectedProject.link !== "#" && (
                                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn primary">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                )}
                                {selectedProject.github && selectedProject.github !== "#" && (
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn secondary">
                                        <Github size={18} /> View Code
                                    </a>
                                )}
                                {(selectedProject.link === "#" || selectedProject.github === "#") && !selectedProject.comingSoon && (
                                    <button className="btn secondary" disabled>Code Private</button>
                                )}
                                {selectedProject.comingSoon && (
                                    <button className="btn secondary" disabled>Documentation Coming Soon</button>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
