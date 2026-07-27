import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Logic to determine active section
            const sections = document.querySelectorAll('section');
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero', id: 'hero' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Work', href: '#selectedwork', id: 'selectedwork' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Open Source', href: '#opensource', id: 'opensource' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#hero" className="logo" onClick={() => setMenuOpen(false)}>
                    DIPAYAN<span>.</span>
                </a>

                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <div className="nav-items-group">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                            >
                                <span className="link-text">{link.name}</span>
                                <span className="link-hover">{link.name}</span>
                            </a>
                        ))}
                    </div>
                    
                    <div className="nav-actions-group">
                        <a href="https://github.com/dipayansardar73-decode" target="_blank" rel="noopener noreferrer" className="nav-social-icon" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/dipayan-sardar-a5119a381/" target="_blank" rel="noopener noreferrer" className="nav-social-icon" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn secondary nav-btn">
                            <FileText size={16} /> Résumé
                        </a>
                    </div>
                </div>

                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
}
