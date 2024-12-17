import React from 'react';
import Header from './components/Header/Header.tsx'
import Main from './sections/Main/Main.tsx'
import About from './sections/About/About.tsx'
import Experience from './sections/Experience/Experience.tsx'
import Skills from './sections/Skills/Skills.tsx'
import Projects from './sections/Projects/Projects.tsx'
import Contact from './sections/Contact/Contact.tsx'
import FooterMenu from './components/FooterMenu/FooterMenu.tsx'
import Footer from './components/FooterCopyright/FooterCopyright.tsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <FooterMenu />
      <Footer />
    </div>
  );
}

export default App;
