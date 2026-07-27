import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Wrench, BarChart, Server, Layout } from 'lucide-react';
import './Roadmap.css';

const plannedProjects = [
    {
        id: 7,
        title: "InsightForge",
        category: "Data Analytics",
        description: "An interactive analytics dashboard for cleaning, analysing and visualising business datasets.",
        icon: <BarChart size={20} />
    },
    {
        id: 8,
        title: "ShopPulse",
        category: "Full-Stack / Data Analytics",
        description: "A dashboard for analysing product performance, customer behaviour, cart activity, and sales trends.",
        icon: <Layout size={20} />
    },
    {
        id: 9,
        title: "RankWise",
        category: "SEO / Web Performance",
        description: "A website-audit tool designed to review metadata, headings, page performance, and accessibility.",
        icon: <Lightbulb size={20} />
    },
    {
        id: 10,
        title: "ExtractFlow",
        category: "Automation / Data Engineering",
        description: "A configurable data-extraction tool for collecting structured information from permitted public web pages.",
        icon: <Wrench size={20} />
    },
    {
        id: 11,
        title: "DocuMind",
        category: "LLM Application",
        description: "An AI-assisted document analysis tool that retrieves relevant passages from uploaded documents.",
        icon: <Lightbulb size={20} />
    },
    {
        id: 12,
        title: "PayFlow Sandbox",
        category: "Full-Stack / Payments",
        description: "A test-environment checkout application demonstrating secure server-side payment-order creation.",
        icon: <Server size={20} />
    }
];

export default function Roadmap() {
    return (
        <section id="roadmap" className="roadmap-section">
            <div className="container">
                <div className="roadmap-header">
                    <span className="section-eyebrow">06 — Future</span>
                    <h2 className="section-title">Development Roadmap</h2>
                    <p className="roadmap-subtitle">Upcoming concepts currently in the research or planning phase.</p>
                </div>

                <div className="roadmap-list">
                    {plannedProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="roadmap-item glass-panel"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="roadmap-icon">
                                {project.icon}
                            </div>
                            <div className="roadmap-content">
                                <h3 className="roadmap-title">{project.title}</h3>
                                <span className="roadmap-category">{project.category}</span>
                            </div>
                            <div className="roadmap-description">
                                <p>{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
