import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronRight, Terminal, Cloud, Cpu, Database, Server, ExternalLink, Briefcase, GraduationCap, Award, Paperclip } from 'lucide-react';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: "Empronc Solutions",
      role: "Application Developer",
      date: "Dec 2025 – Present",
      location: "Mumbai, India",
      details: [
        "Frontend & UI Modernization: Developed 2 projects from scratch, ensuring pixel-perfect UI implementation from Figma designs and delivering seamless user experiences. Achieved 95% client satisfaction through iterative feedback loops and modern React.js patterns.",
        "Technical SEO & Performance: Improved website ranking from 7th to 3rd in the unlisted share category through technical SEO optimization. Implemented lazy loading and resolved indexing errors, resulting in a 40% increase in organic traffic and a 15% reduction in bounce rate.",
        "ASP.NET MVC to React Migration: migrated ASP.NET Web API application to React, significantly improving performance in rendering data-heavy tables and media content."
      ]
    },
    {
      company: "Prabhudas Lilladher Pvt. Ltd",
      role: "Software Developer Engineer",
      date: "May 2024 – Dec 2025",
      location: "Mumbai, India",
      details: [
        "PLSGB In-House Portal: Engineered a secure SGB application portal with JWT-based authentication. Integrated RazorPay, facilitating over 5kg of SGB sales and achieving a revenue milestone of 3 million INR.",
        "PLAdvisory Broker Management: Architected a complex broker management system featuring dynamic dashboards, server-side pagination, and advanced filtering. Optimized frontend performance to achieve a Lighthouse score of 85+, reducing load times by 30%.",
        "Trade-Script Real-time Dashboard: Developed a Node.js backend with a real-time enabled frontend for live trade analysis. Enabled live data streaming for 50+ brokers, improving operational efficiency by 30% and reducing manual effort by 40%.",
        "Automation & Scaling: Automated image compression and report generation using CRON jobs, saving 6 man-hours daily. Streamlined data ingestion by implementing bulk insert functionality for large financial datasets.",
        "EIPO Modernization: Revamped the EIPO frontend using React.js, modernizing the UI/UX and improving interaction speed and system responsiveness by 20%."
      ]
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      <div className="noise"></div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
        background: scrolled ? 'rgba(18, 18, 18, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1200px' }}>
          <a href="#" style={{ fontSize: '1.5rem', fontWeight: 800, textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
            <span>Hiren</span>
            <span className="text-accent text-tertiary" style={{ fontSize: '1.8rem', margin: '0 0.2rem' }}>X</span>
            <span>Vaidya</span>
          </a>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#knowledge" className="nav-link">Knowledge</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
              <Paperclip size={16} />
              Resume
            </a>
          </div>
        </div>
      </nav>

      <main style={{ padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Hero Section */}
        <header style={{ paddingTop: '15rem', paddingBottom: '8rem', maxWidth: '800px' }}>
          <h2 className="text-tertiary animate-fade-in" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
            Hello, my name is.
          </h2>
          <h1 className="animate-fade-in delay-1" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
            Hiren Vaidya
          </h1>
          <h2 className="animate-fade-in delay-2 text-secondary" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '2rem' }}>
            I am a <span className="text-accent">Software</span> Engineer.
          </h2>
          <p className="animate-fade-in delay-3 text-secondary" style={{ fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '3rem' }}>
            Specialized in deploying scalable infrastructure on AWS and building robust applications using .NET, Node.js, and React.js. I blend cloud automation with seamless user experiences.
          </p>
          <a href="#about" className="btn-outline animate-fade-in delay-4">
            <ChevronRight size={18} /> More about me
          </a>
        </header>

        {/* About Section */}
        <section id="about" style={{ padding: '6rem 0' }}>
          <h1 style={{ fontSize: '10rem', color: 'rgba(255,255,255,0.02)', position: 'absolute', zIndex: -1, transform: 'translateY(-50px)', fontWeight: 800, letterSpacing: '10px', userSelect: 'none' }}>HIREN</h1>
          <div className="section-title-container" style={{ marginTop: '5rem' }}>
            <Cpu size={28} className="text-accent" />
            <h3>About me</h3>
            <div className="section-line"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
            <div>
              <p className="text-secondary" style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Hello! 👋 I'm Hiren Vaidya, an ambitious Software Engineer. As a FullStack Developer, I bring hands-on experience with a versatile tech stack including React, Node.js, .NET, and AWS cloud infrastructure.
              </p>
              
              <h4 style={{ fontSize: '1.1rem', color: 'white', marginBottom: '0.5rem', marginTop: '2rem' }}>Frontend & UI:</h4>
              <p className="text-secondary" style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
                In the frontend realm, my expertise extends to building responsive and pixel-perfect UIs with React.js. I focus on optimizing performance, implementing lazy loading, and ensuring modern SEO standards to deliver seamless user experiences.
              </p>

              <h4 style={{ fontSize: '1.1rem', color: 'white', marginBottom: '0.5rem' }}>Backend & Cloud:</h4>
              <p className="text-secondary" style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
                On the backend, with 2+ year of experience in React.js, Node.js, SQL Server, JWT authentication, RESTful APIs, real-time systems, and AWS cloud services. Experienced in building secure, scalable, and high-performance applications.
              </p>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <a href="https://github.com/hirenVaidya" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/hiren-vaidya-163989217/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><Linkedin size={24} /></a>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <div className="about-img-box">
                <img src="/profile.png" alt="Hiren Vaidya" style={{ width: '300px', height: '400px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Section */}
        <section id="knowledge" style={{ padding: '6rem 0' }}>
          <div className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="section-title-container" style={{ justifyContent: 'center' }}>
              <div className="section-line invert" style={{ flex: 1, display: 'block' }}></div>
              <Cloud size={28} className="text-accent" />
              <h3 style={{ margin: '0 1rem' }}>What I have worked on</h3>
              <div className="section-line" style={{ flex: 1, display: 'block' }}></div>
            </div>
            
            <p className="text-secondary" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              These are some of the technologies I have used and have great familiarity with:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              {[
                { name: 'React.js', icon: <Cpu size={32} className="text-accent" /> },
                { name: 'Node.js', icon: <Server size={32} className="text-accent" /> },
                { name: '.NET', icon: <Terminal size={32} className="text-accent" /> },
                { name: 'AWS', icon: <Cloud size={32} className="text-accent" /> },
                { name: 'SQL Server', icon: <Database size={32} className="text-accent" /> },
                { name: 'TypeScript', icon: <Terminal size={32} className="text-accent" /> }
              ].map((tech, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  {tech.icon}
                  <span className="text-secondary" style={{ fontWeight: 500 }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={{ padding: '6rem 0' }}>
          <div className="section-title-container">
            <Briefcase size={28} className="text-accent" />
            <h3>Experience</h3>
            <div className="section-line"></div>
          </div>

          <div style={{ display: 'flex', gap: '3rem', marginTop: '3rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 250px' }}>
              <div className="tab-list">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className={`tab-item ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
                  >
                    {exp.company}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: '1 1 500px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                {experiences[activeTab].role} <span className="text-accent">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="text-tertiary" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                {experiences[activeTab].date} | {experiences[activeTab].location}
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
                {experiences[activeTab].details.map((detail, i) => {
                  const parts = detail.split(': ');
                  const strongText = parts[0];
                  const restText = parts.slice(1).join(': ');
                  return (
                    <li key={i} style={{ position: 'relative', paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>▹</span>
                      {restText ? <><strong style={{ color: 'var(--text-primary)' }}>{strongText}:</strong> {restText}</> : detail}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ padding: '6rem 0', marginBottom: '4rem' }}>
          <div className="section-title-container">
            <Terminal size={28} className="text-accent" />
            <h3>Projects</h3>
            <div className="section-line"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            
            {/* NexSync */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Terminal size={32} className="text-accent" />
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" style={{ color: 'var(--text-secondary)' }}><Github size={20} /></a>
                  <a href="#" style={{ color: 'var(--text-secondary)' }}><ExternalLink size={20} /></a>
                </div>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>NexSync</h3>
              <p className="text-accent" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Real-Time Communication Platform</p>
              <p className="text-secondary" style={{ flex: 1, lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Built a custom WebRTC platform from scratch, enabling low-latency, peer-to-peer video conferencing. Developed a scalable real-time engine using Node.js, with end-to-end encrypted messaging.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', color: 'var(--text-tertiary)', fontSize: '0.85rem', fontFamily: 'monospace' }}>
                <span>MERN</span> <span>WebRTC</span> <span>Node.js</span> <span>Socket.io</span>
              </div>
            </div>

            {/* Image Processing */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <Cloud size={32} className="text-accent" />
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" style={{ color: 'var(--text-secondary)' }}><Github size={20} /></a>
                  <a href="#" style={{ color: 'var(--text-secondary)' }}><ExternalLink size={20} /></a>
                </div>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Image Processing System</h3>
              <p className="text-accent" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>AWS Cloud</p>
              <p className="text-secondary" style={{ flex: 1, lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Architected a serverless image analysis workflow using Step Functions, Lambda, and Amazon Rekognition to automate visual data processing at scale.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', color: 'var(--text-tertiary)', fontSize: '0.85rem', fontFamily: 'monospace' }}>
                <span>Node.js</span> <span>Step Functions</span> <span>Lambda</span> <span>Rekognition</span>
              </div>
            </div>

          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <a href="https://github.com/hirenVaidya" target="_blank" rel="noreferrer" className="btn-outline">
              <Github size={18} /> My Repositories
            </a>
          </div>
        </section>

      </main>

      <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-tertiary)', borderTop: '1px solid var(--glass-border)' }}>
        <p>© {new Date().getFullYear()} Hiren Vaidya. All rights reserved.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Redesigned by Hire Vaidya <span className="text-accent">♥</span> using React</p>
      </footer>
    </div>
  );
}

export default App;
