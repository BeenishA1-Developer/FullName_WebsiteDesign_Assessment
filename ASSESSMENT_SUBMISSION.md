# Mehran Desi Kitchen Website Design Assessment

## Project
Mehran Desi Kitchen, Fateh Jang, Punjab

## Design Concept
From the Kitchen to the Table.

The homepage turns a visitor's first impression into a clear path from discovery to visit: discover the restaurant, explore food and atmosphere, build trust through story and reviews, then call, WhatsApp, get directions, reserve, or visit.

## Deliverables
- High-fidelity React homepage for desktop and mobile
- Desktop target: 1440px
- Mobile target: 390px
- Responsive navigation and layout
- Interactive menu categories
- Signature dish carousel and dish details
- Hero image rotation and Ken Burns motion
- Scroll-triggered section reveals
- Mobile review carousel with auto-scroll
- Reservation form
- Contact, WhatsApp, directions, and location actions
- Responsive footer
- UX, client feedback, presentation, and handoff documentation in the in-app documentation panel

## Homepage Structure
1. Top information bar
2. Navigation
3. Hero
4. Marquee food strip
5. Restaurant introduction
6. From Kitchen to Table process strip
7. Signature Dishes
8. Menu Preview
9. Why Choose Us
10. Gallery
11. Guest Reviews
12. Find Us / Reservation
13. Final CTA
14. Assessment documentation
15. Footer

## UX Decisions
- Primary CTA: Explore Our Menu
- Secondary conversion actions: Call, WhatsApp, Directions, Reserve a Table
- Journey: Discover -> Explore -> Trust -> Visit
- The menu remains on the homepage so visitors do not need a separate route.

## Source Files
- `src/App.tsx`: homepage structure, content, interactions, and image references
- `src/index.css`: design tokens, responsive rules, motion, and hover states
- `src/imports/pasted_text/pasted-attachment.txt`: original assessment brief
- `src/imports/WEBSITE_DESIGN_ASSESSMENT.pdf`: assessment reference

## Figma Relationship
The Figma file contains the editable visual design and responsive screen presentation. The React project is the functional implementation of that design, including responsive behavior, animations, menu interactions, dish details, and reservation interaction.

## Verification
- `npm run build` passes successfully.
- Desktop verified at 1440px.
- Mobile verified at 390px.
- Mobile document width matches viewport with no horizontal overflow.

## Asset Note
The food and restaurant photography is organized locally in `src/assets/images/` and referenced through the `IMAGES` map in `src/App.tsx`. The files originated from the Unsplash references used during design; confirm their licenses or replace them with approved restaurant photography before public commercial use.
