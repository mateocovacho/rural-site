# Design System Instructions: Cartajima Ecotourism Estate

## The Vision
An ecotourism sanctuary in Valle del Genal — 78,000 m² of chestnut forests, pure water, and privacy. Ten intimate casitas scattered across the land so each guest feels alone with nature, anchored by a central gathering space for community. This is the luxury of the future: silence, space, and connection.

## Aesthetic Direction
- **Style**: Timeless Mediterranean elegance — NOT glossy resort brochure, NOT tech startup
- **Vibe**: A 20-year legacy meets the future of slow travel. Heritage, patience, abundance of nature
- **References**: Villas & Fincas elegance + Monocle magazine + architectural heritage journals

## Typography
- **Headings**: Playfair Display or Cormorant Garamond (serif) — for the gravitas of land
- **Body**: Lora or Crimson Text (readable serif) — for storytelling
- **Accent**: Source Serif Pro — for data/technical details
- **No geometric sans-serifs** — they feel too corporate/startup

## Color Palette
```
Background Primary: #F5F1E8 (warm cream/limestone)
Background Secondary: #EDE8DD (deeper sand)
Accent Earth: #8B7355 (terracotta/Andalusian roof tile)
Accent Nature: #4A5D23 (olive/chestnut green)
Accent Water: #5B7C8D (stream/river stone blue)
Text Primary: #3D3D3D (soft charcoal)
Text Light: #F5F1E8 (for dark backgrounds)
```

## The Story Hierarchy
1. **The Land First**: Cartajima, Valle del Genal, chestnut forests, water sources
2. **The Vision**: 10 casitas + central house (explain the privacy/social balance)
3. **The 20-Year Story**: The patience, the permits, the political alignment
4. **The Practical Abundance**: Water + electricity + orientation + access
5. **The Opportunity**: The license for development, the timing, the two remaining parcels

## Page Structure

### Home
- **Hero**: Aerial or wide landscape shot showing the valley — text overlay: "Cartajima. Valle del Genal. 78,000 m²."
- **Sub-hero**: "The luxury of the future is space, silence, and connection with nature"
- **The Vision Block**: 10 casitas concept (icon or simple illustration) + central house purpose
- **Location Card**: 40 min Marbella | 15 min Ronda | Chestnut forests
- **Water Story**: The spring that never dries, the stream, the river — emphasize water abundance
- **The Story**: Short paragraph about the 20-year permit journey, changed circumstances
- **CTA**: "View the Project" or "Contact"

### The Vision (Dedicated Page)
- **The Layout**: Map/diagram showing 10 casitas placement (privacy concept)
- **The Central House**: Event space, courses, community — the balance
- **Land Division**: 2 parcels for project, 2 available for expansion/other uses
- **Infrastructure**: Water sources detailed, electricity post, south orientation

### The Land (Context Page)
- **Valle del Genal**: Chestnut forest landscape, special protection status
- **Cartajima**: Highest entry point to the valley
- **Water Features**: Arrollo Blanco, cascadas, pozas, Río Genal access
- **Accessibility**: Current 40/15 min times, future road expansion mention

### Contact/Opportunity
- Contact form
- License status highlight (approved, ready)
- Serious inquiry tone — this is a legacy asset, not a quick flip

## Content Rules
- **Lead with land, not buildings** — the 78,000 m² is the protagonist
- **Use Spanish terminology naturally**: finca, casita, cortijo, linde, pozas, Arrollo
- **Emphasize water** — "never seen the spring dry even in driest years"
- **Privacy is the luxury** — repeat this concept
- **The story matters** — 20 years, alignment of institutions, personal circumstances
- **No "luxury resort" language** — avoid: exclusive, VIP, concierge, 5-star
- **Yes to**: space, silence, connection, privacy, nature, water, legacy, patience

## Layout Principles
- **Hero images**: Landscape first, architecture second
- **Whitespace**: Generous — this land has room to breathe
- **Property card** (if showing concept renders): 
  - 10 casitas + main house
  - Total buildable footprint
  - 78,000 m² land size
  - Location: Cartajima, Valle del Genal
- **No parallax** — keep it still like the land itself
- **No auto-play** — let the visitor choose to look
- **Navigation**: Home | The Vision | The Land | Contact (4 items max)

## Image Treatment
- **Priority 1**: Chestnut forests, valley views, water features, Arrollo Blanco
- **Priority 2**: The 40-min distance view (Marbella/Ronda context)
- **Priority 3**: Concept renders of casitas (if available) — must feel integrated into landscape
- **Style**: Natural light, golden hour, wide angles showing space, no heavy filters
- **Avoid**: Generic luxury resort stock photos, crowded pool scenes, nightlife

## Absolute No-Nos
- Sans-serif display fonts
- Neon/bright accent colors
- Animation-heavy entrances
- "Book Now" buttons (this is a development opportunity, not a hotel)
- Cookie-cutter real estate language: "stunning," "breathtaking," "luxury lifestyle"
- Pressure tactics: "limited time," "hot market"
- Social media feeds — keep it private and focused


### Technical Specs
- **Framework**: Svelte (preferred for simplicity), SvelteKit if routing/i18n requires it
- **Language**: Bilingual - English/Spanish toggle (persist selection in localStorage)
- **Password Protection**: Simple agency-specific password gate

### Password Protection Requirements
- **Purpose**: Track which real estate agency shares the site (soft protection only)
- **Implementation**: 
  - Different passwords for each agency (e.g., "sothebys2024", "knightfrank2024", "villasfincas2024")
  - Simple client-side check or lightweight session storage
  - Log entry password to analytics/console to see which agency shared
  - **Security level**: Soft - keeps out average users, not hackers
  - UX: Clean password entry modal on first visit, "Contact [Agency] for access" hint
- **No hard encryption needed** - this is tracking/soft-gate, not data protection

### Language Toggle
- Persistent toggle in header (ES | EN)
- Full content translation (not just UI elements)
- URL optional: `/es/` and `/en/` routes OR query param `?lang=es`
- Default based on browser locale, fallback to English

### Additional Notes
- Lightweight Svelte stores for state management
- Static adapter preferred (deploy to Netlify/Vercel)
- Image optimization: Svelte-enhanced-img or manual WebP with fallbacks





## The End Goal
A website that feels like standing on the finca at golden hour — quiet, spacious, abundant with possibility. The design should honor the 20 years of patience it took to get here, while presenting a clear vision for the next 20 years. Not a sales pitch. A legacy invitation.