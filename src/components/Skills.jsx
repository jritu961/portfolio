import React from 'react';

function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: "💻",
      skills: [
        "Node.js (Express.js, Nest.js)",
        "JavaScript (ES6+)",
        "React.js",
        "Core Java",
        "Golang"
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "SQL",
        "Cassandra"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        "Docker",
        "Git, GitLab",
        "Kafka",
        "gRPC",
        "RabbitMQ",
        "REST APIs"
      ]
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "MUI",
        "Tailwind CSS"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        "AWS",
        "Docker",
        "CI/CD",
        "Microservices",
        // "Kubernetes"
      ]
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: [
        "Problem Solving",
        "Communication",
        "Teamwork",
        "Time Management",
        "Leadership"
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
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