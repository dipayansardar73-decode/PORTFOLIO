import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const timelineData = [
    {
        year: "Present",
        title: "Hackathons & Competitions",
        place: "Technical Achievements",
        desc: "Participated and won in multiple Hackathons and Technical Competitions. Demonstrated problem-solving skills and innovation on various platforms."
    },
    {
        year: "Present",
        title: "Coordinator & Member",
        place: "Entrepreneurship Cell (E-Cell), JU",
        desc: "Active member and Coordinator, managing events, leading teams, and gaining skills in event management, leadership, and design."
    },
    {
        year: "Present",
        title: "Bachelor of Civil Engineering (2nd Year)",
        place: "Jadavpur University",
        desc: "Pursuing Civil Engineering at one of India's top universities."
    },
    {
        year: "Present",
        title: "BS in Data Science & Applications",
        place: "IIT Madras",
        desc: "Pursuing a dual degree in Data Science from the prestigious IIT Madras, focusing on data analysis, machine learning, and python."
    },
    {
        year: "2023",
        title: "Competitive Exam Achievements",
        place: "All India & State Level",
        desc: "Secured a top rank in WBJEE to join Jadavpur University. Also cracked JEE Mains, JEE Advanced, and NEET with excellent results."
    },
    {
        year: "2023",
        title: "Higher Secondary (11th & 12th)",
        place: "Dakshin Barasat Sib Das Acharya High School",
        desc: "Completed schooling with a strong foundation in Pure Science."
    }
];

export default function Education() {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <h2 className="section-title">Education & <span className="highlight">Experience</span></h2>

                <div className="timeline">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                        >
                            <div className="timeline-content glass">
                                <span className="timeline-year">{item.year}</span>
                                <h3>{item.title}</h3>
                                <h4>{item.place}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
