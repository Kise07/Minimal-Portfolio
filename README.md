# Minimal Portfolio

A minimal, animation-rich developer portfolio built with Next.js and Motion.
Showcases 18 interactive UI demos — from magnetic buttons to 3D card transforms.

**Live Demo:** [your-domain.com](https://your-domain.com)

---

## Tech Stack

| Category  | Technology              |
| --------- | ----------------------- |
| Framework | Next.js 16 (App Router) |
| Language  | TypeScript              |
| Styling   | Tailwind CSS v4         |
| Animation | Motion (Framer Motion)  |
| Icons     | Tabler Icons, Lucide    |
| Dark Mode | next-themes             |
| Font      | Poppins (Google Fonts)  |

---

## Highlights

- **18 animation demos** — blur-in text, 3D transforms, layout animations, spring physics, infinite sliders
- **Magnetic cursor** — spring-based button that follows the mouse
- **3D card transforms** — perspective rotateX/Z with hover and tap states
- **Layout animations** — shared layout transitions between states
- **Dark mode** — full light/dark theme with system preference detection
- **Mobile-ready** — `whileTap` effects for touch devices

---

## Features

### Animations

- Staggered text blur-in on scroll
- Multi-step purchase/submit button sequences
- Infinite vertical slider (album covers)
- Text loop and flipper effects
- Orbital icon animation (CSS-only)

### Interactions

- Magnetic cursor-following button
- macOS-style arc dock cards (drag to rearrange)
- Mouse-tracking radial gradient (X/Twitter logo)
- Hover-exit card reveal

### Layouts

- Layout-animated tab system with sliding pill indicator
- Avatar grid with expand/collapse transitions
- Auto-stacking cards with interval reveal
- Smooth navbar with hover indicator

### UI Components

- Profile sidebar with tech stack showcase
- Resume viewer (embedded PDF)
- Project cards with video demos
- Theme toggle with icon rotation

---

## Getting Started

### Prerequisites

- Node.js 18+
- Bun (recommended) or npm

### Install

```bash
git clone https://github.com/yourusername/Minimal-Portfolio.git
cd Minimal-Portfolio
bun install
```

### Development

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
bun build
bun start
```

---

## Project Structure

```
src/
├── app/                  # Pages (/, /work)
├── components/
│   ├── core/             # Layout primitives
│   ├── ui/               # Profile, Works, Cards
│   ├── work/             # 18 animation demos
│   │   ├── arc/          # Dock cards
│   │   ├── features/     # Card effects
│   │   ├── layouts/      # Layout animations
│   │   ├── minimal/      # Buttons, sliders, text
│   │   └── react-animations/  # 3D transforms
│   └── svgs/             # Custom SVG icons
└── lib/                  # Utilities
```

---

## Contact

**Name** — [your-email]

- GitHub: [yourusername](https://github.com/yourusername)
- LinkedIn: [your-profile](https://linkedin.com/in/your-profile)
- X: [your-handle](https://x.com/your-handle)
