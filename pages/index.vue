<template>
  <div class="container">
    <header>
      <h1>Welcome to Nnakarac</h1>
      <p class="subtitle">A Static Nuxt.js Site</p>
    </header>
    
    <main>
      <section class="content">
        <h2>About</h2>
        <p>This is a static site built with Nuxt.js, designed for optimal performance and SEO.</p>
        <p><NuxtLink to="/about" class="link">Learn more about this project →</NuxtLink></p>
        
        <div class="features">
          <div class="feature-card">
            <h3>⚡ Fast</h3>
            <p>Pre-rendered static pages for lightning-fast load times</p>
          </div>
          
          <div class="feature-card">
            <h3>🎨 Modern</h3>
            <p>Built with Vue 3 and Nuxt 3 for a modern development experience</p>
          </div>
          
          <div class="feature-card">
            <h3>📱 Responsive</h3>
            <p>Optimized for all devices and screen sizes</p>
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
  title: 'Nnakarac - Static Nuxt.js Site',
  meta: [
    { name: 'description', content: 'A static site built with Nuxt.js' }
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
  padding: 3rem 0;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.subtitle {
  font-size: 1.5rem;
  color: #7f8c8d;
}

main {
  padding: 2rem 0;
}

.content {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #3498db;
}

.feature-card p {
  color: #7f8c8d;
  line-height: 1.6;
}

footer {
  text-align: center;
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid #e0e0e0;
  color: #7f8c8d;
}

.link {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
}

.link:hover {
  text-decoration: underline;
}
</style>
