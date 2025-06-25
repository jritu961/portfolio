import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Bharatham Project',
      description: 'A comprehensive microservices platform implementing Reconciliation Service Provider (RSP) for payment settlement with multi-language support.',
      longDescription: 'Utilized Node.js and MongoDB for backend development, and React for the frontend. Implemented RabbitMQ for asynchronous communication between services and integrated Bhasini translator for multi-language support.',
      technologies: ['Node.js', 'MongoDB', 'React', 'RabbitMQ', 'Bhasini'],
      features: [
        'Payment reconciliation system',
        'Microservices architecture',
        'Multi-language support',
        'Asynchronous messaging',
        'Robust authentication'
      ],
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'ONDC Hackathon - Inventory Management',
      description: 'Advanced inventory management system enabling sellers to efficiently manage products, track stock levels, and analyze business metrics.',
      longDescription: 'Developed comprehensive inventory APIs using Node.js and MongoDB. Features include seller registration, product management, and real-time tracking of sales metrics, profit, and loss.',
      technologies: ['Node.js', 'MongoDB', 'Express.js', 'REST APIs'],
      features: [
        'Seller registration system',
        'Product catalog management',
        'Real-time stock tracking',
        'Sales analytics dashboard',
        'Profit/Loss tracking'
      ],
      category: 'backend'
    },
    {
      id: 3,
      title: 'ONDC Mock Server',
      description: 'Mock server implementation for efficient API testing and debugging with YAML-based endpoint simulation.',
      longDescription: 'Implemented a mock server using Node.js and YAML for endpoint simulation. Parsed YAML mock data with js-YAML to define endpoints and expected responses for efficient testing.',
      technologies: ['Node.js', 'YAML', 'Express.js', 'js-YAML'],
      features: [
        'YAML-based configuration',
        'Dynamic endpoint generation',
        'Response simulation',
        'Testing framework integration',
        'Debugging capabilities'
      ],
      category: 'backend'
    },
    {
      id: 4,
      title: 'HR Management System (HRMS)',
      description: 'Enterprise-level HR management system with comprehensive employee lifecycle management and robust security.',
      longDescription: 'Developed using Nest.js and PostgreSQL for modular design and efficient data handling. Includes complete employee management, payroll, performance tracking, and recruitment modules.',
      technologies: ['Nest.js', 'PostgreSQL', 'TypeScript', 'JWT', 'REST APIs'],
      features: [
        'Employee management',
        'Leave & attendance tracking',
        'Payroll processing',
        'Performance evaluation',
        'Recruitment pipeline',
        'Document management'
      ],
      category: 'fullstack'
    },
    {
      id: 5,
      title: 'Logistics Management System',
      description: 'Real-time logistics platform with automated delivery agent assignment and comprehensive tracking capabilities.',
      longDescription: 'Built with React.js and Node.js, featuring real-time tracking, automated agent assignment, secure authentication, and optimized order management workflows.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      features: [
        'Real-time tracking',
        'Automated agent assignment',
        'Order management',
        'Push notifications',
        'Route optimization',
        'Cancellation workflows'
      ],
      category: 'fullstack'
    },
    {
      id: 6,
      title: 'National Pension System',
      description: 'Enterprise-scale pension management system with microservices architecture and high-performance data operations.',
      longDescription: 'Developed core backend modules including Kafka-based notification system and gRPC-based service communication. Optimized PostgreSQL queries for high-performance data operations.',
      technologies: ['Go lang','Node.js', 'PostgreSQL', 'Kafka', 'gRPC', 'Microservices'],
      features: [
        'Kafka notification system',
        'gRPC service communication',
        'Third-party API integration',
        'High-performance queries',
        'Secure data handling',
        'Scalable architecture'
      ],
      category: 'backend'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'backend', label: 'Backend' },
    { value: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of my recent work in full-stack development and system architecture
          </p>
        </div>
        
        <div className="filter-container">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
              onClick={() => setFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {hoveredProject === project.id && (
                  <div className="project-details">
                    <p className="project-long-description">{project.longDescription}</p>
                    <div className="features-list">
                      <h4>Key Features:</h4>
                      <ul>
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <div className="project-links">
                  <div className="tech-stack">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;