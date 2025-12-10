import React from 'react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
    const [status, setStatus] = React.useState('idle'); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = {
            name: e.target[0].value,
            email: e.target[1].value,
            message: e.target[2].value
        };

        try {
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
                setStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Let's <span className="highlight">Connect</span></h2>

                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3>Get In Touch</h3>
                        <p>
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a question or just want to say hi, feel free to drop a message!
                        </p>

                        <div className="social-links">
                            <a href="https://github.com/dipayansardar73-decode" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={24} /></a>
                            <a href="https://www.linkedin.com/in/dipayan-sardar-a5119a381/" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={24} /></a>
                            <a href="mailto:24f3003490@ds.study.iitm.ac.in" className="social-icon"><Mail size={24} /></a>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn primary full-width"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed, Try Again' : 'Send Message'}
                            {status === 'idle' && <Send size={18} />}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
