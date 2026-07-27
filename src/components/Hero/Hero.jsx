import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText, MapPin, Award, Building, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

import profileImg from '../../assets/profile.jpg'; // We can use this placeholder path if needed

export default function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="hero-badge">
                            <span className="status-dot"></span>
                            Available for internships from August 2026
                        </div>
                        
                        <h1 className="hero-title">
                            Building software, data products and engineering solutions.
                        </h1>
                        
                        <p className="hero-role">
                            Full-Stack Developer · Data Science Student · Engineering Researcher
                        </p>
                        
                        <p className="hero-subtitle">
                            I am an interdisciplinary undergraduate at Jadavpur University and IIT Madras, working across software development, data science, artificial intelligence and computational engineering.
                        </p>

                        <div className="hero-cta">
                            <a href="#selectedwork" className="btn primary">View Selected Work</a>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn secondary">
                                <FileText size={18} /> Download Résumé
                            </a>
                        </div>

                        <div className="hero-socials">
                            <a href="https://github.com/dipayansardar73-decode" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/dipayan-sardar-a5119a381/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="mailto:dipayansardar73@gmail.com" aria-label="Email"><Mail size={20} /></a>
                        </div>
                    </motion.div>
                </div>

                <div className="hero-content-right">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="profile-panel glass-panel"
                    >
                        <div className="profile-header">
                            <div className="profile-avatar">
                                <img src={profileImg} alt="Dipayan Sardar" onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=Dipayan+Sardar&background=00bcd4&color=fff&size=120'; }} />
                            </div>
                            <div>
                                <h3>Dipayan Sardar</h3>
                                <p className="profile-location"><MapPin size={14} /> Kolkata, India</p>
                            </div>
                        </div>
                        
                        <div className="profile-details">
                            <div className="profile-item">
                                <Building size={16} />
                                <span>Jadavpur University</span>
                            </div>
                            <div className="profile-item">
                                <Building size={16} />
                                <span>IIT Madras</span>
                            </div>
                            <div className="profile-item">
                                <BookOpen size={16} />
                                <span>IIT Bombay Research Exp.</span>
                            </div>
                            <div className="profile-item">
                                <Award size={16} />
                                <span>AWS AIdeas Global Top 1000</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="scroll-indicator"
            >
                <ArrowDown size={20} />
            </motion.div>
        </section>
    );
}
