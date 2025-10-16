# Content Data Files

This directory contains JSON files that manage the content for the website. You can easily update the content by editing these files without modifying the Vue components directly.

## Files

### `index.json`
Contains all content for the home page including:
- **seo**: Page title and meta description for SEO
- **hero**: Main hero section with name, subtitle, tagline, and call-to-action buttons
- **skills**: Core competencies section with skill cards
- **projects**: Key experience highlights section
- **contact**: Contact information and social links
- **footer**: Footer text

### `resume.json`
Contains all content for the resume/about page including:
- **seo**: Page title and meta description for SEO
- **header**: Page header with title and back link text
- **professionalSummary**: Professional summary section
- **workExperience**: Complete work history with expandable details
- **education**: Educational background
- **technicalSkills**: Skills organized by category
- **footer**: Footer text

## How to Edit

1. **Edit the JSON files** directly using any text editor
2. **Save your changes**
3. **Rebuild the application** if needed (for production builds)
4. **Refresh the browser** to see your changes (in development mode, changes are hot-reloaded)

## JSON Structure Examples

### Adding a new skill to the homepage:
```json
{
  "icon": "🎨",
  "title": "UI/UX Design",
  "description": "User Interface Design, User Experience, Wireframing, Prototyping"
}
```

### Adding a new work experience:
```json
{
  "title": "Job Title",
  "company": "Company Name",
  "period": "Jan 2024 - Present · 1 yr",
  "location": "Location · Work Type",
  "description": "Description of the role",
  "skills": "Skill1 · Skill2 · Skill3",
  "details": [
    "Responsibility 1",
    "Responsibility 2"
  ]
}
```

## Tips

- Maintain the JSON structure when editing
- Use proper JSON syntax (quotes, commas, brackets)
- Test your JSON for validity using online JSON validators if needed
- Keep backups before making major changes
