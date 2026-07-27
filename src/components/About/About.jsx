import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cog } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';
import './About.css';

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <span className="section-eyebrow">01 — Introduction</span>
                <h2 className="section-title">About Me</h2>
                
                <div className="about-container">
                    <motion.div
                        className="about-image-column"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="image-wrapper">
                            <img src={profileImg} alt="Dipayan Sardar" onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=Dipayan+Sardar&background=00bcd4&color=fff&size=400'; }} />
                        </div>
                        <p className="image-caption">Interdisciplinary technology and engineering student</p>
                    </motion.div>

                    <motion.div
                        className="about-text-column"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="about-bio">
                            I am Dipayan Sardar, pursuing Civil Engineering at Jadavpur University and Data Science and Applications at IIT Madras.
                        </p>
                        <p className="about-bio">
                            My work combines software development, data analysis, artificial intelligence and engineering research. During my research internship at IIT Bombay, I worked with experimental and numerical data for soil-erosion modelling.
                        </p>
                        <p className="about-bio">
                            I enjoy understanding complex systems, organising technical information and converting real-world problems into functional products.
                        </p>

                        <div className="about-focus-areas">
                            <div className="focus-item glass-panel">
                                <Code2 size={20} />
                                <span>Software Development</span>
                            </div>
                            <div className="focus-item glass-panel">
                                <Database size={20} />
                                <span>Data and AI</span>
                            </div>
                            <div className="focus-item glass-panel">
                                <Cog size={20} />
                                <span>Computational Engineering</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
