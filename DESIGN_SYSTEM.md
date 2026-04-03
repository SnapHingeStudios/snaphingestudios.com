# Snap Hinge Studios - Design System & Development Guidelines

This document serves as the single source of truth for the design language, aesthetic vibe, and technical rules for the Snap Hinge Studios web application. AI assistants and developers should reference this file before creating new pages or components.

## 🎨 Brand Identity & Vibe

**Theme:** "Industrial Playground" — Arcade Grit, 716 Roots.
**Aesthetic:** High-contrast, chunky, atmospheric, playful yet industrial. It mixes deep, moody backgrounds with vibrant, tactile foreground elements.

## 🖌️ Color Palette

* **Midnight Slate (`#2C3E50`)**: Primary background, surfaces, and containers. Used to create the moody, industrial depth.
* **Kelly Green (`#339C53`)**: Primary accent, buttons, interactive elements, and prominent branding. (3D Shadow/Darker variant: `#287A41`).
* **Cool Grey (`#AAB7B8`)**: Secondary text, muted elements, and subtle borders.
* **White (`#FFFFFF`)**: Primary text and high-contrast elements.

## 🔤 Typography

* **Headlines**: `Plus Jakarta Sans` (Weights: 700, 800). Used for titles, chunky buttons, and prominent branding. Tailwind class: `font-headline`.
* **Body**: `Be Vietnam Pro` (Weights: 400, 500, 700). Used for paragraphs, subtitles, and standard UI text. Tailwind class: `font-body`.

## 🧱 UI Components & Styling (Tailwind)

* **Chunky Elements**: The UI relies heavily on tactile, 3D elements. Buttons and feature cards should use solid, unblurred box-shadows to simulate depth.
  * *Buttons*: Use the `.chunky-button` and `.chunky-button-primary` classes defined in `globals.css`. They feature a 3D solid shadow (`box-shadow: 0 6px 0 0 #287A41`) that compresses on active/click (`active:translate-y-1`).
  * *Border Radius*: Use large, playful border radii (`rounded-xl` to `rounded-[3rem]`).
* **Glassmorphism**: Use the `.glass-card` class (`bg-surface-variant backdrop-blur-xl border border-white/10`) for floating panels, overlapping content, or secondary feature cards to contrast with the chunky solid elements.
* **Icons**: **Font Awesome** (`@fortawesome/react-fontawesome`). *Strict rule: Do not use Lucide React.*

## ✨ Animations (Framer Motion & CSS)

* **Library**: Always use `motion` from `motion/react` for component-level animations.
* **Scroll Reveal**: Sections entering the viewport should fade and slide up.
  * *Standard prop pattern*: `initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`
* **Atmospheric**: Use CSS animations like `.animate-float` and `.snow-particle` (defined in `globals.css`) for background depth and ambient movement.

## 🛠️ Technical Rules

* **Framework**: Next.js 16+ (App Router).
* **Imports**: STRICTLY use absolute imports for internal paths (e.g., `import Hero from "@/components/Hero";`). Do not use relative paths (`../`).
* **Styling**: Tailwind CSS v4. Custom theme variables and utility classes are defined in `src/app/globals.css`.
