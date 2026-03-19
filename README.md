# FitZone Promo Website

A responsive promotional website for a fitness brand, built with React.

This project showcases a modern single-page gym website with dedicated sections for hero content, services, trainers, memberships, contact, and footer details. It includes a dark/light mode toggle and a contact form with client-side validation.

## Features

- Responsive single-page layout
- Dark and light mode toggle
- Hero, About, Services, Trainers, Membership, Contact, and Footer sections
- Contact form validation with success feedback
- Scroll reveal animations in key sections
- Built with reusable React components

## Tech Stack

- React
- CSS (component-level styles)
- Create React App (react-scripts)
- Testing Library + Jest setup
- Github
- Vercel

## Project Structure

```text
fitzone-promo-website/
|-- public/
|   |-- index.html
|   |-- manifest.json
|   `-- robots.txt
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- About.jsx
|   |   |-- Contact.jsx
|   |   |-- Footer.jsx
|   |   |-- Hero.jsx
|   |   |-- Membership.jsx
|   |   |-- Navbar.jsx
|   |   |-- Services.jsx
|   |   `-- Trainers.jsx
|   |-- context/
|   |   `-- ThemeContext.jsx
|   |-- App.js
|   |-- index.js
|   `-- index.css
|-- package.json
`-- README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (recommended)

### Installation

1. Clone the repository.
2. Open the project folder.
3. Install dependencies:

```bash
npm install
```

### Run Development Server

```bash
npm start
```

The app will run at:

```text
http://localhost:3000
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build/` folder.

### `npm run eject`

Ejects the app configuration from Create React App.

## Build for Production

```bash
npm run build
```

The optimized output is generated in the `build/` directory.

## Deployment
This project is deployed on Netlify.
Every push to the main branch automatically updates the live site.
