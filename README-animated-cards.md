# Animated Service & Case Study Cards

Custom scroll-triggered animations for service and case study cards with smooth entrance effects and responsive design.

## Features

- ✅ **Scroll-triggered animations** using Intersection Observer API
- ✅ **Multiple animation directions** (left, right, bottom)
- ✅ **Staggered delays** for visual interest
- ✅ **Responsive design** optimized for mobile and desktop
- ✅ **Loading states** with shimmer effects
- ✅ **No-JS fallback** for accessibility
- ✅ **Performance optimized** with debouncing and cleanup
- ✅ **Accessibility support** with reduced motion preferences
- ✅ **React components** ready for integration

## Installation

### 1. Add CSS to your project

Copy `styles/card-animations.css` to your project and include it in your HTML:

```html
<link rel="stylesheet" href="/styles/card-animations.css">
```

Or import in your React/Next.js app:

```javascript
import '../styles/card-animations.css';
```

### 2. Add JavaScript

Copy `js/card-animations.js` to your project and include it:

```html
<script src="/js/card-animations.js"></script>
```

### 3. Add React Components (Optional)

If using React, copy `components/AnimatedCards.tsx` to your components folder.

## Usage

### Basic HTML Implementation

```html
<!-- Services Section -->
<section class="bg-black text-white py-8">
  <div class="container mx-auto px-6">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-6">Our Services</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Card 1 - Slides from left -->
      <div class="service-card">
        <div class="service-card-content animate-left">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <!-- Icon SVG -->
            </div>
            <h3 class="text-xl font-bold text-white">Service Title</h3>
          </div>
          <p class="text-gray-300 mb-4">Service description here...</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">Tag 1</span>
            <span class="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">Tag 2</span>
          </div>
        </div>
      </div>

      <!-- Card 2 - Slides from bottom -->
      <div class="service-card">
        <div class="service-card-content animate-bottom">
          <!-- Card content -->
        </div>
      </div>

      <!-- Card 3 - Slides from right -->
      <div class="service-card">
        <div class="service-card-content animate-right">
          <!-- Card content -->
        </div>
      </div>
    </div>
  </div>
</section>
```

### React Implementation

```jsx
import { ServiceCard, CaseStudyCard, AnimatedSection } from '../components/AnimatedCards';

const services = [
  {
    icon: <YourIcon />,
    title: 'Service Title',
    description: 'Service description...',
    tags: ['Tag 1', 'Tag 2'],
    animationDirection: 'left',
    delay: 100
  }
  // ... more services
];

const ServicesSection = () => (
  <AnimatedSection title="Our Services">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          tags={service.tags}
          animationDirection={service.animationDirection}
          delay={service.delay}
        />
      ))}
    </div>
  </AnimatedSection>
);
```

## Animation Directions

- **`animate-left`**: Slides in from the left side
- **`animate-right`**: Slides in from the right side  
- **`animate-bottom`**: Slides in from the bottom

## Customization

### Modify Animation Timing

Edit `styles/card-animations.css`:

```css
.service-card-content, .case-study-card-content {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); /* Change duration */
}
```

### Adjust Intersection Observer Threshold

Edit `js/card-animations.js`:

```javascript
const observer = new IntersectionObserver(
  (entries) => { /* ... */ },
  {
    threshold: 0.2, // Trigger when 20% visible (0.0 to 1.0)
    rootMargin: '0px 0px -50px 0px' // Trigger 50px before fully in view
  }
);
```

### Change Animation Delays

Edit `styles/card-animations.css`:

```css
.service-card:nth-child(1) .service-card-content {
  transition-delay: 0.1s; /* Custom delay */
}
```

## Performance Features

- **Intersection Observer** for efficient scroll detection
- **Debounced resize handling** to prevent excessive calculations
- **Memory cleanup** on component unmount
- **Reduced motion support** for accessibility
- **Mobile-optimized** animation durations

## Browser Support

- ✅ Chrome 51+
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 15+
- ✅ iOS Safari 12.2+
- ✅ Android Chrome 51+

## No-JS Fallback

The CSS includes fallbacks for users with JavaScript disabled:

```css
.no-js .service-card-content, 
.no-js .case-study-card-content {
  opacity: 1;
  transform: translate(0, 0);
  position: relative;
}
```

Add this to your HTML for proper fallback:

```html
<noscript>
  <style>
    .service-card-content, .case-study-card-content {
      opacity: 1 !important;
      transform: none !important;
      position: relative !important;
    }
  </style>
</noscript>
```

## Integration with Existing Code

To integrate with your existing HomePage.tsx:

1. Replace your current Services and Case Studies sections with the animated versions
2. Import the CSS file
3. Update your service/case study data to include animation directions
4. The animations will work automatically with scroll

## Troubleshooting

### Cards not animating:
- Check that CSS and JS files are properly loaded
- Verify class names match (`service-card`, `service-card-content`)
- Ensure Intersection Observer is supported in your browser

### Animations too slow/fast:
- Adjust `transition-duration` in CSS
- Modify `delay` values in React components

### Mobile performance issues:
- Reduce animation duration on mobile (already included)
- Check for excessive DOM elements

## License

MIT License - feel free to use in your projects!
