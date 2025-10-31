import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ClientsCarousel from '../components/ClientsCarousel';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import type { Service, FAQItem } from '../types';
import AsciiCanvas from '../components/AsciiCanvas';
import ParticleButton from '../components/ParticleButton';
import GravitationalServiceCard from '../components/GravitationalServiceCard';

// A component to apply animations when it becomes visible
const AnimateOnVisible: React.FC<{ options?: IntersectionObserverInit, children: React.ReactNode, className?: string, onVisible?: () => void }> = ({ options, children, className, onVisible }) => {
    const [setNode, entry] = useIntersectionObserver(options || { threshold: 0.1 });
    const isVisible = entry?.isIntersecting;

    useEffect(() => {
        if (isVisible && onVisible) {
            onVisible();
        }
    }, [isVisible, onVisible]);

    return (
        <div ref={setNode as any} className={`${className} ${isVisible ? 'visible' : ''}`}>
            {children}
        </div>
    );
};

// New Thematic Icon Components
const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);

const BugAntIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 15.91a4.5 4.5 0 01-6.32-6.32M12 6.03V3m0 18v-3.03m3.97-12.94L18 4.03m-1.97 1.97L12 12m0 0l-3.97 3.97m3.97-3.97L18 19.97M6.03 12H3m18 0h-3.03M6.03 6.03L4.03 4.03m1.97 1.97L12 12m0 0l-3.97-3.97M6.03 17.97l-1.97 1.97L12 12" />
    </svg>
);

const ShieldExclamationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
);

const services: (Service & { link: string })[] = [
    { icon: ShieldCheckIcon, title: 'Compliance Audit', description: 'Navigating the complex constellations of regulations like ISO 27001, PCI DSS, and SOC 2 to ensure your operations are cleared for any mission.', link: '/services/compliance-audit' },
    { icon: BugAntIcon, title: 'Penetration Testing', description: 'We identify and neutralize system vulnerabilities with comprehensive penetration testing, simulating attacks to strengthen your defenses.', link: '/services/security-testing' },
    { icon: ShieldExclamationIcon, title: 'Vulnerability Assessment', description: 'Proactively scanning your digital infrastructure to identify, classify, and neutralize security weaknesses before they are exploited.', link: '/services/vulnerability-assessment' },
];

const faqs: FAQItem[] = [
    { question: "What defense systems do you deploy?", answer: "We offer a comprehensive suite of services including Compliance Audits, Penetration Testing, and Vulnerability Assessments to create a multi-layered defense system for your digital assets."
    },
    { question: "What is the cost of securing our assets?", answer: "Our pricing is customized based on the scope and complexity of the mission. We offer a consultation to assess your needs and provide a detailed proposal."
    },
    { question: "What sectors do you operate in?", answer: "We have experience across a wide range of sectors, including finance, healthcare, and e-commerce, adapting our strategies to the unique threat landscape of each."
    },
    { question: "How do we initiate a secure channel?", answer: "You can open a secure channel by using the contact form on our website to schedule a consultation with our mission specialists."
    },
];


const animatedTexts = ["Digital Assets", "Business", "Infrastructure"];

const HomePage: React.FC = () => {
    const [currentText, setCurrentText] = useState(animatedTexts[0]);
    const [index, setIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const setBodyBgClass = (className: string) => {
        document.body.classList.remove('bg-primary', 'bg-secondary');
        if (className) {
            document.body.classList.add(className);
        }
    };

    useEffect(() => {
        document.body.classList.add('homepage-scroll-lock');
        setBodyBgClass('bg-primary');

        return () => {
            document.body.classList.remove('homepage-scroll-lock');
            setBodyBgClass('');
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % animatedTexts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentText(animatedTexts[index]);
    }, [index]);

    return (
        <div className="scroll-container" ref={scrollContainerRef}>
            {/* Hero Section */}
            <AnimateOnVisible options={{ threshold: 0.5 }} className="page hero-section text-white" onVisible={() => setBodyBgClass('bg-primary')}>
                <AsciiCanvas /> 
                <div className="relative z-10 w-full">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate fade-in">
                            Secure Your <span className="hero-highlight transition-all duration-300 ease-in-out animate slide-in-right delay-200">{currentText}</span>
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-8 animate fade-in-up delay-400">We are your first line of defense in the vast expanse of cyberspace, securing your operations with resilient, cutting-edge threat mitigation.</p>
                        <ParticleButton to="/#contact" className="animate fade-in-up pulse delay-600">Fortify Your Perimeter</ParticleButton>
                    </div>
                </div>
            </AnimateOnVisible>

            {/* Services Section */}
            <AnimateOnVisible options={{ threshold: 0.5 }} className="page services-section" onVisible={() => setBodyBgClass('bg-secondary')}>
                <h2 className="section-title text-5xl md:text-6xl font-bold animate fade-in-up">Mission Capabilities</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    {services.map((service, i) => (
                        <GravitationalServiceCard 
                            key={i} 
                            service={service} 
                            animationClass={`${i === 0 ? 'slide-in-left' : i === 1 ? 'slide-in-bottom' : 'slide-in-right'} delay-${i * 200}`} 
                        />
                    ))}
                </div>
            </AnimateOnVisible>

            {/* FAQ Section */}
            <AnimateOnVisible options={{ threshold: 0.5 }} className="page faq-section" onVisible={() => setBodyBgClass('bg-secondary')}>
                <h2 className="section-title text-5xl md:text-6xl font-bold animate fade-in-up text-white">Engagement Briefings</h2>
                <div className="max-w-4xl w-full">
                    <FAQ items={faqs} />
                </div>
            </AnimateOnVisible>

            {/* Clients Section */}
            <AnimateOnVisible options={{ threshold: 0.5 }} className="page testimonials-section" onVisible={() => setBodyBgClass('bg-primary')}>
                <ClientsCarousel />
            </AnimateOnVisible>

            {/* Contact Section with Footer */}
            <AnimateOnVisible options={{ threshold: 0.5 }} className="page contact-section" id="contact" onVisible={() => setBodyBgClass('bg-secondary')}>
                <div className="flex flex-col h-full w-full max-w-4xl justify-center">
                    <div className="flex-grow flex flex-col justify-center">
                        <h2 className="section-title text-5xl md:text-6xl font-bold animate fade-in-up">Open a Secure Channel</h2>
                        <div className="w-full">
                            <ContactForm />
                        </div>
                    </div>
                    <footer className="w-full pt-8 text-center">
                        <p className="mb-4 text-neutral-color">&copy; 2024 CyberGaar. All rights reserved.</p>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="text-neutral-color hover:text-accent-color">Twitter</a>
                            <a href="#" className="text-neutral-color hover:text-accent-color">LinkedIn</a>
                            <a href="#" className="text-neutral-color hover:text-accent-color">GitHub</a>
                        </div>
                    </footer>
                </div>
            </AnimateOnVisible>
        </div>
    );
};

export default HomePage;
