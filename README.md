# Interiour-Layout - Terrene Design Studio

A sophisticated, modern website for **Terrene** - a high-end interior design and architecture studio. Built with cutting-edge web technologies and premium animations.

![Terrene Studio](public/home/hero.jpg)

## 🏗️ Tech Stack

### **Core Framework**
- **Next.js 15.4.6** - React framework with App Router
- **React 19.1.0** - Latest React with modern hooks
- **React DOM 19.1.0** - React rendering for web

### **Animation & Interaction**
- **GSAP 3.13.0** - Professional animation library
  - ScrollTrigger plugin for scroll-based animations
  - Custom easing functions for smooth transitions
- **Lenis 1.3.10** - Buttery smooth scrolling
- **Split-type 0.3.4** - Text splitting and reveal animations

### **UI & Icons**
- **React Icons 5.5.0** - Comprehensive icon library
- **Custom CSS** - Tailored styling with modern design principles

### **Package Management**
- **pnpm 10.15.0** - Fast, disk space efficient package manager

## ✨ Features

### **Premium User Experience**
- **Sophisticated Preloader** - Brand reveal with animated counter
- **Smooth Animations** - GSAP-powered scroll-triggered effects
- **Responsive Design** - Mobile-optimized with adaptive layouts
- **Interactive Navigation** - Animated menu with text splitting
- **Image Galleries** - Multiple layouts for showcasing work
- **Statistics Display** - Animated counters throughout the site

### **Performance Optimizations**
- **Static Generation** - Pre-rendered pages for fast loading
- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic bundle optimization
- **Smooth Scrolling** - Custom scroll settings for mobile/desktop

## 🚀 Getting Started

### **Prerequisites**

Before running this application, ensure you have:

- **Node.js 18+** (Recommended: Node.js 20+)
- **pnpm** (recommended) or npm
- **Git** for version control

### **Installation Steps**

1. **Clone the repository**
   ```bash
   git clone https://github.com/cosmocartier/interiour_layout.git
   cd interiour_layout
   ```

2. **Install dependencies**
   ```bash
   # Using pnpm (recommended)
   pnpm install
   
   # Or using npm
   npm install
   ```

3. **Run the development server**
   ```bash
   # Using pnpm
   pnpm dev
   
   # Or using npm
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Available Scripts**

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Package Management
pnpm install      # Install dependencies
pnpm update       # Update dependencies
pnpm add <pkg>    # Add new dependency
pnpm remove <pkg> # Remove dependency
```

## 📁 Project Structure

```
interiour_layout/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.js            # Homepage with hero section
│   │   ├── studio/            # About studio page
│   │   ├── spaces/            # Portfolio showcase
│   │   ├── blueprints/        # Gallery page
│   │   ├── connect/           # Contact page
│   │   ├── sample-space/      # Individual project page
│   │   ├── layout.js          # Root layout
│   │   ├── globals.css        # Global styles
│   │   └── index.css          # Homepage styles
│   ├── components/            # Reusable React components
│   │   ├── Nav/              # Navigation with animations
│   │   ├── Copy/             # Text animation component
│   │   ├── FeaturedProjects/ # Project showcase
│   │   ├── ClientReviews/    # Testimonials carousel
│   │   ├── HowWeWork/        # Process explanation
│   │   ├── Spotlight/        # Featured content
│   │   ├── CTAWindow/        # Call-to-action sections
│   │   ├── AnimatedButton/   # Interactive buttons
│   │   ├── Gallery/          # Image galleries
│   │   ├── Footer/           # Site footer
│   │   ├── TopBar/           # Top navigation bar
│   │   └── MenuBtn/          # Mobile menu button
│   ├── hooks/                # Custom React hooks
│   │   └── useViewTransition.js # Navigation transitions
│   └── client-layout.js      # Client-side layout wrapper
├── public/                   # Static assets
│   ├── home/                 # Homepage images
│   ├── studio/               # Studio page images
│   ├── spaces/               # Portfolio images
│   ├── spotlight/            # Featured images
│   ├── gallery-callout/      # Gallery images
│   ├── client-reviews/       # Client testimonial images
│   ├── featured-projects/    # Project showcase images
│   ├── how-we-work/          # Process images
│   ├── logos/                # Brand assets
│   └── archive/              # Archive images
├── package.json              # Dependencies and scripts
├── next.config.mjs           # Next.js configuration
├── jsconfig.json             # JavaScript configuration
└── README.md                 # This file
```

## 🎨 Design Philosophy

Terrene embodies design principles focused on:

