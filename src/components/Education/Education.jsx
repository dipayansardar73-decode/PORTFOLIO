import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap } from 'lucide-react';
import './Education.css';

const educationData = [
    {
        degree: "B.E. in Civil Engineering",
        institution: "Jadavpur University",
        expected: "2028",
        relevant: ["Structural Analysis", "Fluid Mechanics", "Water Resources", "Environmental Engineering"]
    },
    {
        degree: "B.S. in Data Science and Applications",
        institution: "IIT Madras",
        expected: "2028",
        relevant: ["Python", "Data Science", "Statistics", "Machine Learning"]
    }
];

const achievementsData = [
    "AWS AIdeas Competition 2025 — Global Top 1000",
    "Winner — HackNpitch Hackathon",
    "Third Intercollege Round — Smart India Hackathon"
];

export default function Education() {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <span className="section-eyebrow">08 — Background</span>
                <h2 className="section-title">Credentials</h2>

                <div className="credentials-wrapper">
                    <div className="edu-column">
                        <div className="column-header">
                            <GraduationCap className="inline-icon" size={24} /> 
                            <h3>Academic</h3>
                        </div>
                        
                        <div className="edu-list">
                            {educationData.map((edu, index) => (
                                <motion.div 
                                    key={index}
                                    className="edu-card glass-panel"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                >
                                    <div className="edu-card-header">
                                        <h4>{edu.degree}</h4>
                                        <span className="edu-expected">{edu.expected}</span>
                                    </div>
                                    <span className="edu-inst">{edu.institution}</span>
                                    
                                    <div className="edu-relevant">
                                        <div className="edu-tags">
                                            {edu.relevant.map(rel => <span key={rel}>{rel}</span>)}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="achieve-column">
                        <div className="column-header">
                            <Trophy className="inline-icon" size={24} /> 
                            <h3>Achievements</h3>
                        </div>
                        
                        <div className="achieve-list">
                            {achievementsData.map((achievement, index) => (
                                <motion.div 
                                    key={index}
                                    className="achieve-card glass-panel"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.5 }}
                                >
                                    <p>{achievement}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
