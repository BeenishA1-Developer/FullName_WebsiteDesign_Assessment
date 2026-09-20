# Developer Handoff

## Typography
- Display: DM Serif Display
- Body/UI: Manrope

## Color Tokens
- Terracotta: `#8F2D24`
- Warm Ivory: `#F8F4ED`
- Charcoal: `#25201C`
- Brass: `#B58A4A`
- Text: `#292522`
- Warm Gray: `#756E67`
- Border: `#DDD5C8`
- Off-white section: `#EDE8DF`

## Layout
- Main container: Tailwind `max-w-7xl` with `px-6`
- Desktop target: 1440px
- Mobile target: 390px
- Existing breakpoints: `sm` 640px and `lg` 1024px
- Desktop sections use two/four-column grids where appropriate.
- Mobile sections stack or use intentional horizontal carousels.

## Interaction Inventory
- Session-only welcome overlay with automatic dismissal and skip action
- Hero opacity-only crossfade between two local images every 3 seconds
- Scroll-triggered one-shot reveals
- Signature dish auto-scroll with hover pause
- Dish detail modal with quantity and cart feedback
- Menu category tab transition
- Mobile Guest Reviews horizontal auto-scroll
- Reservation form confirmation state
- Frontend-only order drawer with quantity controls and subtotal/total presentation
- Marketing consent checkbox for future WhatsApp/CRM integration; no data is stored or sent
- CTA and card hover feedback
- Reduced-motion fallbacks

## Asset References
All website images are now stored locally in `src/assets/images/` and mapped in `src/App.tsx`:

- `hero.jpg`: primary hero food image
- `hero-bbq.jpg`: hero BBQ variation
- `hero-interior.jpg`: hero and Our Story restaurant atmosphere
- `hero-karahi-table.png`, `hero-karahi-interior.png`: current hero carousel images
- `karahi.jpg`, `bbq.jpg`, `handi.jpg`: Signature Dishes
- `gallery-2.jpg`: biryani/food image reuse
- `skewers.jpg`, `spices.jpg`, `table.jpg`: menu and gallery support imagery
- `gallery-1.jpg`, `gallery-3.jpg`, `gallery-4.jpg`: gallery and location visuals
- `gallery-family-table.png`, `gallery-food-story.png`: editorial gallery feature images

These files were downloaded from the Unsplash references used during design. Confirm image licensing or replace them with approved client/royalty-free assets before commercial publication.

## Run Commands
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Vercel
This is a standard Vite app. Vercel can detect it automatically.
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
- No server-side route configuration is required for the current single-page homepage.

## Prototype Boundaries

The order drawer, reservation confirmation, and Mehran Circle consent UI are frontend-only prototypes. They do not persist customer records, send orders, or send marketing messages. Before production use, connect them to an approved backend/CRM flow with explicit consent handling.
