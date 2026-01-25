import React from 'react';
import AnimatedSection from './AnimatedSection';
import type { TimelineStep } from '../types';
import '../styles/timeline.css';

// Helper component for the timeline planet and its moons
const TimelinePlanet: React.FC<{ numMoons: number, stepNumber: number }> = ({ numMoons, stepNumber }) => {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12">
            {/* The planet is a container for the orbits and the sphere itself */}
            <div className="timeline-planet border-8 border-white">
                <div className="planet-sphere"></div>

                {/* Each moon gets its own orbit container */}
                {Array.from({ length: numMoons }).map((_, i) => (
                    <div key={i} className={`orbit-container orbit-container-${i + 1}`}>
                        <div 
                            className="moon-path"
                            style={{ '--start-delay': `-${(stepNumber - 1) * 0.8}s` } as React.CSSProperties}
                        >
                            <div className="moon-position">
                                <div className="orbiting-moon"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* The step number is overlaid on top */}
            <div className="step-number">
                {stepNumber}
            </div>
        </div>
    );
};

interface TimelineProps {
    steps: TimelineStep[];
}

const Timeline: React.FC<TimelineProps> = ({ steps }) => {
    return (
        <div className="relative mb-20">
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-600 -translate-x-1/2 hidden sm:block"></div>
            {steps.map((step, index) => (
                <div key={index} className="relative sm:flex sm:items-center mb-12 group">
                        <div className={`sm:w-1/2 ${index % 2 !== 0 ? 'sm:order-2 sm:pl-8' : 'sm:pr-8 sm:text-right'}`}>
                        <AnimatedSection>
                            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mb-4 sm:mb-0 border border-white/10">
                                <h3 className="text-xl font-bold text-gray-100 mb-2">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>
                            </div>
                        </AnimatedSection>
                    </div>
                    <TimelinePlanet numMoons={(index % 3) + 1} stepNumber={index + 1} />
                        <div className={`sm:w-1/2 ${index % 2 !== 0 ? 'sm:order-1 sm:pr-8' : 'sm:pl-8'}`}></div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
