# Deep Hill — Corporate Website

A premium static website for **Deep Hill**, a digital transformation and technology services company.

## Figma Design

The UI was designed in Figma before implementation:

**[Deep Hill Corporate Website (Figma)](https://www.figma.com/design/3UgPCqfWzBWX0Jbxi0nyCr)**

## Sections

- **Header** — Sticky navigation with logo and CTA
- **Hero** — Headline, value proposition, stats
- **Services** — Digital Transformation, App Development, Data and Business Intelligence, Automation
- **About** — Company story and values
- **Why Choose Us** — Four differentiators
- **Industries** — Sector expertise pills
- **Case Studies** — Success stories with metrics
- **Testimonials** — Client quotes
- **CTA** — Consultation call-to-action
- **Footer** — Links, legal, social

## Run Locally

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080)

## Site Structure

```
deephill/
├── index.html              # Home landing page
├── services.html
├── about.html
├── solutions.html
├── industries.html
├── contact.html
├── careers.html
├── case-studies/
│   ├── index.html
│   └── ...
├── js/site-chrome.js       # Shared sticky header + quick nav ribbon
├── css/styles.css
└── js/main.js
```

## Navigation

- **Sticky header** on every page — logo, main nav with hover dropdowns, and Contact CTA
- **Hover menus** on Services, Solutions, Industries, and Case Studies — sub-items like *End-to-End Hedge Accounting Platform* appear on hover (tap to expand on mobile)

## Brand Assets

- Logo: `assets/images/deep-hill-logo.png`
- Tagline: *Built on Depth. Elevated by Vision.*

## Design Tokens

| Token | Value |
|-------|-------|
| Primary | `#1A1A2E` |
| Accent | `#14B8A6` |
| Gold | `#F59E0B` |
| Background | `#F8FAFC` |
| Heading Font | Cinzel (serif) |
| Body Font | Plus Jakarta Sans |
