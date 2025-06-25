import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "WITS Innovation Lab",
      location: "Chandigarh",
      period: "Jan 2023 – Present",
      type: "Full-time",
      description: [
        "Developed scalable backend services in Node.js using microservice architecture",
        "Implemented Kafka-based notification systems and integrated gRPC for internal service communication",
        "Optimized PostgreSQL and MongoDB queries to enhance data retrieval efficiency by 40%",
        "Integrated secure third-party APIs ensuring compliance and robustness",
        "Led a team of 3 developers in building a real-time analytics dashboard"
      ],
      technologies: ["Node.js", "Kafka", "gRPC", "PostgreSQL", "MongoDB", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Fynd Academy",
      location: "Noida",
      period: "Nov 2021 – Dec 2022",
      type: "Full Time",
      description: [
        "Developed a logistics management platform using Node.js and React with real-time tracking",
        "Implemented auto-agent assignment system reducing manual work by 60%",
        "Created secure and efficient REST APIs with proper authentication and performance optimization",
        "Designed responsive frontend components using React and Tailwind CSS",
        "Integrated real-time notifications and tracking features using WebSocket"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "WebSocket"]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey through different roles and the impact I've made
          </p>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-item"
              style={{ '--index': index }}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title">{exp.title}</div>
                  <div className="experience-company">{exp.company}</div>
                  <div className="experience-meta">
                    <span className="experience-date">{exp.period}</span>
                    <span className="experience-type">{exp.type}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>
                
                <div className="experience-description">
                  <ul>
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;