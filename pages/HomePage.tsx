import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ClientsCarousel from '../components/ClientsCarousel';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import type { Service, FAQItem } from '../types';
import AsciiCanvas from '../components/AsciiCanvas'; // Import the new animation

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

// Dummy icon components
const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
  </svg>
);
const BugAntIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.362-3.797z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75A2.25 2.25 0 009.75 12v.024a2.25 2.25 0 004.5 0v-.024A2.25 2.25 0 0012 9.75z" />
  </svg>
);
const MagnifyingGlassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

const services: (Service & { link: string })[] = [
    { icon: ShieldCheckIcon, title: 'Compliance Audits', description: 'Navigate complex regulations like ISO 27001, PCI DSS, and SOC 2 with our expert-led audits.', link: '/services/compliance-audit' },
    { icon: BugAntIcon, title: 'Security Testing', description: 'Identify and mitigate vulnerabilities with our comprehensive penetration testing and security assessments.', link: '/services/security-testing' },
    { icon: MagnifyingGlassIcon, title: 'Vulnerability Assessment', description: 'Proactively identify, classify, and remediate security weaknesses before they can be exploited.', link: '/services/vulnerability-assessment' },
];

const faqs: FAQItem[] = [
    { question: "What types of cybersecurity services do you offer?", answer: "We offer a comprehensive suite of services..." },
    { question: "How much do your services cost?", answer: "Our pricing is customized based on your needs..." },
    { question: "What industries do you specialize in?", answer: "We have experience with a wide range of industries..." },
    { question: "How can I get started with CyberGaar?", answer: "Schedule a free consultation through our contact form..." },
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
                        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-8 animate fade-in-up delay-400">CyberGaar provides cutting-edge cybersecurity solutions, ensuring your business is secure and resilient.</p>
                        <Link to="/#contact" className="cta-button font-bold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105 inline-block animate fade-in-up pulse delay-600">Explore Our Services</Link>
                    </div>
                </div>
            </AnimateOnVisible>

            {/* Services Section */}
            <AnimateOnVisible options={{ threshold: 0.5 }} className="page services-section" onVisible={() => setBodyBgClass('bg-secondary')}>
                <h2 className="section-title text-5xl md:text-6xl font-bold animate fade-in-up">Our Core Services</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    {services.map((service, i) => (
                        <Link to={service.link} key={i} className="flex-1">
                            <div className={`service-card p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full animate ${i === 0 ? 'slide-in-left' : i === 1 ? 'slide-in-bottom' : 'slide-in-right'} delay-${i * 200}`}>
                                <div className="service-icon h-16 w-16 mb-6"><service.icon /></div>
                                <h3 className="service-title text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="service-description text-lg">{service.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </AnimateOnVisible>

            {/* FAQ Section */}
            <AnimateOnVisible options={{ threshold: 0.5 }} className="page faq-section" onVisible={() => setBodyBgClass('bg-primary')}>
                <h2 className="section-title text-5xl md:text-6xl font-bold animate fade-in-up text-white">Frequently Asked Questions</h2>
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
                        <h2 className="section-title text-5xl md:text-6xl font-bold animate fade-in-up">Get in Touch</h2>
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
