<template>
  <div class="container">
    <header>
      <div class="hero">
        <h1>Hi, I'm Nuttapon N</h1>
        <p class="subtitle">Project Manager & Technical Consultant</p>
        <p class="tagline">Delivering innovative solutions in IT Project Management, Solution Architecture, and System Development</p>
        <div class="cta-buttons">
          <NuxtLink to="/about" class="btn btn-primary">View Resume</NuxtLink>
          <a href="#contact" class="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
    </header>
    
    <main>
      <section class="skills-section">
        <h2>Core Competencies</h2>
        <div class="skills-grid">
          <div class="skill-card">
            <div class="skill-icon">📊</div>
            <h3>Project Management</h3>
            <p>IT Project Management, Project Planning, Stakeholder Management, Workflow Management, Jira, SDLC</p>
          </div>
          
          <div class="skill-card">
            <div class="skill-icon">🏗️</div>
            <h3>Solution Architecture</h3>
            <p>System Development, Software Architectural Design, Enterprise Software, SaaS, Data Governance</p>
          </div>
          
          <div class="skill-card">
            <div class="skill-icon">🛰️</div>
            <h3>Satellite Systems</h3>
            <p>Satellite Control, Ground Systems, Satellite Communications, TT&C Software</p>
          </div>
          
          <div class="skill-card">
            <div class="skill-icon">💼</div>
            <h3>Business Development</h3>
            <p>Solution Selling, Pre-Sales Support, Account Management, Client Relations, Business Operations</p>
          </div>
        </div>
      </section>

      <section class="projects-section">
        <h2>Key Experience Highlights</h2>
        <div class="projects-grid">
          <div class="project-card">
            <h3>Lexnetix - Project Manager</h3>
            <p>Leading IT projects with focus on solution architecture, enterprise software development, and stakeholder management in a SaaS environment.</p>
            <div class="tech-stack">
              <span class="tech-tag">Project Management</span>
              <span class="tech-tag">Solution Architecture</span>
              <span class="tech-tag">Jira</span>
            </div>
          </div>
          
          <div class="project-card">
            <h3>THAICOM - Senior Satellite Control Engineer</h3>
            <p>6+ years managing satellite operations, control systems, and coordination of satellite stations. Expertise with multiple satellite platforms and TT&C software.</p>
            <div class="tech-stack">
              <span class="tech-tag">Satellite Systems</span>
              <span class="tech-tag">Operations</span>
              <span class="tech-tag">Linux</span>
            </div>
          </div>
          
          <div class="project-card">
            <h3>mu Space Corp - Engineering Manager</h3>
            <p>Led business development and engineering management for satellite and space technology projects with focus on solution selling and pre-sales support.</p>
            <div class="tech-stack">
              <span class="tech-tag">Business Development</span>
              <span class="tech-tag">Engineering Management</span>
              <span class="tech-tag">Pre-Sales</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-section">
        <h2>Get In Touch</h2>
        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
        <div class="contact-links">
          <a href="mailto:n.nakarach@gmail.com" class="contact-link">📧 Email</a>
          <a href="https://github.com/invalder" target="_blank" class="contact-link">🐙 GitHub</a>
          <a href="https://www.linkedin.com/in/nuttapon-n-53a25438/" target="_blank" class="contact-link">💼 LinkedIn</a>
        </div>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2025 Nuttapon N. Built with Nuxt.js</p>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'Nuttapon N - Project Manager & Technical Consultant',
  meta: [
    { name: 'description', content: 'Portfolio and online resume of Nuttapon N - Project Manager & Technical Consultant specializing in IT Project Management, Solution Architecture, and Satellite Systems' }
  ]
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

header {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: -2rem -2rem 2rem -2rem;
  border-radius: 0 0 16px 16px;
  color: white;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: white;
}

.subtitle {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.95);
}

.tagline {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.btn {
  padding: 0.875rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-block;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

main {
  padding: 2rem 0;
}

section {
  margin-bottom: 4rem;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.skill-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #667eea;
}

.skill-card p {
  color: #666;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #667eea;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.project-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.project-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.tech-stack {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.tech-tag {
  background: #e3e8ff;
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.contact-section {
  text-align: center;
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 12px;
}

.contact-section p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-link {
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.contact-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: #667eea;
  color: white;
}

footer {
  text-align: center;
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid #e0e0e0;
  color: #7f8c8d;
}
</style>
