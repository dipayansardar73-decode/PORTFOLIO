import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Terminal } from 'lucide-react';
import './Skills.css';

const skillsData = [
    {
        category: "Languages",
        icon: <Code size={40} />,
        items: ["JavaScript", "Python", "Dart", "SQL", "HTML", "CSS"]
    },
    {
        category: "Frontend & Mobile",
        icon: <Layout size={40} />,
        items: ["React", "Flutter", "Tailwind CSS", "Three.js", "Framer Motion", "UI/UX Design"]
    },
    {
        category: "Backend & DB",
        icon: <Database size={40} />,
        items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"]
    },
    {
        category: "Data & Tools",
        icon: <Terminal size={40} />,
        items: ["Data Science", "Git", "Figma", "VS Code", "Event Management"]
    }
];

export default function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical <span className="highlight">Skills</span></h2>

                <div className="skills-grid">
                    {skillsData.map((skillGroup) => (
                        <motion.div
                            key={skillGroup.category}
                            className="skill-card glass"
                            variants={item}
                        >
                            <div className="skill-icon">
                                {skillGroup.icon}
                            </div>
                            <h3>{skillGroup.category}</h3>
                            <ul className="skill-list">
                                {skillGroup.items.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
