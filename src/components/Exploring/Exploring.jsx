import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Brain, Activity } from 'lucide-react';
import './Exploring.css';

const learningGroups = [
    {
        title: "Data & Infrastructure",
        icon: <Database size={24} />,
        topics: ["Advanced SQL & Analytical Querying", "Pandas & Structured Data", "Web Scraping (Playwright)"]
    },
    {
        title: "Backend & Systems",
        icon: <Server size={24} />,
        topics: ["REST API Authentication", "Payment Gateway Integration", "Cloud Deployment Fundamentals"]
    },
    {
        title: "AI & Language Models",
        icon: <Brain size={24} />,
        topics: ["LLM Application Development", "LangChain Framework", "RAG Fundamentals"]
    },
    {
        title: "Performance & Quality",
        icon: <Activity size={24} />,
        topics: ["Technical SEO", "Google Search Console", "Automated Testing"]
    }
];

export default function Exploring() {
    return (
        <section id="exploring" className="exploring-section">
            <div className="container">
                <span className="section-eyebrow">09 — Curiosity</span>
                <h2 className="section-title">Currently Exploring</h2>

                <div className="exploring-grid">
                    {learningGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            className="exploring-card glass-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="exploring-header">
                                <div className="exploring-icon">
                                    {group.icon}
                                </div>
                                <h3>{group.title}</h3>
                            </div>
                            <ul className="exploring-list">
                                {group.topics.map((topic, i) => (
                                    <li key={i}>{topic}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
