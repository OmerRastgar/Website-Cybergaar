import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Service } from '../types';

interface GravitationalServiceCardProps {
    service: Service & { link: string };
    animationClass: string;
}

const GravitationalServiceCard: React.FC<GravitationalServiceCardProps> = ({ service, animationClass }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = card.getBoundingClientRect();

            // Check if card is visible
            if (top > window.innerHeight || top + height < 0) {
                return; // Don't do calculations if card is not in viewport
            }

            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const deltaX = clientX - centerX;
            const deltaY = clientY - centerY;

            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const maxDistance = 200;

            if (distance < maxDistance) {
                const pullForce = (maxDistance - distance) / maxDistance;
                const moveX = (deltaX / distance) * pullForce * 5;
                const moveY = (deltaY / distance) * pullForce * 5;
                card.style.transform = `translate(${moveX}px, ${moveY}px)`;
                card.style.transition = 'transform 0.1s linear';
            } else {
                card.style.transform = 'translate(0, 0)';
                card.style.transition = 'transform 0.5s ease';
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Link to={service.link} className="flex-1">
            <div ref={cardRef} className={`service-card p-8 rounded-lg shadow-lg hover:shadow-2xl h-full animate ${animationClass}`}>
                <div className="service-icon h-16 w-16 mb-6"><service.icon /></div>
                <h3 className="service-title text-2xl font-bold mb-3">{service.title}</h3>
                <p className="service-description text-lg">{service.description}</p>
            </div>
        </Link>
    );
};

export default GravitationalServiceCard;
