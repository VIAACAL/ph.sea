# VIAA Landing Page

## Overview
This is the official landing page for VIAA (Virtual Assistance Agency), a premium virtual assistant service for e-commerce businesses. The website showcases VIAA's services, customer testimonials, pricing plans, and contact information.

## Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (React framework with App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **UI Components**: Custom components built with [Shadcn UI](https://ui.shadcn.com/) as a foundation
- **Deployment**: Optimized for [Vercel](https://vercel.com/) deployment
- **Node Version**: v18.17.0 (specified in `.nvmrc`)

## Project Structure

```
viaa-landing/
├── app/                  # Next.js App Router structure
│   ├── contact/          # Contact page
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── components/           # Reusable UI components
│   ├── customer-logo.tsx # Customer logo component with hover effects
│   ├── customers-section.tsx # Customers grid section
│   └── ui/               # UI component library
├── public/               # Static assets
│   ├── callum.jpg        # Founder image
│   ├── success-story.jpg # Success story image
│   └── customers/        # Customer logos and images
└── ...                   # Configuration files
```

## Key Features

1. **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
2. **Interactive Elements**:
   - Dynamic shadow effects on review cards
   - Hover effects on customer logos
   - Smooth transitions and animations
3. **Optimized Images**: Customer logos and testimonial images with proper sizing and formats
4. **Performance Optimizations**: Configured for optimal loading and rendering performance

## Image Storage and Management

### Image Locations
- **Customer Logos**: Stored in `/public/customers/` directory
  - Each customer has a default image (`success-story{n}.png`) and hover image (`success-story{n}-hover.png`)
- **Founder Photo**: Stored as `/public/callum.jpg`
- **Success Story Image**: Stored as `/public/success-story.jpg`

### Image Formats
- PNG format for logos and graphics
- JPG format for photographs
- All images are optimized for web delivery

## Setup and Development

### Prerequisites
- Node.js v18.17.0 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/VIAACAL/viaa-march-landing-page.git
cd viaa-march-landing-page

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

The development server will start at `http://localhost:3000`

### Building for Production

```bash
# Create production build
npm run build
# or
yarn build

# Start production server locally
npm start
# or
yarn start
```

## Deployment

This project is optimized for deployment on Vercel. Configuration files include:

- `vercel.json`: Specifies the framework as Next.js
- `next.config.mjs`: Configures Next.js with optimized build settings
- `.npmrc`: Increases Node.js memory limit for builds
- `.nvmrc`: Specifies the Node.js version

To deploy to Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Next.js project and deploy it

## Customization

### Adding New Customer Logos
1. Add the image files to `/public/customers/`
2. Update the `customers` array in `components/customers-section.tsx`

### Modifying Styles
- Global styles are in `app/globals.css`
- Component-specific styles are applied using Tailwind classes in the respective component files
- Custom CSS classes like `.review-card` are defined in `globals.css`

### Content Updates
- Main page content is in `app/page.tsx`
- Contact page content is in `app/contact/page.tsx`

## Performance Considerations

- Images should be properly sized and optimized before adding to the project
- The site uses minimal JavaScript for better performance
- Tailwind's utility classes are purged in production builds to minimize CSS size

## Browser Support

The website is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved. This codebase is proprietary and confidential.

## Contact

For any questions or support, please contact Callum at VIAA.
