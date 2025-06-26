import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Backend Engineer",
      company: "WITS Innovation Lab",
      location: "Chandigarh",
      period: "Jan 2023 – Present",
      type: "Full-time",
      description: [
        "Architected and developed scalable backend microservices in Node.js handling 10K+ concurrent requests",
        "Implemented event-driven architecture using Kafka for real-time notification system serving 50K+ users",
        "Optimized database queries in PostgreSQL and MongoDB, improving API response time by 40%",
        "Designed and integrated secure RESTful APIs with JWT authentication and rate limiting",
        "Built gRPC-based inter-service communication reducing latency by 60% compared to REST"
      ],
      technologies: ["Node.js", "Kafka", "gRPC", "PostgreSQL", "MongoDB", "Docker", "Redis"]
    },
    {
      title: "Node.js Developer",
      company: "Fynd Academy",
      location: "Noida",
      period: "Nov 2021 – Dec 2022",
      type: "Full Time",
      description: [
        "Built backend infrastructure for logistics management system handling 1000+ daily deliveries",
        "Developed RESTful APIs with Express.js implementing complex business logic for order management",
        "Implemented automated agent assignment algorithm reducing manual allocation time by 60%",
        "Integrated WebSocket for real-time tracking and notification system",
        "Optimized MongoDB queries and implemented indexing strategies improving performance by 35%"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "WebSocket", "Redis", "React"]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Building robust backend systems and scalable architectures
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