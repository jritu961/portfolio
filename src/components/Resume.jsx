import React, { useState } from 'react';
import '../styles/Resume.css';

function Resume() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Google Drive resume download link
  const resumeLink = 'https://drive.google.com/uc?export=download&id=19k6aNXECltyvWRK9AQV2SQWTUwv3bWtI';
  
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleDownload = (e) => {
    setIsDownloading(true);
    setTimeout(() => setIsDownloading(false), 2000);
  };
  
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            My educational background and professional qualifications
          </p>
        </div>
        
        <div className="resume-container">
          <div className="resume-download-wrapper">
            <div className="resume-preview" onClick={handleDownload}>
              <div className="resume-preview-content">
                <div className="preview-header"></div>
                <div className="preview-line" style={{ width: '80%' }}></div>
                <div className="preview-line" style={{ width: '60%' }}></div>
                <div className="preview-line" style={{ width: '90%' }}></div>
                <div className="preview-line" style={{ width: '70%' }}></div>
                <div className="preview-line" style={{ width: '85%' }}></div>
                <div className="preview-line" style={{ width: '65%' }}></div>
                <div className="preview-line" style={{ width: '95%' }}></div>
                <div className="preview-line" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`download-button ${isDownloading ? 'downloading' : ''}`}
              title="Download Resume"
              onClick={handleDownload}
            >
              <svg className="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              {isDownloading ? 'Downloading...' : 'Download Resume (PDF)'}
            </a>
          </div>

          <div className="resume-content">
            <div className="resume-grid">
              <div className="resume-block" style={{ '--index': 0 }}>
                <h3 className="resume-block-title">Education</h3>
                <div className="education-item">
                  <h4>Bachelor of Technology in Computer Science</h4>
                  <p className="institution">Feroze Gandhi Institute of Engineering and Technology, Raebareli</p>
                  <div className="education-details">
                    <span className="date">2022</span>
                    <span className="gpa">GPA: 8.56/10</span>
                  </div>
                </div>
              </div>

              <div className="resume-block" style={{ '--index': 1 }}>
                <h3 className="resume-block-title">Certifications</h3>
                <ul className="certification-list">
                  <li>
                    <span className="cert-name">Java Programming</span>
                    <span className="cert-issuer">Udemy</span>
                  </li>
                  <li>
                    <span className="cert-name">Node.js Backend Development</span>
                    <span className="cert-issuer">Udemy</span>
                  </li>
                  <li>
                    <span className="cert-name">MERN Stack Development</span>
                    <span className="cert-issuer">Certification</span>
                  </li>
                  <li>
                    <span className="cert-name">Appreciation Certificate</span>
                    <span className="cert-issuer">WITS Innovation Lab</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="resume-summary">
              <h3 className="resume-block-title">Professional Summary</h3>
              <p>
                Backend Engineer with 3+ years of experience specializing in Node.js development and microservices architecture. 
                Expert in building RESTful APIs, implementing database solutions with MongoDB and PostgreSQL, and working with message queues. 
                Strong background in system design, performance optimization, and security best practices. 
                Also proficient in full-stack development with React.js when needed.
              </p>
            </div>

            <div className="key-highlights">
              <h3 className="resume-block-title">Key Highlights</h3>
              <div className="highlights-grid">
                <div 
                  className="highlight-item"
                  onMouseMove={handleMouseMove}
                  style={{
                    '--mouse-x': `${mousePosition.x}%`,
                    '--mouse-y': `${mousePosition.y}%`
                  }}
                >
                  <span className="highlight-number">3+</span>
                  <span className="highlight-text">Years Experience</span>
                </div>
                <div 
                  className="highlight-item"
                  onMouseMove={handleMouseMove}
                  style={{
                    '--mouse-x': `${mousePosition.x}%`,
                    '--mouse-y': `${mousePosition.y}%`
                  }}
                >
                  <span className="highlight-number">20+</span>
                  <span className="highlight-text">APIs Developed</span>
                </div>
                <div 
                  className="highlight-item"
                  onMouseMove={handleMouseMove}
                  style={{
                    '--mouse-x': `${mousePosition.x}%`,
                    '--mouse-y': `${mousePosition.y}%`
                  }}
                >
                  <span className="highlight-number">8+</span>
                  <span className="highlight-text">Backend Technologies</span>
                </div>
                <div 
                  className="highlight-item"
                  onMouseMove={handleMouseMove}
                  style={{
                    '--mouse-x': `${mousePosition.x}%`,
                    '--mouse-y': `${mousePosition.y}%`
                  }}
                >
                  <span className="highlight-number">8.56</span>
                  <span className="highlight-text">Academic GPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;