# Deployment Guide

This static Nuxt.js site can be deployed to various static hosting platforms.

## Build the Static Site

First, generate the static files:

```bash
npm run generate
```

This creates a `.output/public` directory with all static files ready for deployment.

## Deployment Options

### 1. Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run generate`
3. Set publish directory: `.output/public`
4. Deploy!

### 2. Vercel

1. Import your GitHub repository to Vercel
2. Vercel will auto-detect Nuxt.js
3. Deploy with default settings

### 3. GitHub Pages

```bash
# Build the site
npm run generate

# Deploy to GitHub Pages (using gh-pages package)
npx gh-pages -d .output/public
```

### 4. Any Static Host (Nginx, Apache, etc.)

Simply upload the contents of `.output/public` to your web server's root directory.

### 5. Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run generate`
3. Set build output directory: `.output/public`
4. Deploy!

## Custom Domain

After deployment, configure your custom domain in your hosting provider's settings.

## Environment Variables

If you need environment variables, add them in your hosting provider's dashboard. No changes needed in the code for static sites.
