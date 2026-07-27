import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, Droplets } from 'lucide-react';
import './Research.css';

const researchData = [
    {
        title: "Numerical Modelling of Soil Erosion",
        organization: "Indian Institute of Technology Bombay",
        icon: <TrendingUp size={24} />,
        description: "Worked with experimental and numerical data for soil-erosion modelling. Investigated particle-erosion tracking, interpreted simulation results using CFD-DEM concepts, and compared computational behaviour with laboratory flume observations."
    },
    {
        title: "Water Leakage Detection Systems",
        organization: "Independent Research Concept",
        icon: <Droplets size={24} />,
        description: "Explored machine-learning-based techniques to identify abnormal hydraulic patterns in water-distribution pipelines, aiming to reduce infrastructure damage and water loss using sensor data."
    },
    {
        title: "Environmental Engineering Data Analysis",
        organization: "Academic Integration",
        icon: <Database size={24} />,
        description: "Applied statistical methods and Python-based data analysis tools to evaluate environmental metrics, focusing on structured data processing and scientific visualisation."
    }
];

export default function Research() {
    return (
        <section id="research" className="research-section">
            <div className="container">
                <span className="section-eyebrow">04 — Academic Context</span>
                <h2 className="section-title">Research & Engineering</h2>

                <div className="research-grid">
                    {researchData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="research-card glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="research-icon">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <span className="research-org">{item.organization}</span>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
