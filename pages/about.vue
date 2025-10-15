<template>
  <div class="container">
    <header>
      <h1>Resume</h1>
      <NuxtLink to="/" class="back-link">← Back to Home</NuxtLink>
    </header>
    
    <main>
      <section class="content">
        <h2>Professional Summary</h2>
        <p>
          Experienced Full-Stack Developer with 5+ years of expertise in building scalable web applications. 
          Passionate about creating efficient, user-friendly solutions using modern technologies. 
          Strong background in both frontend and backend development with a focus on delivering high-quality code.
        </p>
        
        <h3>Work Experience</h3>
        
        <div class="experience-item">
          <div class="experience-header">
            <div>
              <h4>Senior Full-Stack Developer</h4>
              <p class="company">Tech Solutions Inc.</p>
            </div>
            <span class="period">2022 - Present</span>
          </div>
          <ul>
            <li>Led development of enterprise web applications using Vue.js and Node.js</li>
            <li>Architected and implemented scalable microservices architecture</li>
            <li>Mentored junior developers and conducted code reviews</li>
            <li>Improved application performance by 40% through optimization techniques</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <div>
              <h4>Full-Stack Developer</h4>
              <p class="company">Digital Innovations Ltd.</p>
            </div>
            <span class="period">2020 - 2022</span>
          </div>
          <ul>
            <li>Developed and maintained multiple client projects using React and Express</li>
            <li>Implemented RESTful APIs and integrated third-party services</li>
            <li>Collaborated with UX designers to create responsive interfaces</li>
            <li>Reduced load times by 50% through code optimization</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <div>
              <h4>Junior Web Developer</h4>
              <p class="company">StartUp Ventures</p>
            </div>
            <span class="period">2019 - 2020</span>
          </div>
          <ul>
            <li>Built responsive websites using HTML, CSS, and JavaScript</li>
            <li>Worked with databases including PostgreSQL and MongoDB</li>
            <li>Participated in agile development processes and daily standups</li>
            <li>Contributed to open-source projects and company documentation</li>
          </ul>
        </div>
        
        <h3>Education</h3>
        
        <div class="education-item">
          <div class="education-header">
            <div>
              <h4>Bachelor of Science in Computer Science</h4>
              <p class="school">University of Technology</p>
            </div>
            <span class="period">2015 - 2019</span>
          </div>
          <p>Graduated with Honors • GPA: 3.8/4.0</p>
        </div>
        
        <h3>Certifications</h3>
        <ul class="certifications">
          <li>🏆 AWS Certified Solutions Architect - Associate</li>
          <li>🏆 Vue.js Certification</li>
          <li>🏆 MongoDB Certified Developer</li>
          <li>🏆 Scrum Master Certification (CSM)</li>
        </ul>

        <h3>Technical Skills</h3>
        <div class="skills-list">
          <div class="skill-category">
            <strong>Languages:</strong> JavaScript, TypeScript, Python, HTML5, CSS3, SQL
          </div>
          <div class="skill-category">
            <strong>Frameworks:</strong> Vue.js, Nuxt.js, React, Next.js, Express, Django
          </div>
          <div class="skill-category">
            <strong>Databases:</strong> PostgreSQL, MongoDB, MySQL, Redis
          </div>
          <div class="skill-category">
            <strong>Tools & DevOps:</strong> Git, Docker, AWS, CI/CD, Nginx, Linux
          </div>
          <div class="skill-category">
            <strong>Other:</strong> REST APIs, GraphQL, WebSockets, Agile/Scrum, Unit Testing
          </div>
        </div>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2025 Nnakarac. Built with Nuxt.js</p>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'Resume - Nnakarac',
  meta: [
    { name: 'description', content: 'Professional resume and work experience of Nnakarac - Full-Stack Developer' }
  ]
})
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

header {
  padding: 2rem 0;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.back-link {
  color: #667eea;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}

main {
  padding: 2rem 0;
}

.content {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  border-bottom: 3px solid #667eea;
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.8rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

h4 {
  font-size: 1.3rem;
  margin-bottom: 0.25rem;
  color: #2c3e50;
}

p {
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}

.experience-item,
.education-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.experience-header,
.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.company,
.school {
  color: #667eea;
  font-weight: 600;
  margin: 0.25rem 0 0.5rem 0;
}

.period {
  color: #7f8c8d;
  font-weight: 500;
  white-space: nowrap;
}

ul {
  line-height: 1.8;
  color: #555;
  margin-bottom: 0;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

.certifications {
  list-style: none;
  padding-left: 0;
}

.certifications li {
  background: #f8f9fa;
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  border-radius: 6px;
  border-left: 3px solid #667eea;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-category {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  line-height: 1.8;
  color: #555;
}

.skill-category strong {
  color: #2c3e50;
  display: inline-block;
  min-width: 120px;
}

footer {
  text-align: center;
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid #e0e0e0;
  color: #7f8c8d;
}

@media (max-width: 768px) {
  .experience-header,
  .education-header {
    flex-direction: column;
  }
  
  .content {
    padding: 2rem 1.5rem;
  }
}
</style>
