# QSHEI (Queensland Sexual Health & Education Institute)

## Description

QSHEI is a modern, inclusive, and sex-positive healthcare and education platform. Led by Nurse Practitioner Linda Kirby, QSHEI provides comprehensive sexual and reproductive healthcare, clinical sexology, and educational workshops. The platform is designed to break down barriers to care, dismantle health stigmas, and equip individuals with the knowledge and support they need in a completely non-judgmental environment.

## Architecture

This project is built on a highly performant and modern tech stack, structured around a variant of Feature-Sliced Design (FSD) to maintain scalability and clear domain boundaries.

- Framework: Next.js (App Router)
- Library: React
- Language: TypeScript
- Styling: Tailwind CSS
- Animation: Framer Motion

The codebase is organized by business domains:
- `src/app/`: Handles routing, layouts, metadata, and core entry points.
- `src/features/`: Contains domain-specific logic and UI components (e.g., home, about, contact) which act as independent modules consumed by the routing layer.
- `src/components/`: Houses reusable, cross-domain UI elements and layout shells.

## Security

The application has been hardened against the OWASP Top 10 vulnerabilities. As a statically generated frontend, it inherently mitigates many common web vectors. Furthermore, strict HTTP security headers are enforced at the Next.js server configuration level (`next.config.ts`):

- X-Content-Type-Options: nosniff (Prevents MIME-type sniffing)
- X-Frame-Options: DENY (Prevents Clickjacking)
- X-XSS-Protection: 1; mode=block (Legacy XSS mitigation)
- Referrer-Policy: strict-origin-when-cross-origin
- Strict-Transport-Security: max-age=31536000; includeSubDomains (Enforces HTTPS)

## Design and Aesthetics

The platform follows a "Gold-Standard" design philosophy, prioritizing a minimalist, editorial, and premium user experience.

- Typography: Uses a sophisticated pairing of Inter (sans-serif) for clean readability and Playfair Display (serif) for elegant headings.
- Color Palette: A highly curated, soothing aesthetic avoiding harsh primary colors, utilizing custom tokens like Navy, Sage, Terracotta, and Charcoal.
- Interaction: Employs Framer Motion for smooth scroll-linked animations, hover transitions, and dynamic loading states to ensure the interface feels responsive and alive.

## SEO and Visibility

The application is heavily optimized for search engine visibility and social sharing:
- Automated Generation: `sitemap.ts` and `robots.ts` dynamically instruct search engine crawlers on priority index mapping.
- Metadata: The root layout implements comprehensive OpenGraph (OG) and Twitter Card tags to ensure premium, image-rich link previews when shared across social platforms like Facebook, LinkedIn, Twitter, and iMessage.
- Performance: Leverages Next.js Image optimization with strict priority loading for above-the-fold content to ensure exceptional Core Web Vitals (LCP, CLS).

## Integrations

- Booking System: External integration with HotDoc for secure, private patient appointment scheduling.
