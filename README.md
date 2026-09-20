# Mehran Desi Kitchen

Mehran Desi Kitchen is a responsive React website for a fictional Pakistani family restaurant in Fateh Jang, Punjab. It presents the restaurant story, signature dishes, menu categories, gallery, guest reviews, reservation flow, contact actions, and location information in one homepage experience.

## Tech Stack

- React 19 and React DOM
- Vite 8
- TypeScript 5.7
- Tailwind CSS 4 via `@tailwindcss/vite`
- Oxfmt for formatting
- Vercel for deployment

## Main Features

- Responsive homepage for desktop and mobile
- Session-only welcome overlay with today's special and reduced-motion support
- Hero image carousel with calm opacity-only crossfade
- Responsive navigation and mobile menu
- Signature dish carousel with dish detail modal and cart feedback
- Frontend-only "Your Mehran Table" order drawer with quantity controls and totals
- Interactive menu category tabs
- Drinks category and order options for dine-in, online ordering, and WhatsApp
- Mehran Way process timeline and Mehran Circle opt-in relationship section
- Editorial restaurant gallery with local image assets
- Scroll-triggered section reveals
- Guest review carousel on smaller screens
- Reservation form confirmation state
- Call, WhatsApp, directions, and reservation actions
- Reduced-motion support for animation-heavy interactions
- Explicit prototype disclosure for order and marketing-consent flows; no backend or customer data storage is implemented

## Responsive Targets

- Desktop design target: 1440px
- Mobile design target: 390px
- Breakpoints: `sm` at 640px and `lg` at 1024px
- All local image layouts are designed to avoid horizontal overflow on mobile

## Installation

Requirements: Node.js 22 or a compatible current Node.js version and npm.

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:8443/` in a browser. The port can be changed with the `PORT` environment variable.

## Build and Preview

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Format the source files:

```bash
npm run format
```

## Deployment

The project is configured for Vercel through `vercel.json`:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

The app is a single-page Vite site and does not require server-side route configuration.

## Project Structure

```text
.
├── src/
│   ├── App.tsx             # Main homepage and interactions
│   ├── index.css           # Theme, layout, responsive rules, and motion
│   ├── main.tsx            # React entrypoint
│   ├── vite-env.d.ts       # Vite type declarations
│   ├── assets/
│   │   ├── images/         # Local food and restaurant photography
│   │   └── logo.png        # Application logo
│   └── imports/            # Assessment reference material
├── index.html              # Vite HTML shell
├── package.json            # Scripts and dependencies
├── package-lock.json       # npm dependency lockfile
├── pnpm-lock.yaml          # Figma Make/pnpm workspace lockfile
├── vite.config.ts          # Vite, Tailwind, and Figma Make configuration
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Vercel build configuration
├── .figma/make/            # Figma Make internal tooling and site metadata
└── documentation Markdown files
```

Generated folders such as `node_modules/` and `dist/` are not source files and are excluded from version control.

## Design System

- Display type: DM Serif Display
- UI and body type: Manrope
- Warm ivory: `#F8F4ED`
- Terracotta: `#8F2D24`
- Charcoal: `#25201C`
- Brass: `#B58A4A`
- Warm gray: `#756E67`
- Border: `#DDD5C8`
- Off-white section background: `#EDE8DF`
- Sharp editorial image treatment with 2-4px corner radii
- Desktop container: Tailwind `max-w-7xl` with horizontal padding

## Documentation

- `ASSESSMENT_SUBMISSION.md`: project and assessment summary
- `PRESENTATION_SCRIPT.md`: design presentation notes
- `DEVELOPER_HANDOFF.md`: implementation handoff details
- `WIREframe_CONTENT.md`: wireframe content reference
- `SUBMISSION_EMAIL.md`: submission communication draft

## Credits and Asset Note

The visual direction is based on the linked Figma design source. Food and restaurant photography is stored locally in `src/assets/images/`. Confirm image licensing or replace the current photography with approved client or royalty-free assets before commercial publication.
