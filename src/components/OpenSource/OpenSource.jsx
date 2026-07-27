import React from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, Github } from 'lucide-react';
import './OpenSource.css';

const osData = [
    {
        repo: "Eventra",
        pr: "#987",
        type: "Bug Fix / Feature",
        desc: "Contribution details are being documented."
    },
    {
        repo: "Sahidawa India",
        pr: "#55",
        type: "Improvement",
        desc: "Contribution details are being documented."
    },
    {
        repo: "AegisAI",
        pr: "#216",
        type: "Documentation / Feature",
        desc: "Contribution details are being documented."
    },
    {
        repo: "DraftDeckAI",
        pr: "#439",
        type: "Optimization",
        desc: "Contribution details are being documented."
    }
];

export default function OpenSource() {
    return (
        <section id="opensource" className="os-section">
            <div className="container">
                <span className="section-eyebrow">07 — Community</span>
                <h2 className="section-title">Open Source</h2>

                <div className="os-container">
                    <motion.div 
                        className="os-text-column"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="os-intro">
                            I have worked with existing repositories by reading project documentation, setting up codebases locally, tracing relevant components, reproducing issues, implementing scoped changes and submitting pull requests.
                        </p>
                    </motion.div>

                    <div className="os-list-column">
                        {osData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="os-row-item glass-panel"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="os-row-header">
                                    <Github size={20} className="os-icon" />
                                    <h3>{item.repo}</h3>
                                    <div className="os-pr-badge">
                                        <GitPullRequest size={14} />
                                        <span>PR {item.pr}</span>
                                    </div>
                                </div>
                                <div className="os-row-body">
                                    <span className="os-type">{item.type}</span>
                                    <p className="os-desc">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
