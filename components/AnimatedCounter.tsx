import React, { useState, useEffect, useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, className, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [setNode, entry] = useIntersectionObserver({ threshold: 0.5 });
  const isVisible = entry?.isIntersecting;
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const startTime = Date.now();

      const animateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const currentNum = Math.floor(progress * end);
        setCount(currentNum);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(end); // Ensure it ends on the exact number
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isVisible, end, duration]);

  return (
    <div ref={setNode as any} className={className}>
      {count}{suffix}
    </div>
  );
};

export default AnimatedCounter;
