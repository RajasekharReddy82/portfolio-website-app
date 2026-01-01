# Portfolio Website

A premium, animation-rich portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Premium Design**: Dark luxury glass + gradient mesh design system
- **Smooth Animations**: Framer Motion powered page transitions and micro-interactions
- **Fully Responsive**: Optimized for all device sizes
- **Accessibility First**: Keyboard navigation, ARIA labels, reduced motion support
- **Performance Optimized**: 90+ Lighthouse score target
- **SEO Ready**: Meta tags, sitemap, robots.txt

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (body), Sora (display)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

### Deploy

The site can be deployed to:
- **Vercel** (recommended): Connect your repository to Vercel for automatic deployments
- **Netlify**: Use the Next.js build command
- **Any Node.js hosting**: Build and start the production server

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── projects/           # Projects listing and detail pages
│   ├── skills/             # Skills page
│   ├── experience/         # Experience page
│   ├── resume/            # Resume page
│   ├── contact/            # Contact page
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Layout components (Navbar, Footer, PageTransition)
│   └── ui/                 # Reusable UI components
├── data/
│   └── resumeData.ts       # Single source of truth for all content
└── utils/
    └── cn.ts               # Utility for className merging
```

## Customization

All content is centralized in `src/data/resumeData.ts`. Update this file to customize:
- Personal information
- Projects
- Experience
- Skills
- Education

## Design System

The design uses CSS variables defined in `src/app/globals.css`:
- `--background`: Dark background color (#0b0f19)
- `--foreground`: Text color
- `--primary`: Primary accent (blue)
- `--secondary`: Secondary accent (purple)
- `--accent`: Accent color (cyan)
- `--border`: Border color
- `--glass`: Glass morphism background

## Accessibility

- Semantic HTML throughout
- ARIA labels for icons and interactive elements
- Keyboard navigation support
- Focus states visible
- Reduced motion support via `prefers-reduced-motion`
- Skip to content link

## Performance

- Next.js Image optimization
- Dynamic imports for heavy components
- Optimized animations (GPU-friendly)
- Code splitting via Next.js App Router

## License

This project is private and proprietary.
