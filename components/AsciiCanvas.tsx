import React, { useRef, useEffect } from 'react';

const AsciiCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // --- Configuration ---
        const FONT_SIZE = 16;
        const HEAD_CHAR = '*';
        const TRAIL_CHARS = 'CYBERGAAR010101';
        const FADE_SPEED = 0.03;
        // ---------------------

        ctx.font = FONT_SIZE + 'px monospace';

        let comets: Comet[] = [];

        class Comet {
            x: number;
            y: number;
            vx: number;
            vy: number;
            trail: { x: number; y: number; char: string; opacity: number }[];
            isDead: boolean;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = 0;
                this.vx = (Math.random() - 0.5) * 4;
                this.vy = 2 + Math.random() * 3;
                this.trail = [];
                this.isDead = false;
            }

            update() {
                this.trail.push({
                    x: this.x,
                    y: this.y,
                    char: TRAIL_CHARS[Math.floor(Math.random() * TRAIL_CHARS.length)],
                    opacity: 1.0,
                });

                this.x += this.vx;
                this.y += this.vy;

                for (let i = 0; i < this.trail.length; i++) {
                    this.trail[i].opacity -= FADE_SPEED;
                }

                this.trail = this.trail.filter(p => p.opacity > 0);

                if (this.y > canvas.height && this.trail.length === 0) {
                    this.isDead = true;
                }
            }

            draw() {
                if (!ctx) return;
                for (const particle of this.trail) {
                    ctx.fillStyle = `rgba(160, 160, 160, ${particle.opacity})`;
                    ctx.fillText(particle.char, particle.x, particle.y);
                }

                ctx.fillStyle = '#FFFFFF';
                ctx.fillText(HEAD_CHAR, this.x, this.y);
            }
        }

        let animationFrameId: number;
        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = comets.length - 1; i >= 0; i--) {
                const comet = comets[i];
                comet.update();
                comet.draw();

                if (comet.isDead) {
                    comets.splice(i, 1);
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const spawnComet = () => {
            comets.push(new Comet());
            const randomDelay = 1000 + Math.random() * 4000;
            setTimeout(spawnComet, randomDelay);
        };

        animate();
        spawnComet();

        const handleResize = () => {
            if (!canvas || !ctx) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.font = FONT_SIZE + 'px monospace';
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            id="ascii-canvas" 
            style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                zIndex: 0 
            }} 
        />
    );
};

export default AsciiCanvas;
