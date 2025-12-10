import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Modal from '../UI/Modal';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: "ODICROP",
        category: "AI & Agriculture",
        description: "A comprehensive farming assistant for Odisha farmers involving AI/ML. Features include crop prediction, yield estimation, fertilizer recommendations, disease detection via image analysis, and an AI chatbot for query resolution.",
        tech: ["Machine Learning", "React", "Python", "Computer Vision"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "NOVA",
        category: "Social Media",
        description: "A high-efficiency communication and community social media platform designed to empower users with control and seamless interaction.",
        tech: ["React", "Node.js", "WebSockets", "Community"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "JAL",
        category: "Water Management",
        description: "An advanced water management system developed for government use to monitor, analyze, and optimize water resource distribution.",
        tech: ["IoT Integration", "Dashboard", "Analytics"],
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "DIP",
        category: "Automation System",
        description: "An intelligent system designed to automate transport logistics, improving efficiency and reducing manual overhead.",
        tech: ["Automation", "Logistics", "System Architecture"],
        link: "#",
        github: "#"
    },
    {
        id: 5,
        title: "GigVerify",
        category: "Identity Verification",
        description: "A secure verification system to validate the real identity of gig workers in food and product delivery sectors, enhancing safety and trust.",
        tech: ["Blockchain", "Identity Management", "Security"],
        link: "#",
        github: "#"
    },
    {
        id: 6,
        title: "TRD",
        category: "Fintech / Trading",
        description: "A smart trading simulation application that allows users to practice and refine trading strategies in a risk-free environment.",
        tech: ["React", "Finance API", "Data Visualization"],
        link: "#",
        github: "#"
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: 50 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>

                {/* Horizontal Scroll Container */}
                <motion.div
                    className="projects-scroll-container"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className="projects-track">
                        {projectsData.map((project) => (
                            <motion.div
                                key={project.id}
                                className="project-card glass"
                                variants={item}
                                onClick={() => setSelectedProject(project)}
                                whileHover={{ scale: 1.05, y: -10 }}
                            >
                                <div className="project-image-placeholder">
                                    {/* Placeholder for project screenshot */}
                                    <span>{project.title[0]}</span>
                                </div>
                                <div className="project-info">
                                    <span className="project-category">{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <p className="project-short-desc">Click to view details</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title}
            >
                {selectedProject && (
                    <div className="project-detail">
                        <div className="detail-tags">
                            {selectedProject.tech.map(t => <span key={t} className="tag">{t}</span>)}
                        </div>
                        <p className="detail-desc">{selectedProject.description}</p>
                        <div className="detail-actions">
                            <a href={selectedProject.link} className="btn primary small"><ExternalLink size={16} /> Live Demo</a>
                            <a href={selectedProject.github} className="btn secondary small"><Github size={16} /> Code</a>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
}
