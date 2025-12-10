import React, { Suspense } from 'react';
import './index.css';
import WaterBackground from './components/Background/WaterBackground';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

import ErrorBoundary from './components/UI/ErrorBoundary';

function App() {
  return (
    <div className="app-main">
      {/* Background is fixed */}
      <ErrorBoundary>
        <Suspense fallback={null}>
          <WaterBackground />
        </Suspense>
      </ErrorBoundary>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '20px',
        color: '#555',
        fontSize: '0.8rem',
        position: 'relative',
        zIndex: 10
      }}>
        &copy; 2025 Designed & Built by Dipayan Sardar.
      </footer>
    </div>
  );
}

export default App;
