# Nnakarac - Portfolio & Online Resume

A modern portfolio and online resume website built with Nuxt.js, showcasing professional experience, skills, and projects.

## Features

- **JSON-based Content Management**: All page content is managed through easy-to-edit JSON files
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive Resume**: Expandable/collapsible sections for work experience, education, and skills
- **SEO Optimized**: Proper meta tags and descriptions for better search engine visibility

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at http://localhost:3000

## Build

Build the application for production:

```bash
npm run build
```

## Generate Static Site

Generate static site for deployment:

```bash
npm run generate
```

This will create a `.output/public` directory with your static site ready to be deployed.

## Preview

Preview the production build:

```bash
npm run preview
```

## Content Management

All website content is stored in JSON files located in the `data/` directory:

- `data/index.json` - Home page content (hero, skills, projects, contact)
- `data/resume.json` - Resume page content (work experience, education, skills)

To update the website content:

1. Edit the appropriate JSON file in the `data/` directory
2. Save your changes
3. The development server will automatically reload with your changes
4. For production, rebuild the site with `npm run build`

See `data/README.md` for detailed documentation on the JSON structure and editing guidelines.