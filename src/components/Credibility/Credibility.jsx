import React from 'react';
import { GraduationCap, Award, BookOpen, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import './Credibility.css';

const credibilityData = [
    {
        icon: <GraduationCap size={24} />,
        title: "Two Degree Programmes",
        desc: "Jadavpur Univ. & IIT Madras"
    },
    {
        icon: <BookOpen size={24} />,
        title: "IIT Bombay Research Exp.",
        desc: "Soil-Erosion Modelling"
    },
    {
        icon: <Award size={24} />,
        title: "AWS AIdeas Top 1000",
        desc: "Global Competition 2025"
    },
    {
        icon: <Code size={24} />,
        title: "Full-Stack, AI & Engineering",
        desc: "Interdisciplinary Projects"
    }
];

export default function Credibility() {
    return (
        <section id="credibility" className="credibility-section">
            <div className="container">
                <motion.div
                    className="credibility-strip glass-panel"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {credibilityData.map((item, index) => (
                        <div key={index} className="credibility-item">
                            <div className="credibility-icon">
                                {item.icon}
                            </div>
                            <div className="credibility-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
