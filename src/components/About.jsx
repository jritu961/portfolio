import React from 'react';

function About() {
  // Google Drive direct image URL - proper format for embedding
  const profilePhoto = 'https://drive.google.com/uc?export=view&id=1NmWr3Wex8-eRHiy6dV9kfn5W4eiUPNtu';
  return (
    <section id="about" className="section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about who I am, what I do, and my current skills
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image-bg"></div>
            <img 
              src={profilePhoto} 
              alt="Ritu Jaiswal" 
              className="about-image"
              onError={(e) => {
                console.error('Image failed to load:', profilePhoto);
                // Fallback to local image if Google Drive fails
                e.target.src = '/images/rituPhoto.jpg';
              }}
            />
          </div>
          
          <div className="about-text">
            <h3>Hello! I'm Ritu Jaiswal</h3>
            <p className="about-description">
              I'm a passionate <span className="gradient-text">Software Engineer</span> with 
              <strong> 3+ years of experience</strong> in building scalable web applications 
              and robust backend systems. Currently working at <strong>WITS Innovation Lab</strong>, 
              I specialize in developing microservices architecture and implementing efficient 
              solutions for complex business requirements.
            </p>
            
            <p className="about-description">
              My expertise lies in the <span className="gradient-text">MERN stack</span> 
              (MongoDB, Express.js, React.js, Node.js) along with modern technologies like 
              Kafka, gRPC, and Docker. I have a proven track record of optimizing database 
              queries, implementing secure authentication systems, and building real-time applications.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-text">
                  <div className="highlight-number">3+</div>
                  <div className="highlight-label">Years Experience</div>
                </div>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">💻</div>
                <div className="highlight-text">
                  <div className="highlight-number">50+</div>
                  <div className="highlight-label">Projects Completed</div>
                </div>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">🎓</div>
                <div className="highlight-text">
                  <div className="highlight-number">B.Tech</div>
                  <div className="highlight-label">Computer Science</div>
                </div>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-text">
                  <div className="highlight-number">24/7</div>
                  <div className="highlight-label">Learning Mode</div>
                </div>
              </div>
            </div>
            
            <p className="about-description">
              When I'm not coding, I enjoy exploring new technologies, contributing to 
              open-source projects, and solving challenging problems on competitive 
              programming platforms. I believe in continuous learning and staying 
              updated with the latest industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;