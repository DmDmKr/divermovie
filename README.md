# Diver Movie Portfolio

A portfolio website showcasing independent film projects "Ныряльщик" (The Diver) and "Записки по пьяни" (Drunk Notes).

**Live Site:** [https://ryadinsky-krupina-movies.ru/](https://ryadinsky-krupina-movies.ru/)

## Tech Stack

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **react-youtube** - YouTube player integration
- **CSS** - Styling with flexbox and responsive design

## Features

- Responsive design for mobile and desktop
- Custom React hook for movie selection logic
- Error boundaries for graceful error handling
- Accessibility features (ARIA labels, semantic HTML)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Deployment

This project uses GitHub Actions for automated deployment:

1. Push changes to the `main` branch
2. GitHub Actions workflow automatically builds the project
3. Builds are deployed via `gh-pages` to GitHub Pages
4. Custom domain configured via CNAME: `ryadinsky-krupina-movies.ru`

Manual deployment:

```bash
npm run deploy
```
