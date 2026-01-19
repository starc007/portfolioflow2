# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and Framer Motion. This portfolio showcases skills, projects, experience, and provides a contact form for potential clients or employers to get in touch.

## Framework

- React 19.0.0
- Vite 6.0.3
- Framer Motion for animations
- Tailwind CSS for styling

## Features

- **Responsive Design**: Fully responsive layout that looks great on all devices from mobile to desktop
- **Modern Dark Theme**: Sleek dark mode interface with purple/indigo accents
- **Smooth Animations**: Page transitions and element animations powered by Framer Motion
- **Interactive UI**: Hover effects, animated counters, and micro-interactions
- **Sections Include**:
  - Hero/Landing with call-to-action
  - About Me with personal information
  - Skills showcase with progress bars
  - Project portfolio with filtering
  - Work Experience timeline
  - Contact form with validation
  
## Preview

Configured to run on `0.0.0.0:8080` for k8s HTTPRoute access.

## Development

```bash
npm install
npm run dev
```

Server will be available at:
- Local: http://localhost:8080
- Network: http://0.0.0.0:8080
- k8s: http://*.nodeops.app (or your HTTPRoute domain)

## Build

```bash
npm run build
npm run preview
```

## Customization

To personalize this portfolio:

1. Replace all "Your Name" placeholders with your actual name
2. Update the profile image in the Hero section
3. Modify the About Me section with your bio
4. Update the Skills section with your actual skills and proficiency levels
5. Add your real projects in the Projects section
6. Update the Experience section with your work history
7. Add your contact information in the Contact section
8. Replace social media links with your actual profiles

## Theme

The portfolio uses a modern dark theme with these primary colors:
- Background: Zinc 800-900 (dark slate)
- Accent: Indigo 500-600 (bright purple)
- Text: White/Gray for contrast
- Highlights: Gradient from indigo to purple

## Credits

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animation by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)