# MILAN 2027 — Cultural Festival Website

A responsive frontend concept for **MILAN 2027**, created as part of a web development task assignment.

The project focuses on building an interactive festival experience rather than a static event listing, with event discovery, category exploration, registration, gallery interactions, responsive navigation and a custom 404 experience.

## Live Demo

https://milan-festival.vercel.app/

## Project Repository

https://github.com/debanwesha007-crypto/milan-festival

## Features

- Responsive MILAN 2027 festival homepage
- Event directory with keyword search
- Category-based event filtering
- Interactive event detail modal
- Event-specific registration flow
- Client-side form validation
- Registration success and error states
- Interactive festival gallery
- Gallery image viewer
- Category experience overlays
- Pro Shows section
- Festival schedule
- Responsive mobile navigation
- Custom 404 page
- Keyboard interaction support for modals
- Responsive desktop and mobile layouts
- Vercel deployment

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Framer Motion
- Lucide React
- Git & GitHub
- Vercel

## Project Structure

```text
milan-festival/
├── public/
│   └── assets/
├── src/
│   ├── data/
│   │   └── events.js
│   ├── App.jsx
│   ├── App.css
│   ├── NotFound.jsx
│   └── main.jsx
├── index.html
├── vercel.json
├── package.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/debanwesha007-crypto/milan-festival.git
cd milan-festival
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

### 4. Create a production build

```bash
npm run build
```

## Event Data

Festival event information is maintained separately from the presentation layer in:

```text
src/data/events.js
```

This keeps event content easier to maintain without duplicating event information throughout the UI.

## Deployment

The production version is deployed using **Vercel**.

The project is connected to the GitHub repository so that production builds can be generated from the project source.

## Attribution

This project was designed and developed by **Anwesha Deb** as a frontend web development task assignment.

© 2026 Anwesha Deb. All rights reserved.

## Disclaimer

This is a frontend concept created for a web development task assignment. It is not presented as the official MILAN 2027 website of SRM Institute of Science and Technology.
