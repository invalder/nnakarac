<template>
  <div class="container">
    <header>
      <h1>About Nnakarac</h1>
      <NuxtLink to="/" class="back-link">← Back to Home</NuxtLink>
    </header>
    
    <main>
      <section class="content">
        <h2>About This Project</h2>
        <p>
          Nnakarac is a static site generated with Nuxt.js, showcasing the power of 
          modern web development with Vue 3 and server-side generation.
        </p>
        
        <h3>Technology Stack</h3>
        <ul>
          <li><strong>Nuxt.js 3:</strong> The intuitive Vue framework for building web applications</li>
          <li><strong>Vue 3:</strong> The progressive JavaScript framework</li>
          <li><strong>Static Generation:</strong> Pre-rendered pages for optimal performance</li>
        </ul>
        
        <h3>Key Features</h3>
        <ul>
          <li>⚡ Lightning-fast page loads</li>
          <li>🎨 Modern, responsive design</li>
          <li>📱 Mobile-first approach</li>
          <li>🔍 SEO optimized</li>
          <li>♿ Accessible by default</li>
        </ul>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2025 Nnakarac. Built with Nuxt.js</p>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'About - Nnakarac',
  meta: [
    { name: 'description', content: 'Learn more about the Nnakarac project' }
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
  padding: 3rem 0;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.back-link {
  color: #3498db;
  text-decoration: none;
  font-size: 1.1rem;
}

.back-link:hover {
  text-decoration: underline;
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

h3 {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

p {
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}

ul {
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

footer {
  text-align: center;
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid #e0e0e0;
  color: #7f8c8d;
}
</style>
