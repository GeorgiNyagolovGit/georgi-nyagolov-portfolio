# Georgi Nyagolov — Developer Portfolio

A responsive personal portfolio for **Georgi Nyagolov**, a junior frontend developer based in Sofia, Bulgaria. The site presents my profile, technical skills, projects, education and contact information in a clean, accessible interface.

## Features

- Responsive layout for desktop, tablet and mobile devices
- Separate pages for Home, About, Skills, Projects, Education and Contact
- Reusable React components with scoped SCSS Modules
- Semantic HTML and a keyboard-accessible “Skip to content” link
- Custom 404 page for unknown routes
- Centralized profile, project, skill and social-link data for easy updates

## Tech stack

- **React 19** — component-based user interface
- **TypeScript** — type-safe application code
- **Vite** — development server and production build
- **SCSS Modules** — locally scoped component styles
- **Oxlint** — fast static analysis

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 24.x
- npm

### Installation

```bash
git clone https://github.com/GeorgiNyagolovGit/georgi-nyagolov-portfolio.git
cd georgi-nyagolov-portfolio
npm install
npm run dev
```

Open the local address shown by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and create a production build |
| `npm run lint` | Run Oxlint checks |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
src/
├── assets/       # Images and static assets
├── components/   # Reusable layout and page sections
├── data/         # Profile, projects, skills and social links
├── hooks/        # Custom React hooks
├── pages/        # Route-level page components
├── styles/       # Global SCSS foundations and variables
├── types/        # Shared TypeScript types
└── utils/        # Constants and helper functions
```

## Customization

The portfolio content is kept separate from the UI components. Update the files in `src/data/` to change the profile, skills, projects and social links. Education entries are located in `src/components/sections/Education/Education.tsx`.

## License

This project is available for viewing and learning. The personal content and branding belong to Georgi Nyagolov.
