import React from 'react';
import ScrollProgress from './components/ScrollProgress';
import SectionTransition from './components/SectionTransition';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalaxyBackground from './components/GalaxyBackground';
import './index.css';

function App() {
  return (
    <div className="App">
      <GalaxyBackground />
      <ScrollProgress />
      <Header />
      <Hero />
      <SectionTransition>
        <About />
      </SectionTransition>
      <SectionTransition>
        <Education />
      </SectionTransition>
      <SectionTransition>
        <Skills />
      </SectionTransition>
      <SectionTransition>
        <Journey />
      </SectionTransition>
      <SectionTransition>
        <Projects />
      </SectionTransition>
      <SectionTransition>
        <Contact />
      </SectionTransition>
      <Footer />
    </div>
  );
}

export default App;