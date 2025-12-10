import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <span className="hero-greeting">Hello, I'm Dipayan Sardar</span>
                    <h1 className="hero-title">
                        Full Stack <span className="highlight">Developer</span><br />
                        & UI/UX <span className="highlight">Designer</span>
                    </h1>
                    <p className="hero-subtitle">
                        Civil Engineering Student at Jadavpur University | BS Data Science Scholar at IIT Madras.
                        Crafting advanced digital experiences with modern web & mobile technologies.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn primary">View Work</a>
                        <a href="#contact" className="btn secondary">Contact Me</a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="scroll-indicator"
                >
                    <span>Scroll Down</span>
                    <ArrowDown size={20} className="bounce" />
                </motion.div>
            </div>
        </section>
    );
}
