# NepalStay

NepalStay is a responsive travel and hotel booking landing website for Nepal stays. It is built with React, Vite, Tailwind CSS, and React Router.

## Features

- Modern responsive travel business UI
- Sticky navigation with mobile menu
- Home landing page with hero, rooms, services, testimonials, gallery, and booking form
- Separate routed pages for Rooms, Services, Gallery, and Contact
- Room detail pages with pricing, images, features, and booking CTA
- Service detail pages for WiFi, Swimming Pool, Restaurant, Spa, Mountain View, and Free Parking
- Reusable React components for cards, sections, hero banners, navigation, footer, and forms
- Free Unsplash images and inline Heroicons-style SVG icons

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router DOM

## Routes

- `/` - Home page
- `/rooms` - Rooms listing
- `/rooms/:slug` - Room detail page
- `/services` - Services listing
- `/services/:slug` - Service detail page
- `/gallery` - Expanded image gallery
- `/contact` - Booking/contact form

## Project Structure

```text
src/
  components/
    ContactForm.jsx
    ContactSection.jsx
    Footer.jsx
    GallerySection.jsx
    Hero.jsx
    Icon.jsx
    Navbar.jsx
    PageHero.jsx
    RoomCard.jsx
    RoomsSection.jsx
    SectionHeader.jsx
    ServiceCard.jsx
    ServicesSection.jsx
    Testimonials.jsx
  data/
    siteData.jsx
  pages/
    ContactPage.jsx
    GalleryPage.jsx
    HomePage.jsx
    RoomDetailPage.jsx
    RoomsPage.jsx
    ServiceDetailPage.jsx
    ServicesPage.jsx
  App.jsx
  index.css
  main.jsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

This project is frontend-only. The booking form is styled and ready for integration, but it does not submit to a backend yet.
