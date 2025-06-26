import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e, projectId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

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
              className={`project-card ${hoveredProject === project.id ? 'hovered' : ''} ${selectedProject === project.id ? 'selected' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              style={{
                animationDelay: `${index * 0.1}s`,
                '--mouse-x': `${mousePosition.x}%`,
                '--mouse-y': `${mousePosition.y}%`
              }}
            >
              
              <div className="project-content" data-number={index + 1 < 10 ? `0${index + 1}` : index + 1}>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-links">
                  <div className="tech-stack">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-details" onClick={(e) => e.stopPropagation()}>
                  <button 
                    className="close-btn"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close project details"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                  <p className="project-long-description">{project.longDescription}</p>
                  <div className="features-list">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-actions">
                    <button className="project-btn project-btn-primary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      <span>Live Demo</span>
                    </button>
                    <button className="project-btn project-btn-secondary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>GitHub</span>
                    </button>
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