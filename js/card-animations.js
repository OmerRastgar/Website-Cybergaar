// Scroll-triggered animations for service and case study cards
class CardAnimator {
  constructor() {
    this.observers = [];
    this.animatedElements = new Set();
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupAnimations());
    } else {
      this.setupAnimations();
    }

    // Handle resize events for responsive behavior
    window.addEventListener('resize', this.debounce(() => this.handleResize(), 250));
  }

  setupAnimations() {
    // Setup service cards
    this.setupCardAnimations('.service-card', '.service-card-content', [
      'animate-left',   // First card slides from left
      'animate-bottom', // Second card slides from bottom
      'animate-right'   // Third card slides from right
    ]);

    // Setup case study cards
    this.setupCardAnimations('.case-study-card', '.case-study-card-content', [
      'animate-right',  // First card slides from right (different from services)
      'animate-left',   // Second card slides from left
      'animate-bottom'  // Third card slides from bottom
    ]);

    // Add loading states
    this.addLoadingStates();
  }

  setupCardAnimations(cardSelector, contentSelector, animationDirections) {
    const cards = document.querySelectorAll(cardSelector);
    
    cards.forEach((card, index) => {
      const content = card.querySelector(contentSelector);
      if (!content) return;

      // Add initial animation class based on index
      const directionClass = animationDirections[index % animationDirections.length];
      content.classList.add(directionClass);

      // Add loading state initially
      card.classList.add('card-loading');

      // Create intersection observer for this card
      const observer = new IntersectionObserver(
        (entries) => this.handleIntersection(entries, content, card),
        {
          threshold: 0.2, // Trigger when 20% of card is visible
          rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully in view
        }
      );

      observer.observe(card);
      this.observers.push(observer);
    });
  }

  handleIntersection(entries, content, card) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !this.animatedElements.has(content)) {
        // Trigger animation
        setTimeout(() => {
          content.classList.add('animate-active');
          card.classList.remove('card-loading');
          this.animatedElements.add(content);
        }, 100); // Small delay for smooth effect
      }
    });
  }

  addLoadingStates() {
    // Add shimmer effect to cards that haven't animated yet
    const cards = document.querySelectorAll('.service-card, .case-study-card');
    cards.forEach(card => {
      if (!card.classList.contains('card-loading')) {
        card.classList.add('card-loading');
      }
    });
  }

  handleResize() {
    // Recalculate animations on resize if needed
    // This ensures responsive behavior is maintained
    const cards = document.querySelectorAll('.service-card, .case-study-card');
    cards.forEach(card => {
      const content = card.querySelector('.service-card-content, .case-study-card-content');
      if (content && this.animatedElements.has(content)) {
        // Ensure animated cards stay in correct position
        content.style.transform = 'translate(0, 0)';
      }
    });
  }

  // Utility function for debouncing
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Public method to manually trigger animations
  triggerAnimations() {
    const contents = document.querySelectorAll('.service-card-content, .case-study-card-content');
    contents.forEach(content => {
      if (!this.animatedElements.has(content)) {
        content.classList.add('animate-active');
        this.animatedElements.add(content);
        
        const card = content.closest('.service-card, .case-study-card');
        if (card) {
          card.classList.remove('card-loading');
        }
      }
    });
  }

  // Public method to reset animations
  resetAnimations() {
    this.animatedElements.clear();
    const contents = document.querySelectorAll('.service-card-content, .case-study-card-content');
    contents.forEach(content => {
      content.classList.remove('animate-active');
    });
    
    // Re-setup animations
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.setupAnimations();
  }

  // Cleanup method
  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.animatedElements.clear();
    window.removeEventListener('resize', this.handleResize);
  }
}

// Auto-initialize when script loads
let cardAnimator;

// Initialize immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    cardAnimator = new CardAnimator();
  });
} else {
  cardAnimator = new CardAnimator();
}

// Make available globally for manual control
window.CardAnimator = CardAnimator;
window.cardAnimator = cardAnimator;

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CardAnimator;
}

// Handle page navigation (for SPAs)
function reinitializeAnimations() {
  if (cardAnimator) {
    cardAnimator.destroy();
  }
  cardAnimator = new CardAnimator();
}

// Listen for navigation events (for SPA frameworks)
window.addEventListener('popstate', reinitializeAnimations);
window.addEventListener('hashchange', reinitializeAnimations);

// Fallback for no-JS scenarios
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');
