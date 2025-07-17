import React from 'react';
import GalaxyBackground from './components/GalaxyBackground';
import GalaxyStarfield from './components/GalaxyStarfield';
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
import './index.css';

function App() {
  return (
    <div className="App">
      <GalaxyBackground />
      <GalaxyStarfield density={0.8} speed={0.5} />
      <ScrollProgress />
      <Header />
      
      <SectionTransition>
        <Hero />
      </SectionTransition>
      
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