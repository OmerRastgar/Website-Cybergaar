import React, { useEffect, useRef } from 'react';

interface ParticleButtonProps {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    className?: string;
    to?: string;
}

const ParticleButton: React.FC<ParticleButtonProps> = ({ children, onClick, className, to }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const particles: { x: number; y: number; size: number; speedX: number; speedY: number; }[] = [];
        const particleCount = 50;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        const createParticles = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.5,
                    speedX: (Math.random() * 0.5 - 0.25) * 0.5,
                    speedY: (Math.random() * 0.5 - 0.25) * 0.5,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#38bdf8'; // Cyber Trail blue

            for (const particle of particles) {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        createParticles();
        animate();

        const handleResize = () => {
            resizeCanvas();
            createParticles();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const commonProps = {
        onClick,
        className: `
            group relative inline-block px-8 py-3 rounded-full
            font-bold text-lg text-white
            bg-[#1e293b] border-2 border-[#38bdf8]
            transition-all duration-300 ease-in-out
            hover:bg-transparent hover:shadow-[0_0_15px_#38bdf8]
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#38bdf8]
            ${className}
        `,
    };

    return (
        <a href={to} {...commonProps}>
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">{children}</span>
        </a>
    );
};

export default ParticleButton;
