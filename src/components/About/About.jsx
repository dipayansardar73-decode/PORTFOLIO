import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/profile.jpg';
import './About.css';

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="image-wrapper glass">
                        <img src={profileImg} alt="Dipayan Sardar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </motion.div>

                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title left">About <span className="highlight">Me</span></h2>
                    <p>
                        I am Dipayan Sardar, a passionate developer and 2nd-year Civil Engineering student at Jadavpur University, one of India's top universities, where I secured admission through a high rank in the WBJEE exam.
                        Simultaneously, I am pursuing a BS in Data Science from IIT Madras as a dual degree.
                    </p>
                    <p>
                        My journey began at Dakshin Barasat Sib Das Acharya High School. Beyond academics, I am an active Coordinator and Member of the Jadavpur University Entrepreneurship Cell (E-Cell),
                        where I honed my skills in event management, leadership, and design. I deeply love creating immersive full-stack applications and solving real-world problems through code.
                    </p>
                    <div className="stats">
                        <div className="stat-item">
                            <h3>2+</h3>
                            <p>Degrees Pursuing</p>
                        </div>
                        <div className="stat-item">
                            <h3>20+</h3>
                            <p>Projects</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Dedication</p>
                        </div>
                    </div>
                </motion.div>            </div>
        </section>
    );
}
