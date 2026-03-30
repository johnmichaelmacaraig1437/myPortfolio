import React, { useEffect, useState } from 'react';

export interface Project {
  id: number;
  title: string;
  tech: string;
  image?: string;
}

// 1. Helper functions (outside the component)
const getFeaturesForProject = (title: string): string[] => {
  if (title.includes("SAP Procurement")) {
    return ["Automated PO generation", "Vendor management portal", "Real-time SAP data synchronization"];
  }
  if (title.includes("Training Management")) {
    return ["Automated approval workflows", "Real-time Employee Examination", "Employee Training Certification tracking", "Supervisor/Manager dashboard"];
  }
  if (title.includes("Budget")) {
    return ["Company Indirect Material cost tracking", "Indirect material demand-request-output", "Real-time Dashboard for Material Stocks", "Advanced PostgreSQL analytics"];
  }
  if (title.includes("Ticketing")) {
    return ["Real-time SignalR notifications", "Automated priority escalation", "Response time (SLA) tracking"];
  }
  if (title.includes("IPORTAL")) {
    return [
      "Steam-inspired centralized desktop software launcher",
      "Company-wide deployment for all employee workstations",
      "Integrated WebView2 container for in-house web systems",
      "Personalized dashboard with bookmarked system access"
    ];
  }
  return ["Secure data management", "Optimized UI/UX workflows", "Cross-department integration"];
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div  id="top" style={{ minHeight: '100vh', fontFamily: "'Poppins', sans-serif", color: '#ffffff', backgroundColor: '#132025' }}>
      
      {/* GLOBAL CSS FOR SMOOTH SCROLL & MOBILE FIXES */}
      <style>{`
        html { scroll-behavior: smooth; }
        .nav-link:hover { color: #1af0fe !important; }
        @media (max-width: 600px) {
          .profile-grid { grid-template-columns: 1fr !important; padding: 25px !important; }
          .nav-container { display: none !important; } /* Hide complex nav on very small screens or keep simple */
        }
      `}</style>

      {/* 0. STICKY HEADER */}
        <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(19, 32, 37, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(26, 240, 254, 0.1)',
        padding: '15px 20px'
        }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
            {/* LOGO + UP ICON */}
            <div 
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
            }}
            onClick={() => {
            // scroll to top reliably
            document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
            {/* Up Arrow Icon */}
            <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#1af0fe" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            >
                <path d="M18 15l-6-6-6 6"/>
            </svg>
            
            <div style={{ color: '#1af0fe', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '1px' }}>
                JM<span style={{ color: '#fe4f95' }}>.</span>
            </div>
            </div>

            <div className="nav-container" style={{ display: 'flex', gap: '25px' }}>
            {['Profile', 'Education', 'Experience', 'Tech', 'Projects'].map((item) => (
                <button
                key={item}
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#cccccc', 
                    cursor: 'pointer', 
                    fontSize: '0.85rem', 
                    fontWeight: 500, 
                    transition: '0.3s' 
                }}
                className="nav-link"
                >
                {item}
                </button>
            ))}
            </div>
        </div>
        </nav>

      {/* 1. HERO SECTION */}
      <section 
        style={{
          width: '100%', minHeight: '450px',
          backgroundImage: `linear-gradient(rgba(19, 32, 37, 0.7), rgba(19, 32, 37, 0.9)), url('https://images.unsplash.com/photo-1517511620798-cec17d428bc0')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'
        }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
          alt="John Michael Macaraig"
          style={{
            width: '140px', height: '140px', borderRadius: '50%', border: '4px solid #fe4f95',
            marginBottom: '20px', boxShadow: '0 0 20px rgba(254, 79, 149, 0.4)'
          }}
        />
        <h1 style={{ 
            fontSize: 'clamp(2rem, 8vw, 3.5rem)', 
            fontWeight: 700, marginBottom: '10px', 
            letterSpacing: '-1px', padding: '0 20px', lineHeight: '1.2' 
        }}>
          John Michael Macaraig
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', color: '#1af0fe', fontWeight: 300 }}>
            Full Stack Developer
        </p>
        <p style={{ fontSize: '0.9rem', color: '#cccccc', marginTop: '10px' }}>
          ASP.NET Core MVC • Native PHP • React • TypeScript • Bootstrap
        </p>
      </section>

      {/* 2. PROFILE BACKGROUND */}
      <section id="profile" style={{ padding: '80px 20px', backgroundColor: '#1f2a34' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#1af0fe', marginBottom: '40px', textAlign: 'center' }}>
            Profile Background
          </h2>
          <div className="profile-grid" style={{ 
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '20px', background: '#132025', padding: '40px', borderRadius: '20px',
            border: '1px solid rgba(26, 240, 254, 0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', textAlign: 'left'
          }}>
            <div style={{ lineHeight: '2.2' }}>
              <p style={{ color: '#e0e0e0' }}><strong style={{ color: '#fe4f95' }}>Name:</strong> John Michael Macaraig</p>
              <p style={{ color: '#e0e0e0' }}><strong style={{ color: '#fe4f95' }}>Age:</strong> 27</p>
              <p style={{ color: '#e0e0e0' }}><strong style={{ color: '#fe4f95' }}>Birthday:</strong> October 24, 1998</p>
              <p style={{ color: '#e0e0e0' }}><strong style={{ color: '#fe4f95' }}>Status:</strong> Married</p>
            </div>
            <div style={{ lineHeight: '2.2' }}>
              <p style={{ color: '#e0e0e0' }}><strong style={{ color: '#fe4f95' }}>Address:</strong> Laguna, Philippines</p>
              <p style={{ color: '#e0e0e0' }}><strong style={{ color: '#fe4f95' }}>Contact:</strong> +63 960 694 8217</p>
              <p style={{ color: '#e0e0e0' }}><strong style={{ color: '#fe4f95' }}>Email:</strong> john.michael.macaraig.1437@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDUCATION */}
      <section id="education" style={{ padding: '80px 20px', backgroundColor: '#132025' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#1af0fe', marginBottom: '40px', textAlign: 'center' }}>Education</h2>
          <div style={{ borderLeft: '3px solid #fe4f95', paddingLeft: '30px', position: 'relative' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '8px' }}>Bachelor of Science in Computer Engineering</h3>
            <p style={{ color: '#fe4f95', fontWeight: 600, fontSize: '1.1rem', marginBottom: '5px' }}>STI College San Pablo</p>
            <p style={{ color: '#999', fontSize: '0.95rem' }}>S.Y. 2015 – 2020</p>
          </div>
        </div>
      </section>

      {/* 4. WORK EXPERIENCE */}
      <section id="experience" style={{ padding: '80px 20px', backgroundColor: '#1f2a34' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#1af0fe', marginBottom: '40px', textAlign: 'center' }}>Work Experience</h2>
          <div style={{ borderLeft: '3px solid #1af0fe', paddingLeft: '30px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#fe4f95', marginBottom: '8px' }}>Full Stack Developer</h3>
            <p style={{ color: '#ffffff', fontWeight: 500, marginBottom: '15px' }}>Brother Industries Philippines Inc. • 2022 – Present</p>
            <ul style={{ color: '#cccccc', lineHeight: '1.8', paddingLeft: '20px', textAlign: 'left' }}>
              <li>Built modern web applications using React with TypeScript integrated with ASP.NET Core.</li>
              <li>Developed and Maintained legacy systems using Native PHP.</li>
              <li>Developed desktop applications using C# with ASP.NET Core MVC.</li>
              <li>Engineered RESTful APIs and managed MS SQL & PostgreSQL databases.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. TECH STACKS */}
      <section id="tech" style={{ padding: '80px 20px', backgroundColor: '#132025' }}>
        <h2 style={{ fontSize: '2.2rem', color: '#1af0fe', marginBottom: '40px', textAlign: 'center' }}>Tech Stacks</h2>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {[
            { name: 'ASP.NET Core', slug: 'dotnetcore' },
            { name: 'C#', slug: 'csharp' },
            { name: 'React', slug: 'react' },
            { name: 'TypeScript', slug: 'typescript' },
            { name: 'Native PHP', slug: 'php' },
            { name: 'MS SQL Server', slug: 'microsoftsqlserver' },
            { name: 'PostgreSQL', slug: 'postgresql' }
          ].map(stack => (
            <div 
                key={stack.name} 
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  width: '120px', height: '120px', background: '#1f2a34', borderRadius: '15px',
                  color: '#fe4f95', border: '1px solid rgba(254, 79, 149, 0.2)', transition: 'all 0.3s ease',
                  cursor: 'default', boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#fe4f95';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(254, 79, 149, 0.2)';
                }}
            >
                <img 
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${stack.slug}/${stack.slug}-original.svg`} 
                  alt={stack.name} style={{ width: '45px', height: '45px', marginBottom: '12px' }}
                  onError={(e) => { e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${stack.slug}/${stack.slug}-plain.svg` }}
                />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{stack.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PROJECTS SECTION */}
      <section id="projects" style={{ padding: '80px 20px', backgroundColor: '#1f2a34' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', color: '#1af0fe', marginBottom: '10px', textAlign: 'center' }}>Featured Systems</h2>
          <p style={{ textAlign: 'center', color: '#cccccc', marginBottom: '50px' }}>Enterprise solutions engineered for Brother Industries Philippines Inc.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {projects.map(p => (
              <div key={p.id} style={{
                  background: '#132025', padding: '35px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(26, 240, 254, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                }}
              >
                <h3 style={{ color: '#fe4f95', fontSize: '1.4rem', marginBottom: '20px', minHeight: '60px' }}>{p.title}</h3>
                <div style={{ marginBottom: '25px' }}>
                  <p style={{ color: '#1af0fe', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px' }}>Key Features</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {getFeaturesForProject(p.title).map((feature, i) => (
                      <li key={i} style={{ color: '#e0e0e0', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', gap: '10px' }}>
                        <span style={{ color: '#1af0fe' }}>▹</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginBottom: '10px' }}>TECHNOLOGIES USED:</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {p.tech.split(',').map((tech, index) => (
                      <span key={index} style={{ 
                        background: 'rgba(254, 79, 149, 0.1)', color: '#fe4f95', padding: '4px 10px', 
                        borderRadius: '4px', fontSize: '0.75rem', border: '1px solid rgba(254, 79, 149, 0.2)'
                      }}>{tech.trim()}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* 7. CONTACT FOOTER */}
        <footer style={{ padding: '60px 20px', backgroundColor: '#132025', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 style={{ fontSize: '2rem', color: '#1af0fe', marginBottom: '20px' }}>Let's Connect</h2>
        <p style={{ color: '#cccccc', marginBottom: '10px' }}>
            <a 
            href="mailto:john.michael.macaraig.1437@gmail.com" 
            style={{ color: '#1af0fe', textDecoration: 'underline', fontWeight: 500 }}
            >
            john.michael.macaraig.1437@gmail.com
            </a>
        </p>
        <p style={{ color: '#999' }}>© 2026 John Michael Macaraig</p>
        </footer>
    </div>
  );
};

export default Projects;