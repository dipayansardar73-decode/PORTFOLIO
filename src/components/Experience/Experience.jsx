import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experienceData = [
    {
        title: "Research Intern",
        organization: "Indian Institute of Technology Bombay",
        period: "May 2026 – Present",
        responsibilities: [
            "Worked on numerical modelling and data analysis for soil erosion using laboratory flume experiments and computational simulations.",
            "Organised experimental and numerical datasets, analysed erosion trends, and compared results.",
            "Prepared technical visualisations, documentation and progress presentations."
        ]
    },
    {
        title: "Core Coordinator",
        organization: "Jadavpur University Entrepreneurship Cell",
        period: "Present",
        responsibilities: [
            "Coordinated entrepreneurship and innovation activities.",
            "Supported the organisation of the Hult Prize Kolkata round, JU E-Summit and Srijan Tech Fest.",
            "Worked with teams, participants, organisers and external stakeholders."
        ]
    },
    {
        title: "Core Coordinator",
        organization: "JU Association for Computing Machinery Student Chapter",
        period: "Present",
        responsibilities: [
            "Supported technical workshops, coding activities and AI/ML-focused events."
        ]
    },
    {
        title: "Event Manager & Point of Contact",
        organization: "Srijan Tech Fest",
        period: "Past",
        responsibilities: [
            "Served as a point of contact for large-scale technical events, coordinating participants and organisers."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="experience-header-section">
                    <span className="section-eyebrow">03 — Career</span>
                    <h2 className="section-title">Experience</h2>
                </div>

                <div className="timeline-container">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-panel">
                                <div className="timeline-header">
                                    <div>
                                        <h3 className="timeline-title">{exp.title}</h3>
                                        <h4 className="timeline-org">{exp.organization}</h4>
                                    </div>
                                    <div className="timeline-period">{exp.period}</div>
                                </div>
                                <ul className="timeline-responsibilities">
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
