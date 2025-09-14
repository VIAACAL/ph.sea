# VIAA Landing Page

## Overview

This is the official landing page for VIAA (Virtual Assistance Agency), a premium virtual assistant service specializing in customer support for e-commerce businesses. The website showcases VIAA's services, pricing plans, and contact information, with a focus on recruiting top-tier customer support specialists and AI talent.

The landing page features a modern, visually striking design with a video background, transparent UI elements, and interactive components. It's designed to attract high-quality candidates for VIAA's specialized contractor positions in both traditional customer support and AI-enhanced support roles.

## Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router for modern React server components
- **Language**: TypeScript for type-safe development
- **Styling**: 
  - [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
  - Custom CSS components and utilities in globals.css
- **UI Components**: 
  - Custom components built with [Shadcn UI](https://ui.shadcn.com/) as a foundation
  - Lucide React for iconography
- **Animation & Effects**:
  - CSS transitions for hover effects and animations
  - Video background with overlay for visual impact
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Deployment**: Optimized for [Vercel](https://vercel.com/) deployment
- **Node Version**: v18.17.0 (specified in `.nvmrc`)

## Project Structure

```
viaa-march-landing-page/
├── app/                  # Next.js App Router structure
│   ├── contact/          # Contact page
│   │   └── page.tsx      # Contact page component
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout component with metadata
│   └── page.tsx          # Home page component
├── components/           # Reusable UI components
│   ├── customer-logo.tsx # Customer logo component
│   ├── customers-section.tsx # Customers grid section
│   ├── email-copy-button.tsx # Email copy functionality
│   ├── modern-hero-section.tsx # Main hero section with header
│   ├── modern-pricing-section.tsx # Pricing plans section
│   ├── review-card.tsx   # Testimonial card component
│   ├── services-video-player.tsx # Video player for services
│   ├── testimonials-section.tsx # Testimonials section
│   ├── theme-provider.tsx # Theme context provider
│   ├── theme-toggle.tsx  # Light/dark mode toggle
│   ├── video-background.tsx # Video background component
│   └── ui/               # UI component library (Shadcn UI)
│       └── [various UI components] # Button, Card, etc.
├── hooks/                # Custom React hooks
│   ├── use-mobile.tsx    # Mobile detection hook
│   └── use-toast.ts      # Toast notification hook
├── lib/                  # Utility functions
│   └── utils.ts          # Common utility functions
├── public/               # Static assets
│   ├── customers/        # Customer logos and images
│   ├── logos_bundle 2/   # Fulfillment system logos
│   └── [various images and videos] # Media assets
└── [configuration files] # Next.js, TypeScript, Tailwind configs
```

## Key Components

### 1. ModernHeroSection
The main hero section includes:
- Transparent header with scroll behavior (hides on scroll down, shows on scroll up)
- VIAA logo and navigation
- Main headline and subheadline
- Customer avatars display
- Contact options (Email and WhatsApp)
- Email copy functionality
- Software stack logos display (customer support and fulfillment systems)

### 2. ModernPricingSection
Displays two pricing plans:
- Specialist Contractor Services ($5/hr USD)
- AI Specialist Contractor Services (custom pricing)
- Each plan includes detailed feature lists with check icons

### 3. VideoBackground
Provides a full-screen video background with:
- Mobile detection for optimized playback
- Autoplay handling with fallbacks for different browsers
- Semi-transparent overlay for better text readability

### 4. EmailCopyButton
A utility component that:
- Copies email address to clipboard
- Shows visual feedback (check icon) when copied
- Reverts to copy icon after 2 seconds

## Visual Assets

### Video Background
- Main background video: `/openart-video_5db5f7c4_1757225642363.mp4`
- Semi-transparent overlay (20% opacity)

### Logos and Images
- **VIAA Logo**: `/viaa-logo.png` - Used in header and favicon
- **Customer Support Software Logos**: Various logos in the root `/public` directory
  - Freshdesk, Front, Gorgias, Intercom, LiveAgent, LiveChat, Reamaze, Zendesk, Zoho
- **Fulfillment System Logos**: Located in `/public/logos_bundle 2/`
  - Flowspace, Mintsoft, ShipBob, ShipHero, ShipMonk, ShipStation
- **Customer Avatars**: Located in `/public/customers/`
  - 12 customer images with regular and hover states

## Responsive Design Features

The landing page is fully responsive with several key features:
- Mobile-first approach with responsive breakpoints
- Header adapts to different screen sizes
- Flexible grid layouts that adjust to viewport width
- Responsive typography with different text sizes for mobile and desktop
- Mobile detection for optimized video playback
- Touch event handling for mobile devices

### Breakpoints
- Default (mobile): Base styling
- sm: Small devices (640px and up)
- md: Medium devices (768px and up)
- lg: Large devices (1024px and up)

## Interactive Elements

### 1. Header Transparency
- Header starts with 2.5% opacity
- Gradually becomes fully transparent as user scrolls
- Hides when scrolling down, reappears when scrolling up

### 2. Email Copy Functionality
- One-click copy of email address to clipboard
- Visual feedback with icon change

### 3. Hover Effects
- Customer logos become more opaque and scale up on hover
- Software logos become more opaque on hover
- Customer avatars become more opaque on hover

## Setup and Development

### Prerequisites
- Node.js v18.17.0 or higher (as specified in `.nvmrc`)
- npm, yarn, or pnpm package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/VIAACAL/viaa-march-landing-page.git
cd viaa-march-landing-page

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

The development server will start at `http://localhost:3000`

### Building for Production

```bash
# Create production build
npm run build
# or
yarn build
# or
pnpm build

# Start production server locally
npm start
# or
yarn start
# or
pnpm start
```

## Deployment

This project is optimized for deployment on Vercel. Configuration files include:

- `vercel.json`: Specifies the framework as Next.js
- `next.config.mjs`: Configures Next.js with optimized build settings
- `.npmrc`: Increases Node.js memory limit for builds
- `.nvmrc`: Specifies the Node.js version

### Deployment Steps

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Next.js project and deploy it
4. Configure environment variables if needed
5. Set up custom domain if required

## Customization Guide

### Modifying Content

#### Hero Section
Edit `components/modern-hero-section.tsx` to change:
- Main headline and subheadline
- Contact information
- Software logos displayed

#### Pricing Section
Edit `components/modern-pricing-section.tsx` to change:
- Plan names and pricing
- Feature lists for each plan

### Adding/Changing Visual Assets

#### Video Background
1. Add new video file to `/public/` directory
2. Update the `videoSrc` prop in `app/page.tsx`

#### Customer Logos
1. Add new logo files to `/public/customers/`
2. Update the array in the hero section component

#### Software Logos
1. Add new logo files to `/public/` or appropriate subdirectory
2. Update the logo arrays in the hero section component

### Styling Changes

#### Global Styles
Edit `app/globals.css` to change:
- Base styles and typography
- Custom component styles
- Color variables in the `:root` and `.dark` selectors

#### Component-Specific Styles
Edit the respective component files to change Tailwind classes for specific elements

## Performance Considerations

### Video Optimization
- The video background is optimized for different devices
- Mobile detection to adjust video behavior
- Fallback mechanisms for browsers that don't support autoplay

### Image Optimization
- Use appropriately sized images for different viewports
- Consider using Next.js Image component for further optimization
- Maintain consistent image formats (PNG for logos, JPG for photos)

### Loading Performance
- Minimize JavaScript bundle size
- Use appropriate image formats and sizes
- Leverage browser caching through Vercel's CDN

## Browser Support

The website is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Mobile browsers are also supported with specific optimizations for touch interfaces and smaller screens.

## License

All rights reserved. This codebase is proprietary and confidential.

## Contact

For any questions or support regarding this project, please contact VIAA at opportunities@viaa.so.
