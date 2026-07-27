import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3>Dipayan Sardar</h3>
                        <p className="footer-title">Software Developer & Engineering Researcher</p>
                        <p className="footer-location">Kolkata, India</p>
                    </div>
                    
                    <div className="footer-links">
                        <a href="mailto:dipayansardar73@gmail.com" aria-label="Email"><Mail size={20} /></a>
                        <a href="https://www.linkedin.com/in/dipayan-sardar-a5119a381/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="https://github.com/dipayansardar73-decode" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="footer-resume"><FileText size={18} /> Résumé</a>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; {currentYear} Dipayan Sardar.</p>
                    <p className="footer-tagline">Built with curiosity, engineering thinking and code.</p>
                </div>
            </div>
        </footer>
    );
}
