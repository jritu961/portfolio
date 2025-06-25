import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Add scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.add('scroll-reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
      
      <footer className="footer">
        <div className="footer-links">
          <a href="https://github.com/jritu961" className="footer-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ritu-jaiswal-4541851b3/" className="footer-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:jritu961@gmail.com" className="footer-link">
            Email
          </a>
        </div>
        <p>&copy; 2024 Ritu Jaiswal. Built with React & modern web technologies.</p>
      </footer>
    </div>
  );
}

export default App;