import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: "Backend Technologies",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "RESTful APIs",
        "GraphQL",
        "Microservices Architecture"
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Cassandra",
        "Database Design & Optimization"
      ]
    },
    {
      title: "Message Queues & Tools",
      icon: "🛠️",
      skills: [
        "RabbitMQ",
        "Kafka",
        "gRPC",
        "WebSockets",
        "Docker",
        "Git & GitLab"
      ]
    },
    {
      title: "Languages",
      icon: "💻",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Java",
        "Golang",
        "SQL",
        "Python (Basic)"
      ]
    },
    {
      title: "Frontend & Full-Stack",
      icon: "🎨",
      skills: [
        "React.js",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "Responsive Design"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        "AWS Services",
        "CI/CD Pipelines",
        "Docker Containerization",
        "Nginx",
        "PM2",
        "Linux Administration"
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Backend technologies and tools I use to build scalable systems
          </p>
        </div>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ '--index': index }}
            >
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;