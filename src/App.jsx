import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronRight, Terminal, Cloud, Cpu, Database, Server, ExternalLink, Briefcase, GraduationCap, Award, Paperclip, Code, Zap, Layers, Palette, Key, Box, GitBranch, Globe, Monitor, Menu, X } from 'lucide-react';
import Lenis from 'lenis';
import './index.css';
import ColorBends from './components/ColorBends/ColorBends';
import BorderGlow from './components/BorderGlow/BorderGlow';
import AnimatedLogo from './components/AnimatedLogo/AnimatedLogo';
import ProfileCard from './components/ProfileCard/ProfileCard';
import ScrollReveal from './components/ScrollReveal/ScrollReveal';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));

    // Active Section Tracking
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(sec => sectionObserver.observe(sec));

    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el));
      sections.forEach(sec => sectionObserver.unobserve(sec));
    };
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
        "EIPO Modernization: Revamped the EIPO frontend using React.js, modernizing the UI/UX and improving interaction speed and system responsiveness by 20%"
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
        <div className="nav-header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1200px' }}>
          <AnimatedLogo />
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer', zIndex: 1001 }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className={`nav-link ${activeSection === 'about' ? 'active-link' : ''}`}>About</a>
            <a href="#knowledge" onClick={() => setIsMobileMenuOpen(false)} className={`nav-link ${activeSection === 'knowledge' ? 'active-link' : ''}`}>Knowledge</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className={`nav-link ${activeSection === 'experience' ? 'active-link' : ''}`}>Experience</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className={`nav-link ${activeSection === 'projects' ? 'active-link' : ''}`}>Projects</a>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="160 100 50"
              backgroundColor="rgba(18, 18, 18, 0.8)"
              borderRadius={8}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={['#00ffb2', '#00ffff', '#00b2ff']}
              className="border-glow-resume"
            >
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', border: 'none', margin: '2px' }}>
                <Paperclip size={16} />
                Resume
              </a>
            </BorderGlow>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <ColorBends
              colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
              rotation={90}
              speed={0.2}
              scale={1}
              frequency={1}
              warpStrength={1}
              mouseInfluence={1}
              noise={0.15}
              parallax={0.5}
              iterations={1}
              intensity={1.5}
              bandWidth={6}
              transparent
              autoRotate={0}
              color="#A855F7"
            />
          </div>
        </div>
        <div style={{ width: '100%', maxWidth: '1200px', padding: '0 2rem', margin: '0 auto' }}>
          <header style={{ maxWidth: '800px', zIndex: 1, position: 'relative' }}>
            <h2 className="text-tertiary animate-fade-in" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              Hello, my name is.
            </h2>
            <h1 className="animate-fade-in delay-1" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
              Hiren Vaidya
            </h1>
            <h2 className="animate-fade-in delay-2 text-secondary" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '2rem' }}>
              I am a <span className="text-accent">Software</span> Engineer.
            </h2>
            <p className="animate-fade-in delay-3 text-secondary" style={{ fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '3rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
              Specialized in deploying scalable infrastructure on AWS and building robust applications using .NET, Node.js, and React.js. I blend cloud automation with seamless user experiences.
            </p>
            <a href="#about" className="btn-outline animate-fade-in delay-4">
              <ChevronRight size={18} /> More about me
            </a>
          </header>
        </div>
      </section>

      <main style={{ padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>

        {/* About Section */}
        <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>

          <div className="section-title-container reveal" style={{ marginTop: '5rem' }}>
            <Cpu size={28} className="text-accent" />
            <h3>About me</h3>
            <div className="section-line"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
            <div>
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur
                baseRotation={3}
                blurStrength={4}
                textClassName="text-secondary"
              >
                Hello! 👋 I'm Hiren Vaidya, an ambitious Software Engineer. As a FullStack Developer, I bring hands-on experience with a versatile tech stack including React, Node.js, .NET, and AWS cloud infrastructure.
              </ScrollReveal>
              
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
              <ProfileCard
                name="Hiren Vaidya"
                title="Software Engineer"
                handle="hirenVaidya"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/profile.png"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                iconUrl="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='3'><path d='M30 30 L10 50 L30 70 M70 30 L90 50 L70 70 M60 20 L40 80'/></svg>"
                onContactClick={() => window.location.href = 'mailto:hirenvaidya@example.com'}
                behindGlowColor="var(--accent)"
                behindGlowEnabled={true}
                innerGradient="linear-gradient(145deg, rgba(30,30,30,0.8) 0%, rgba(50,50,50,0.5) 100%)"
              />
            </div>
          </div>
        </section>

        {/* Knowledge Section */}
        <section id="knowledge" style={{ padding: '6rem 0' }}>
          <div className="glass-card reveal" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="section-title-container" style={{ justifyContent: 'center' }}>
              <div className="section-line invert" style={{ flex: 1, display: 'block' }}></div>
              <Cloud size={28} className="text-accent" />
              <h3 style={{ margin: '0 1rem' }}>What I have worked on</h3>
              <div className="section-line" style={{ flex: 1, display: 'block' }}></div>
            </div>
            
            <p className="text-secondary" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              These are some of the technologies I have used and have great familiarity with:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {[
                {
                  title: "Languages",
                  icon: <Terminal size={18} className="text-accent"/>,
                  items: [
                    { name: 'JavaScript', icon: <Code size={32} className="text-accent" /> },
                    { name: 'TypeScript', icon: <Code size={32} className="text-accent" /> },
                    { name: 'C#', icon: <Terminal size={32} className="text-accent" /> },
                    { name: '.NET Web API', icon: <Terminal size={32} className="text-accent" /> }
                  ]
                },
                {
                  title: "Frameworks & Technologies",
                  icon: <Cpu size={18} className="text-accent"/>,
                  items: [
                    { name: 'Node.js', icon: <Server size={32} className="text-accent" /> },
                    { name: 'Express.js', icon: <Server size={32} className="text-accent" /> },
                    { name: 'React.js', icon: <Cpu size={32} className="text-accent" /> },
                    { name: 'Next.js', icon: <Cpu size={32} className="text-accent" /> },
                    { name: 'Fastify', icon: <Zap size={32} className="text-accent" /> },
                    { name: 'MongoDB', icon: <Database size={32} className="text-accent" /> },
                    { name: 'SQL Server', icon: <Database size={32} className="text-accent" /> },
                    { name: 'Redux', icon: <Layers size={32} className="text-accent" /> },
                    { name: 'Tailwind CSS', icon: <Palette size={32} className="text-accent" /> },
                    { name: 'Redis', icon: <Database size={32} className="text-accent" /> },
                    { name: 'JWT', icon: <Key size={32} className="text-accent" /> },
                    { name: 'Zustand', icon: <Layers size={32} className="text-accent" /> }
                  ]
                },
                {
                  title: "Tools & Platforms",
                  icon: <Server size={18} className="text-accent"/>,
                  items: [
                    { name: 'Docker', icon: <Box size={32} className="text-accent" /> },
                    { name: 'TablePlus', icon: <Database size={32} className="text-accent" /> },
                    { name: 'PgAdmin4', icon: <Database size={32} className="text-accent" /> },
                    { name: 'Amplify', icon: <Cloud size={32} className="text-accent" /> },
                    { name: 'GitHub Actions', icon: <GitBranch size={32} className="text-accent" /> },
                    { name: 'Azure DevOps', icon: <Cloud size={32} className="text-accent" /> },
                    { name: 'IIS', icon: <Server size={32} className="text-accent" /> },
                    { name: 'Web', icon: <Globe size={32} className="text-accent" /> },
                    { name: 'Windows', icon: <Monitor size={32} className="text-accent" /> },
                    { name: 'Linux', icon: <Terminal size={32} className="text-accent" /> },
                    { name: 'AWS', icon: <Cloud size={32} className="text-accent" /> },
                    { name: 'GCP', icon: <Cloud size={32} className="text-accent" /> }
                  ]
                }
              ].map((category, idx) => (
                <div key={idx}>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '2rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    {category.icon} {category.title}
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                    {category.items.map((tech, i) => (
                      <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        {tech.icon}
                        <span className="text-secondary" style={{ fontWeight: 500, fontSize: '0.9rem' }}>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={{ padding: '6rem 0' }}>
          <div className="section-title-container reveal">
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
          <div className="section-title-container reveal">
            <Terminal size={28} className="text-accent" />
            <h3>Projects</h3>
            <div className="section-line"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            
            {/* NexSync */}
            <div className="glass-card reveal" style={{ display: 'flex', flexDirection: 'column' }}>
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
            <div className="glass-card reveal" style={{ display: 'flex', flexDirection: 'column' }}>
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
