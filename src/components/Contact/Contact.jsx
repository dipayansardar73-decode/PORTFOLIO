import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };

        try {
            // Attempt to send to the backend service if it's running
            const response = await fetch('https://portfolio-6wrz.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error("Backend reported failure");
            }
        } catch (error) {
            console.error('Error:', error);
            // Fallback since the user requested no false success messages
            setStatus('error');
            
            // Mailto fallback trigger if backend fails
            const mailtoLink = `mailto:dipayansardar73@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent("From: " + formData.name + " (" + formData.email + ")\n\n" + formData.message)}`;
            window.location.href = mailtoLink;
            
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <span className="section-eyebrow">10 — Connect</span>
                <h2 className="section-title">Let's Build Something Meaningful</h2>

                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Get In Touch</h3>
                        <p>
                            I am open to internships, research collaborations, open-source work and interdisciplinary technology projects.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <Mail size={20} className="detail-icon" />
                                <span>dipayansardar73@gmail.com</span>
                            </div>
                            <div className="contact-detail-item">
                                <MapPin size={20} className="detail-icon" />
                                <span>Kolkata, India</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/dipayansardar73-decode" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/dipayan-sardar-a5119a381/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="social-icon cv-link" aria-label="Resume">
                                <FileText size={16} /> Résumé
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass-panel"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Project or Collaboration subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn primary full-width"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Opening Mail App...' : 'Send Message'}
                            {status === 'idle' && <Send size={18} />}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
