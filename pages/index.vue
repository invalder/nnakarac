<template>
  <div class="container">
    <header>
      <div class="hero">
        <h1>{{ pageData.hero.name }}</h1>
        <p class="subtitle">{{ pageData.hero.subtitle }}</p>
        <p class="tagline">{{ pageData.hero.tagline }}</p>
        <div class="cta-buttons">
          <NuxtLink 
            v-for="(button, index) in pageData.hero.buttons" 
            :key="index"
            :to="button.link" 
            :class="['btn', `btn-${button.type}`]"
          >
            {{ button.text }}
          </NuxtLink>
        </div>
      </div>
    </header>
    
    <main>
      <section class="skills-section">
        <h2>{{ pageData.skills.title }}</h2>
        <div class="skills-grid">
          <div 
            v-for="(skill, index) in pageData.skills.items" 
            :key="index"
            class="skill-card"
          >
            <div class="skill-icon">{{ skill.icon }}</div>
            <h3>{{ skill.title }}</h3>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </section>

      <section class="projects-section">
        <h2>{{ pageData.projects.title }}</h2>
        <div class="projects-grid">
          <div 
            v-for="(project, index) in pageData.projects.items" 
            :key="index"
            class="project-card"
          >
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tech-stack">
              <span 
                v-for="(tag, tagIndex) in project.tags" 
                :key="tagIndex"
                class="tech-tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-section">
        <h2>{{ pageData.contact.title }}</h2>
        <p>{{ pageData.contact.description }}</p>
        <div class="contact-links">
          <a 
            v-for="(link, index) in pageData.contact.links" 
            :key="index"
            :href="link.url" 
            class="contact-link"
            :target="link.url.startsWith('http') ? '_blank' : undefined"
          >
            {{ link.text }}
          </a>
        </div>
      </section>
    </main>
    
    <footer>
      <p>{{ pageData.footer.text }}</p>
    </footer>
  </div>
</template>

<script setup>
import indexData from '@/data/index.json'

const pageData = indexData

useHead({
  title: pageData.seo.title,
  meta: [
    { name: 'description', content: pageData.seo.description }
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
