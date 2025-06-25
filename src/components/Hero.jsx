import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Full Stack Developer',
    'Backend Engineer',
    'React Developer',
    'Node.js Expert',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-greeting">Hello, I'm</h1>
          <h2 className="hero-name">Ritu Jaiswal</h2>
          <div className="hero-role">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description">
            Passionate about building scalable systems and translating business needs into technical solutions
          </p>
          <div className="hero-cta">
            <a href="#projects" className="cta-button primary">
              View My Work
              <svg className="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="cta-button secondary">
              Get In Touch
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-value">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-value">5+</span>
              <span className="stat-label">Tech Stacks</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>
              <span className="window-title">index.js</span>
            </div>
            <pre className="code-content">
              <code>
{`const developer = {
  name: 'Ritu Jaiswal',
  skills: ['Node.js', 'React', 'MongoDB'],
  passionate: true,
  
  buildAwesome: () => {
    return 'Creating scalable solutions';
  }
};

developer.buildAwesome();`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-icon">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;