import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronRight, Terminal, Cloud, Cpu, Database, Server, ExternalLink, Briefcase, GraduationCap, Award } from 'lucide-react';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <div className="grid-bg"></div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
        background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
          Hiren<span className="gradient-text">Vaidya</span>
        </div>
        <div style={{ display: 'none', gap: '2rem' }} className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#certifications" className="nav-link">Certifications</a>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#certifications" className="nav-link">Certifications</a>
        </div>
      </nav>

      <main style={{ padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-text-content">
            <div className="animate-fade-in" style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '50px',
              color: 'var(--accent-secondary)',
              fontSize: '0.9rem',
              fontWeight: 500,
              marginBottom: '1.5rem',
              width: 'fit-content'
            }}>
              👋 Welcome to my portfolio
            </div>

            <h1 className="animate-fade-in delay-1" style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1rem'
            }}>

              <span className="gradient-text">Software Engineer</span>
            </h1>

            <p className="animate-fade-in delay-2" style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              maxWidth: '650px',
              lineHeight: 1.6,
              marginBottom: '2.5rem'
            }}>
              Hi, I'm Hiren Vaidya. I specialize in deploying scalable infrastructure on AWS and building robust applications using .NET, Node.js, and React.js. I blend cloud automation with seamless user experiences.
            </p>

            <div className="animate-fade-in delay-3" style={{ display: 'flex', gap: '1rem' }}>
              <a href="#experience" className="btn-primary">
                View Experience <ChevronRight size={18} />
              </a>
              <a href="mailto:hirenvaidya82001@gmail.com" className="btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="animate-fade-in delay-4" style={{
              display: 'flex',
              gap: '1.5rem',
              marginTop: '3.5rem',
              alignItems: 'center'
            }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Connect with me:</span>
              <a href="https://github.com/hirenVaidya" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.2s' }}>
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/hiren-vaidya-163989217/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.2s' }}>
                <Linkedin size={24} />
              </a>
              <a href="mailto:hirenvaidya82001@gmail.com" style={{ color: 'var(--text-primary)', transition: 'color 0.2s' }}>
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="hero-image-container animate-fade-in delay-2">
            <div className="hero-image-wrapper">
              <img src="/profile.png" alt="Hiren Vaidya" className="hero-image" />
            </div>
          </div>
        </section>

        {/* About & Education Section */}
        <section id="about" style={{ padding: '6rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

            <div className="glass-card">
              <Cloud size={32} color="var(--accent-secondary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Cloud Architecture</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Expertise in AWS Serverless Architecture, EC2, S3, RDS, and scalable deployments. Experienced in building serverless event-driven workflows with Lambda and EventBridge.
              </p>
            </div>

            <div className="glass-card">
              <Database size={32} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Full-Stack Development</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Proficient in building scalable backend systems with .NET and Node.js, and creating dynamic frontends with React.js. Experienced in optimizing databases like MySQL and SQL Server.
              </p>
            </div>

            <div className="glass-card" style={{ gridColumn: '1 / -1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <GraduationCap size={28} color="var(--text-primary)" />
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Education</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.2rem' }}>B.Sc in Information Technology</h4>
                  <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Narsee Monjee College of Commerce and Economics (Sep 2020 – Jun 2024)</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>CGPA: 6.5</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={{ padding: '6rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Briefcase size={32} color="var(--text-primary)" />
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>Experience</h2>
            <div style={{ height: '1px', flex: 1, background: 'var(--glass-border)' }}></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Empronc Solutions */}
            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Application Developer</h3>
                  <h4 style={{ color: 'var(--accent-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>Empronc Solutions</h4>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Dec 2025 – April 2026 | Mumbai, India
                </div>
              </div>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><strong>Optimized Data & Framework:</strong> Upgraded application framework from .NET 5 to .NET 8, improving performance, security, and maintainability. Collaborated on UI improvements for better workflow management.</li>
                <li><strong>Excel PO Requisition Upload:</strong> Developed a bulk-processing feature to automate closure of requisition lines via Excel upload, eliminating manual work and boosting efficiency.</li>
                <li><strong>Patch Delivery:</strong> Delivered 182 patches over 5 months (120 backend, 40 UI, 22 database), resolving business logic, API handling, and query optimization issues.</li>
              </ul>
            </div>

            {/* Prabhudas Lilladher */}
            <div className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Software Developer Engineer</h3>
                  <h4 style={{ color: 'var(--accent-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>Prabhudas Lilladher Pvt. Ltd</h4>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  May 2024 – Dec 2025 | Mumbai, India
                </div>
              </div>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><strong>EIPO Application Revamp:</strong> Modernized frontend using React.js and implemented BSE IPO workflows, improving UI/UX, interaction speed, and system performance by 20%.</li>
                <li><strong>PDF Generation & Docker:</strong> Implemented a client-side PDF generation feature via Node.js hosted on IIS. Built a Dockerized CI/CD pipeline for consistent deployments.</li>
                <li><strong>Optimized Data Insertion:</strong> Significantly reduced load times by implementing bulk insert functionality for large data sets. Added Excel upload categorization features.</li>
                <li><strong>Re-KYC & UAT:</strong> Developed client re-KYC workflows and actively debugged/deployed updates during User Acceptance Testing.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ padding: '6rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Terminal size={32} color="var(--text-primary)" />
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>Projects</h2>
            <div style={{ height: '1px', flex: 1, background: 'var(--glass-border)' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

            {/* HRMS */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Serverless HRMS</h3>
              <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '1rem' }}>AWS Serverless Architecture</p>
              <p style={{ color: 'var(--text-secondary)', flex: 1, lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Fully serverless Human Resource Management System using AWS cloud. Utilized API Gateway, Lambda, DynamoDB for employee records & payroll, and S3 for documents. Frontend built with HTML/CSS/JS.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['AWS Lambda', 'DynamoDB', 'API Gateway', 'S3'].map(tech => (
                  <span key={tech} style={{ padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', fontSize: '0.8rem' }}>{tech}</span>
                ))}
              </div>
            </div>

            {/* Image Processing */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Image Processing System</h3>
              <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '1rem' }}>AWS Cloud</p>
              <p style={{ color: 'var(--text-secondary)', flex: 1, lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Built a robust serverless image analysis workflow automating processing pipelines using AWS Lambda, Amazon Rekognition, DynamoDB, SNS, EventBridge, and CloudFormation.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Rekognition', 'EventBridge', 'SNS', 'CloudFormation'].map(tech => (
                  <span key={tech} style={{ padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', fontSize: '0.8rem' }}>{tech}</span>
                ))}
              </div>
            </div>

            {/* Bus Management */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Bus Management System</h3>
              <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '1rem' }}>.NET MVC & AWS</p>
              <p style={{ color: 'var(--text-secondary)', flex: 1, lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Core management system integrating ASP.NET Core Identity for secure authentication. Managed relational data for clients and bookings using SQL Server integrated with AWS RDS for scalability.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['.NET MVC', 'SQL Server', 'AWS RDS', 'Core Identity'].map(tech => (
                  <span key={tech} style={{ padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', fontSize: '0.8rem' }}>{tech}</span>
                ))}
              </div>
            </div>

            {/* MeetsVirtual */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>MeetsVirtual</h3>
              </div>
              <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '1rem' }}>XR & Metaverse Platform</p>
              <p style={{ color: 'var(--text-secondary)', flex: 1, lineHeight: 1.6, marginBottom: '1.5rem' }}>
                A futuristic VR platform built to reshape virtual collaboration. Blends cloud technology with virtual reality to create immersive art spaces and virtual meeting rooms.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Unity', 'C#', 'Cloud Hosting', 'VR/XR'].map(tech => (
                  <span key={tech} style={{ padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', fontSize: '0.8rem' }}>{tech}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ padding: '4rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Cpu size={32} color="var(--text-primary)" />
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>Technical Skills</h2>
            <div style={{ height: '1px', flex: 1, background: 'var(--glass-border)' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Frameworks & Languages</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {['.NET (MVC, ASPX)', 'C#', 'Node.js', 'React.js', 'jQuery'].map(skill => (
                  <span key={skill} style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.9rem' }}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Cloud & Infrastructure</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {['AWS EC2', 'S3', 'RDS', 'Route 53', 'VPC', 'CloudFront'].map(skill => (
                  <span key={skill} style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.9rem' }}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Databases & Monitoring</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {['MySQL', 'SQL Server (SSMS)', 'CloudWatch', 'Kafka'].map(skill => (
                  <span key={skill} style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.9rem' }}>{skill}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" style={{ padding: '4rem 0 8rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Award size={32} color="var(--text-primary)" />
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>Certifications</h2>
            <div style={{ height: '1px', flex: 1, background: 'var(--glass-border)' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

            <div className="glass-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Cloud size={24} color="var(--accent-secondary)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.3rem' }}>AWS Solution Architect – Associate</h3>
                <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>SAA-C03</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Score: 660/1000</p>
              </div>
            </div>

            <div className="glass-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Award size={24} color="var(--accent-color)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.3rem' }}>AWS Cloud Practitioner Essentials</h3>
                <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>AWS Training & Certification</p>
              </div>
            </div>

            <div className="glass-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Cloud size={24} color="var(--text-primary)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.3rem' }}>Introduction to Cloud</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>AWS Educate</p>
              </div>
            </div>

            <div className="glass-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Cpu size={24} color="#00d2ff" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.3rem' }}>Machine Learning Foundation</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>AWS Educate</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--glass-border)',
        padding: '3rem 2rem',
        textAlign: 'center',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Hiren<span className="gradient-text">Vaidya</span></h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Building the future of scalable infrastructure and robust applications.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <a href="https://github.com/hirenVaidya" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/hiren-vaidya-163989217/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>LinkedIn</a>
          <a href="mailto:hirenvaidya82001@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>Email</a>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Hiren Vaidya. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
