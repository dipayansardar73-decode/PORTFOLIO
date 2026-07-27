import React, { Suspense } from 'react';
import './index.css';
import WaterBackground from './components/Background/WaterBackground';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Credibility from './components/Credibility/Credibility';
import About from './components/About/About';
import SelectedWork from './components/SelectedWork/SelectedWork';
import Experience from './components/Experience/Experience';
import Research from './components/Research/Research';
import Skills from './components/Skills/Skills';
import OpenSource from './components/OpenSource/OpenSource';
import Education from './components/Education/Education';
import Exploring from './components/Exploring/Exploring';
import Roadmap from './components/Roadmap/Roadmap';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import ErrorBoundary from './components/UI/ErrorBoundary';

function App() {
  return (
    <div className="app-main">
      <ErrorBoundary>
        <Suspense fallback={null}>
          <WaterBackground />
        </Suspense>
      </ErrorBoundary>

      <Navbar />

      <main>
        <Hero />
        <Credibility />
        <About />
        <Skills />
        <Experience />
        <Research />
        <SelectedWork />
        <Roadmap />
        <OpenSource />
        <Education />
        <Exploring />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
