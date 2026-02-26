# LunarGameServers

A frontend-only React application for a gaming community (Lunar Game Servers). Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui components. Originally developed in Lovable and migrated to Replit.

## Architecture

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: react-router-dom v6
- **State/Data**: TanStack Query v5
- **Animations**: Framer Motion
- **Theme**: Dark space/lunar aesthetic

## Project Structure

```
src/
  App.tsx          - Root app component with routing
  main.tsx         - Entry point
  index.css        - Global styles and CSS variables
  pages/           - Route-level page components
    Index.tsx      - Home page
    Servers.tsx    - Game servers page
    Events.tsx     - Events page
    Rules.tsx      - Rules page
    News.tsx       - News page
    NotFound.tsx   - 404 page
  components/
    layout/        - Navbar, Footer
    ui/            - shadcn/ui component library
    IntroLoader.tsx - Animated intro screen
  data/            - Static data files
  hookslib/        - Custom hooks and utilities
```

## Running the App

- Workflow: "Start application" runs `npm run dev`
- Serves on port 5000 (Replit webview)

## Notes

- Pure frontend app with no backend
- The intro loader plays once per session (sessionStorage-based)
- Uses `lovable-tagger` removed from vite config during Replit migration
