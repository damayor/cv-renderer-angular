# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

An Angular 20 app that renders a CV/resume as an A4 HTML page and exports it to PDF via Puppeteer. The same codebase produces CVs in three languages (EN/DE/ES) and multiple role variants (frontend, senior frontend, full-stack, SRE, etc.) by swapping mock data files and Angular build configurations.

## Commands

```bash
# Frontend dev server (default: development config)
npm start           # or: ng serve

# Serve with a specific locale/scope
ng serve --configuration=eu      # EU scope, English
ng serve --configuration=de      # German locale
ng serve --configuration=es      # Spanish locale + ES scope

# Build
ng build

# Tests (Karma/Jasmine)
ng test

# Backend (simple Express pass-through, must be running for the app to work)
cd backend && npm start      # port 3000
# or for dev with hot reload:
cd backend && npm run dev

# Generate a PDF (requires both ng serve and backend running)
node generate-pdf.js <role> <lang> <env> <scope>
# Examples:
node generate-pdf.js frontend EN dev
node generate-pdf.js seniorfrontend DE prd EU
# env=prd omits the date suffix from the filename; output goes to ./buildCVs/

# Extract i18n strings
ng extract-i18n
```

## Architecture

The app has two runtime layers that must both be running:

1. **Angular frontend** (`ng serve`, port 4200) — renders the CV layout.
2. **Express backend** (`backend/server.js`, port 3000) — a thin pass-through that receives the CV JSON from the frontend via POST `/api/cv-data` and echoes it back. Its main purpose is to act as a data ingestion point for future backends.

### Data flow

```
Query params (?lang=DE&occupation=seniorfrontend)
  → PdfDemoComponent.ngOnInit()
  → loadMockData(lang, occupation)   ← picks from src/assets/cv-data/*.mock.ts
  → POST http://localhost:3000/api/cv-data
  → cvData signal updated
  → sidebar + main-panel components re-render
```

### CV data

- `src/app/interfaces/CVData.ts` — the `CvData` interface is the single source of truth for the data shape.
- `src/assets/cv-data/en-EN.mock.ts`, `de-DE.mock.ts`, `es-ES.mock.ts` — named exports for each role variant in each language.
- `src/app/services/loadMockCVData.ts` — maps `(lang, mockField)` to the correct import.

### Layout

The CV is a fixed `210mm` wide `<div>` (A4) composed of two side-by-side components:

- **`<sidebar>`** — left column: photo area, about-me, skills, languages, links, courses.
- **`<main-panel>`** — right column: `<user-header>` (name/role), one or more `<main-section-timeline>` blocks (experience entries), and optionally `<personal-details>` (shown only when `environment.cvScope == 'DE'`).

### Environment / build configurations

`angular.json` defines named build configurations (`eu`, `eu-es`, `de`, `es`) that replace `src/environments/environment.ts` with the appropriate file. The `environment.cvScope` property drives conditional rendering (e.g. the DE-specific personal details block). The `environment.lang` / `localize` settings control Angular's i18n compilation.

### Theming

Each mock data file includes a `colors` record. On load, `PdfDemoComponent.setThemeColors()` writes these as CSS custom properties on `:root` (`--clr-*` and `--color-*`). Tailwind + daisyUI consume these for the CV palette.

### PDF generation

`generate-pdf.js` uses Puppeteer to open `localhost:4200?lang=<lang>&occupation=<role>`, wait for the three main custom-element selectors (`user-header`, `sidebar`, `main-panel`), and print to PDF at A4/210mm width into `./buildCVs/`. The filename prefix encodes language (`CV`=EN, `LL`=DE, `HV`=ES) and scope (`E`=EU, `S`=ES).
