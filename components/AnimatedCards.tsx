import React, { useEffect, useRef } from 'react';
import '../styles/card-animations.css';

interface AnimatedCardProps {
  children: React.ReactNode;
  animationDirection?: 'left' | 'right' | 'bottom';
  delay?: number;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  animationDirection = 'left', 
  delay = 0,
  className = '' 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    
    if (!card || !content) return;

    // Add initial animation class
    content.classList.add(`animate-${animationDirection}`);
    
    // Add loading state
    card.classList.add('card-loading');

    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              content.classList.add('animate-active');
              card.classList.remove('card-loading');
            }, delay);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, [animationDirection, delay]);

  return (
    <div ref={cardRef} className={`animated-card ${className}`}>
      <div ref={contentRef} className="animated-card-content">
        {children}
      </div>
    </div>
  );
};

// Service Card Component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  animationDirection?: 'left' | 'right' | 'bottom';
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  tags, 
  animationDirection,
  delay 
}) => {
  return (
    <AnimatedCard 
      animationDirection={animationDirection} 
      delay={delay}
      className="service-card"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </AnimatedCard>
  );
};

// Case Study Card Component
interface CaseStudyCardProps {
  title: string;
  description: string;
  tags: string[];
  companyInitials: string;
  animationDirection?: 'left' | 'right' | 'bottom';
  delay?: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  title, 
  description, 
  tags, 
  companyInitials,
  animationDirection,
  delay 
}) => {
  return (
    <AnimatedCard 
      animationDirection={animationDirection} 
      delay={delay}
      className="case-study-card"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
          <span className="text-white font-bold text-xl">{companyInitials}</span>
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </AnimatedCard>
  );
};

// Animated Section Component
interface AnimatedSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ title, children, className = '' }) => {
  return (
    <section className={`py-8 bg-black text-white relative z-20 ${className}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            {title}
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export { AnimatedCard, ServiceCard, CaseStudyCard, AnimatedSection };
