import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Background elements */}
      <div className="background">
        <div className="gradient-bg">
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="content">
        <header>
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        
        <main>
          <section className="hero">
            <h1 className="name">Rohithraj</h1>
            <h2 className="title">Full Stack Developer</h2>
            <p className="description">
              I create beautiful, functional, and responsive web applications 
              that deliver exceptional user experiences.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn primary">View My Work</a>
              <a href="#contact" className="btn secondary">Get In Touch</a>
            </div>
          </section>
          
          <section id="about" className="section">
            <h3>About Me</h3>
            <p>
              I'm a passionate full stack developer with expertise in both frontend 
              and backend technologies. I love turning ideas into reality through 
              clean, efficient code and intuitive user interfaces.
            </p>
          </section>
          
          <section id="skills" className="section">
            <h3>Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                  <li>Vue.js</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Python</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Tools</h4>
                <ul>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section id="projects" className="section">
            <h3>Projects</h3>
            <div className="projects-grid">
              <div className="project-card">
                <h4>E-Commerce Platform</h4>
                <p>Full-stack e-commerce solution with React, Node.js, and MongoDB</p>
              </div>
              <div className="project-card">
                <h4>Task Management App</h4>
                <p>Productivity application with real-time updates and team collaboration</p>
              </div>
              <div className="project-card">
                <h4>Portfolio Website</h4>
                <p>Responsive portfolio design with modern UI/UX principles</p>
              </div>
            </div>
          </section>
          
          <section id="contact" className="section">
            <h3>Get In Touch</h3>
            <p>I'm always interested in new opportunities and exciting projects.</p>
            <div className="contact-links">
              <a href="mailto:rohithraj@example.com" className="contact-link">Email</a>
              <a href="https://github.com/rohithraj" className="contact-link">GitHub</a>
              <a href="https://linkedin.com/in/rohithraj" className="contact-link">LinkedIn</a>
            </div>
          </section>
        </main>
        
        <footer>
          <p>© {new Date().getFullYear()} Rohithraj. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;