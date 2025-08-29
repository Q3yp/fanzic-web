# FanDi Livestock Fan Website

A modern, bilingual website for FanDi (梵帝风机), a professional livestock ventilation equipment manufacturer.

## Features

- **Bilingual Support**: Full Chinese (中文) and English language support
- **Modern Design**: Clean, responsive design with Tailwind CSS
- **Product Showcase**: Detailed presentation of fan products
- **Professional Layout**: Header, hero section, product cards, and footer
- **Mobile Responsive**: Optimized for all device sizes
- **Next.js 15**: Latest Next.js with App Router and Turbopack

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **next-intl** - Internationalization support
- **Turbopack** - Fast development build tool

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   └── [locale]/           # Internationalized routes
│       ├── layout.tsx      # Root layout with i18n
│       ├── page.tsx        # Home page
│       ├── products/       # Products section
│       ├── about/          # About page
│       └── contact/        # Contact page
├── components/             # Reusable components
│   ├── Header.tsx         # Navigation with language switcher
│   ├── Hero.tsx           # Hero section
│   ├── ProductShowcase.tsx # Product display
│   └── Footer.tsx         # Footer
├── i18n/
│   └── request.ts         # Internationalization config
└── middleware.ts          # Locale routing middleware

messages/
├── en.json               # English translations
└── zh.json               # Chinese translations
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

1. **Home** (`/`) - Hero section and product overview
2. **Products** (`/products`) - Detailed product catalog
3. **About** (`/about`) - Company information and mission
4. **Contact** (`/contact`) - Contact form and business details

## Language Support

The website supports both English (`/en`) and Chinese (`/zh`) with:
- Automatic locale detection
- Language switcher in header
- Localized content and navigation
- SEO-friendly URL structure

## Brand Identity

- **Colors**: Blue (#1e40af) and Red (#dc2626) reflecting the company logo
- **Typography**: Inter font for clean, modern appearance
- **Logo**: FanDi branding with wind element styling

## Deployment

The site is ready for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.

For Vercel deployment:
```bash
vercel deploy
```

## License

Copyright © 2024 FanDi Ventilation Equipment. All rights reserved.