- **Quiet, human-centered spaces** - Minimalist, thoughtful design
- **Light-forward design** - Emphasis on natural lighting
- **Tactile materials** - Rich textures and materials
- **Slow design principles** - Thoughtful, deliberate approach
- **Modular rhythm** - Consistent, harmonious patterns
- **Timeless aesthetics** - Classic, enduring design

## 📊 Studio Statistics

The website showcases impressive studio metrics:

- **225+** completed design studies
- **36** ongoing spatial explorations
- **12** cross-disciplinary collaborators
- **98%** return rate across commissions

## 🛠️ Development

### **Local Development**

1. **Start development server**
   ```bash
   pnpm dev
   ```

2. **Build for production**
   ```bash
   pnpm build
   ```

3. **Start production server**
   ```bash
   pnpm start
   ```

### **Code Structure**

- **Components**: Modular, reusable React components
- **Styling**: CSS modules and custom CSS
- **Animations**: GSAP with ScrollTrigger for performance
- **State Management**: React hooks and context
- **Routing**: Next.js App Router for file-based routing

## 🚀 Deployment

### **Vercel (Recommended)**

1. **Connect your GitHub repository**
2. **Import project** to Vercel
3. **Build settings**:
   - Framework Preset: Next.js
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`

### **Render**

1. **Create new Web Service**
2. **Connect GitHub repository**
3. **Build settings**:
   - Build Command: `pnpm install && pnpm build`
   - Start Command: `pnpm start`

### **Netlify**

1. **Import from Git**
2. **Build settings**:
   - Build Command: `pnpm build`
   - Publish Directory: `.next`

### **Railway**

1. **Deploy from GitHub**
2. **Automatic detection** of Next.js project
3. **No additional configuration** needed

### **Environment Variables**

No environment variables are required for basic functionality.

## 📱 Responsive Design

The application is fully responsive with:

- **Mobile-first approach** - Optimized for mobile devices
- **Adaptive layouts** - Different layouts for different screen sizes
- **Touch-friendly interactions** - Optimized for touch devices
- **Performance optimization** - Different scroll settings for mobile/desktop

## 🎭 Animation Features

### **GSAP Animations**
- Scroll-triggered animations
- Custom easing functions
- Performance-optimized animations
- Staggered animations for lists

### **Text Animations**
- Text splitting and reveal effects
- Character-by-character animations
- Line-by-line animations
- Mask animations

### **Scroll Animations**
- Parallax effects
- Smooth scrolling with Lenis
- Scroll-triggered reveals
- Performance-optimized scroll handling

## 🔧 Configuration

### **Next.js Configuration**

```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizations for production
  swcMinify: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // Experimental features
  experimental: {
    optimizePackageImports: ['gsap', 'react-icons'],
  },
};

export default nextConfig;
```

### **JavaScript Configuration**

```json
// jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 📦 Dependencies

### **Production Dependencies**

```json
{
  "@gsap/react": "^2.1.2",      // GSAP React integration
  "gsap": "^3.13.0",           // Animation library
  "lenis": "^1.3.8",           // Smooth scrolling
  "next": "15.4.6",            // React framework
  "react": "19.1.0",           // React library
  "react-dom": "19.1.0",       // React DOM
  "react-icons": "^5.5.0",     // Icon library
  "split-type": "^0.3.4"       // Text splitting
}
```

### **Development Dependencies**

- **ESLint** - Code linting
- **Next.js ESLint config** - Next.js specific rules

## 🐛 Troubleshooting

### **Common Issues**

1. **Build fails with dependency errors**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

2. **Animations not working**
   - Ensure GSAP plugins are registered
   - Check ScrollTrigger is imported
   - Verify DOM elements exist before animation

3. **Images not loading**
   - Check file paths in public directory
   - Ensure images are in correct format (jpg, png, webp)

4. **Performance issues**
   - Use production build (`pnpm build`)
   - Check for large image files
   - Optimize animations with GSAP

### **Performance Tips**

- Use `pnpm` for faster installations
- Optimize images before adding to public folder
- Use GSAP's `ScrollTrigger.refresh()` after DOM changes
- Implement lazy loading for images

## 🤝 Contributing

This is a template project. Feel free to:

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Submit a pull request**

## 📄 License

This project is part of the **Monthly Website Template (MWT)** by Codegrid - August 2025.

## 🙏 Acknowledgments

- **Codegrid** - Original template design
- **GSAP** - Animation library
- **Next.js team** - React framework
- **React team** - UI library

---

**Built with ❤️ using Next.js and modern web technologies**

*For questions or support, please refer to the documentation or create an issue in the repository.*
