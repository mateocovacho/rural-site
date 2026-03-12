# Cartajima Ecotourism Estate Website

A SvelteKit website for the Cartajima Ecotourism Estate in Valle del Genal, Málaga.

## Features

- **Password Protection**: Agency-specific password gate (soft protection for tracking)
- **Bilingual**: English/Spanish toggle with localStorage persistence
- **Responsive Design**: Mobile-friendly layout
- **Design System**: Mediterranean elegance with custom typography and warm earth tones

## Agency Passwords

Access codes for different real estate agencies:

- `sothebys2024` - Sotheby's International Realty
- `knightfrank2024` - Knight Frank  
- `villasfincas2024` - Villas & Fincas
- `cartajima2024` - Direct Access

Password entry is logged to console for tracking which agency accessed the site.

## Pages

1. **Home** (`/`) - Hero with Valle del Genal imagery, vision overview, location highlights, water story, 20-year journey
2. **The Vision** (`/vision`) - Layout concept with 10 casitas, central house purpose, infrastructure details, land division
3. **The Land** (`/land`) - Valle del Genal context, Cartajima village, water features, accessibility info
4. **Contact** (`/contact`) - Inquiry form with serious tone

## Development

```bash
cd cartajima-site
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
pnpm build
```

Static build output goes to `build/` directory (11MB including images).

## Deployment

Built with `@sveltejs/adapter-static`. Deploy to:
- Netlify
- Vercel
- Any static hosting

## Design System

**Colors:**
- Background Primary: #F5F1E8 (warm cream)
- Background Secondary: #EDE8DD (deeper sand)
- Accent Earth: #8B7355 (terracotta)
- Accent Nature: #4A5D23 (olive/chestnut green)
- Accent Water: #5B7C8D (river stone blue)

**Typography:**
- Headings: Cormorant Garamond (serif)
- Body: Crimson Text (serif)
- Data/Technical: Source Serif Pro

## Content Principles

- Lead with land, not buildings (78,000 m² is the protagonist)
- Use Spanish terms naturally: finca, casita, cortijo, linde, pozas, Arrollo
- Emphasize water abundance - "never seen the spring dry"
- Privacy is the luxury - each casita isolated for solitude
- No resort language: avoid "exclusive", "VIP", "concierge", "5-star"
- No pressure tactics or "limited time" messaging
- This is a legacy invitation, not a sales pitch

## Project Structure

```
src/
├── lib/
│   ├── components/     # PasswordGate, Navigation
│   ├── i18n/           # EN/ES translations
│   ├── stores/         # Auth store
│   └── styles/         # Global CSS
├── routes/             # Pages
│   ├── +page.svelte    # Home
│   ├── vision/         # Vision page
│   ├── land/           # Land page
│   └── contact/        # Contact page
└── app.html

static/images/          # All project photos
```