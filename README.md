# Synthetic Persona Intelligence — React

Vite + React + Tailwind CSS rebuild of the Synthetic Persona Intelligence dashboard. Stitch-inspired "Clean Clinical" design language with Material You tokens.

## Run

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── main.jsx                   # Entry, mounts <App> with BrowserRouter
├── App.jsx                    # Routes + layout shell
├── index.css                  # Tailwind layers + design-token utilities
├── data/
│   ├── simulations.js         # 7 simulation objects
│   ├── personas.js            # 8 persona archetypes
│   └── crossInsights.js       # 6 cross-simulation insight cards
├── components/
│   ├── Layout.jsx             # Sidebar + Topbar shell
│   ├── Sidebar.jsx
│   ├── Topbar.jsx
│   ├── icons.jsx              # All inline SVG icons
│   ├── ui.jsx                 # Pill, Stepper, Toast, primitives
│   ├── SimulationRow.jsx
│   ├── ReadoutTab.jsx
│   ├── QuotesTab.jsx
│   └── SummaryTab.jsx
└── pages/
    ├── SimulationsPage.jsx
    ├── SimulationDetailPage.jsx
    ├── NewSimulationPage.jsx
    ├── PersonasPage.jsx
    └── InsightsPage.jsx
```

## Design tokens

All colors, type scale, spacing, and radius tokens live in `tailwind.config.js` under `theme.extend`. They mirror the Stitch DESIGN.md framework verbatim. Use them as Tailwind classes (`bg-surface`, `text-primary-container`, `rounded-lg`, `text-h2`, `p-md`, `gap-gutter`, etc.) — never hard-code colors in component files.

## Routes

| Path                    | Component                |
| ----------------------- | ------------------------ |
| `/`                     | redirects to `/simulations` |
| `/simulations`          | `SimulationsPage`        |
| `/simulations/:id`      | `SimulationDetailPage`   |
| `/new`                  | `NewSimulationPage`      |
| `/personas`             | `PersonasPage`           |
| `/insights`             | `InsightsPage`           |
