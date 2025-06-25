import React from 'react';
import '../styles/Resume.css';

function Resume() {
  // Google Drive resume download link
  const resumeLink = 'https://drive.google.com/uc?export=download&id=19k6aNXECltyvWRK9AQV2SQWTUwv3bWtI';
  
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
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
              title="Download Resume"
            >
              <svg className="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume (PDF)
            </a>
          </div>

          <div className="resume-content">
            <div className="resume-grid">
              <div className="resume-block">
                <h3 className="resume-block-title">Education</h3>
                <div className="education-item">
                  <h4>Bachelor of Technology in Computer Science</h4>
                  <p className="institution">Feroze Gandhi Institute of Engineering and Technology, Raebareli</p>
                  <div className="education-details">
                    <span className="date">2022</span>
                    <span className="separator">•</span>
                    <span className="gpa">GPA: 8.56/10</span>
                  </div>
                </div>
              </div>

              <div className="resume-block">
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
                Software Engineer with 3+ years of experience specializing in full-stack development. 
                Proficient in Node.js, React, Express.js, MongoDB, and PostgreSQL. 
                Strong expertise in building scalable microservices, implementing robust APIs, 
                and translating business requirements into efficient technical solutions.
              </p>
            </div>

            <div className="key-highlights">
              <h3 className="resume-block-title">Key Highlights</h3>
              <div className="highlights-grid">
                <div className="highlight-item">
                  <span className="highlight-number">3+</span>
                  <span className="highlight-text">Years Experience</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">10+</span>
                  <span className="highlight-text">Projects Delivered</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">5+</span>
                  <span className="highlight-text">Tech Stacks</span>
                </div>
                <div className="highlight-item">
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