# EAK International School: Admissions Landing Page (2027-28)

A single-page, responsive admissions landing page built with **React (Vite)** and **Bootstrap 5** (via `react-bootstrap`). Frontend only, all content is hard-coded sample data.

## Run it

You need Node.js 18 or newer.

```bash
npm install
npm run dev        # opens at http://localhost:5173
npm run build      # production build into /dist
npm run preview    # serve the production build locally
```

## Sections (in the order required by the brief)

1. Hero  2. Why choose us  3. Academic programs  4. School highlights  5. Facilities  6. Admission process
7. Important dates  8. Required documents  9. Fee information  10. Parent testimonials  11. FAQ  12. Final call to action
(plus sticky navbar and footer)

## Working interactions

- Sticky navbar with smooth-scroll links, active-section highlight, hamburger menu on mobile (closes on link tap or Esc)
- One reusable **Enquiry modal** opened from the navbar, hero, programs, process, fees, FAQ and final CTA. Validation with inline errors, then a thank-you state. Buttons such as "Schedule a Visit" preselect "Campus visit".
- "Talk to Our Admissions Team" opens a contact pop-up
- Count-up statistics (skipped for users who prefer reduced motion)
- Documents checklist with progress bar
- FAQ accordion (one answer open at a time)
- Testimonials: grid on tablet/desktop, slider with arrows and dots on phones
- Fees: table on tablet/desktop, cards on phones (no sideways scrolling)

## Responsive approach

Mobile-first CSS in `src/styles/theme.css`, using Bootstrap's grid and breakpoints (sm 576, md 768, lg 992, xl 1200). The admission process turns from a vertical timeline (phone) into a horizontal flow (desktop).

## Folder structure

```
src/
  main.jsx                  entry point, imports fonts and CSS
  App.jsx                   page = navbar + 12 sections + footer
  data/content.js           ALL text, numbers, fees, FAQs (edit here)
  context/EnquiryContext    lets any button open the modals
  hooks/                    useInView (scroll reveal), useActiveSection (navbar highlight)
  components/               one file per section, plus modals and shared heading
  styles/theme.css          design tokens + styles per section
public/favicon.svg
```

## Libraries used and why

- **react / react-dom**: UI
- **vite**: dev server and build
- **bootstrap + react-bootstrap**: grid, navbar, modal, accordion, carousel, form controls (accessible by default)
- **bootstrap-icons**: icons
- **@fontsource-variable/fraunces and dm-sans**: headings and body fonts, bundled locally

## Images

The hero and facility pictures are illustrated placeholders (gradients + icons) so the project has no external image dependency. To use real photos, drop royalty-free images (Unsplash, Pexels, Pixabay) into `public/images/` and swap them in (see the comments in `Hero.jsx` and `Facilities.jsx`). Credit them here.

## Known limitations

- The enquiry form does not send data anywhere (frontend-only by design).
- All names, dates, statistics and fees are fictional sample data.
