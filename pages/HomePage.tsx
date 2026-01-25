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
import CyberGaarGlobe from '../components/CyberGaarGlobe';
import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Add CSS animations directly
const animationStyles = `
  .service-card, .case-study-card {
    position: relative;
    border: none;
    border-radius: 0.75rem;
    background: transparent;
    overflow: hidden;
    min-height: 280px;
  }

  .service-card-content, .case-study-card-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1.5rem;
    background: #000000;
    border-radius: 0.5rem;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Force all text in service cards to be white */
  .service-card-content * {
    color: #ffffff !important;
  }

  .service-card-content .text-cyan-300 {
    color: #67e8f9 !important;
  }

  .service-card-content.animate-left {
    transform: translateX(-100%);
  }

  .service-card-content.animate-bottom {
    transform: translateY(100%);
  }

  .service-card-content.animate-right {
    transform: translateX(100%);
  }

  .case-study-card-content.animate-left {
    transform: translateX(-100%);
  }

  .case-study-card-content.animate-bottom {
    transform: translateY(100%);
  }

  .case-study-card-content.animate-right {
    transform: translateX(100%);
  }

  .service-card-content.animate-active, 
  .case-study-card-content.animate-active {
    opacity: 1;
    transform: translate(0, 0);
  }

  .service-card:nth-child(1) .service-card-content,
  .case-study-card:nth-child(1) .case-study-card-content {
    transition-delay: 0.1s;
  }

  .service-card:nth-child(2) .service-card-content,
  .case-study-card:nth-child(2) .case-study-card-content {
    transition-delay: 0.2s;
  }

  .service-card:nth-child(3) .service-card-content,
  .case-study-card:nth-child(3) .case-study-card-content {
    transition-delay: 0.3s;
  }

  .service-card:hover, .case-study-card:hover {
    transform: translateY(-4px);
    transition: all 0.3s ease;
  }

  .service-card:hover .service-card-content,
  .case-study-card:hover .case-study-card-content {
    background: #000000;
  }

  @media (max-width: 768px) {
    .service-card, .case-study-card {
      min-height: 240px;
      margin-bottom: 1rem;
    }
    
    .service-card-content, .case-study-card-content {
      padding: 1rem;
      transition-duration: 0.6s;
    }
  }
`;

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
    { icon: ShieldCheckIcon, title: 'Compliance Audit', description: 'Navigating the complex constellations of regulations like ISO 27001, PCI DSS, and SOC 2 to ensure your operations are cleared for any mission.', link: '/compliance-audit' },
    { icon: BugAntIcon, title: 'Penetration Testing', description: 'We identify and neutralize system vulnerabilities with comprehensive penetration testing, simulating attacks to strengthen your defenses.', link: '/security-testing' },
    { icon: ShieldExclamationIcon, title: 'Vulnerability Assessment', description: 'Proactively scanning your digital infrastructure to identify, classify, and neutralize security weaknesses before they are exploited.', link: '/vulnerability-assessment' },
];

const faqs: FAQItem[] = [
    { question: "What systems do you deploy?", answer: "We offer a comprehensive suite of services including Compliance Audits, Penetration Testing, and Vulnerability Assessments to create a multi-layered defense system for your digital assets."
    },
    { question: "What is the cost of securing our assets?", answer: "Our pricing is customized based on the scope and complexity. We offer a consultation to assess your needs and provide a detailed proposal."
    },
    { question: "What sectors do you operate in?", answer: "We have experience across a wide range of sectors, including finance, healthcare, and e-commerce, adapting our strategies to the unique threat landscape of each."
    },
    { question: "How do we contact you?", answer: "You can contact us by using the contact form on our website to schedule a consultation with our mission specialists."
    },
];


const animatedTexts = ["Digital Assets", "Business", "Infrastructure"];

const HomePage: React.FC = () => {
    const [currentText, setCurrentText] = useState(animatedTexts[0]);
    const [index, setIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);
    const [isBannerHidden, setIsBannerHidden] = useState(false);

    // Inject animation styles
    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.textContent = animationStyles;
        document.head.appendChild(styleElement);
        
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    // Setup scroll animations
    useEffect(() => {
        const setupAnimations = () => {
            const cards = document.querySelectorAll('.service-card, .case-study-card');
            
            cards.forEach((card, index) => {
                const content = card.querySelector('.service-card-content, .case-study-card-content');
                if (!content) return;

                // Set initial animation direction
                const isServiceCard = card.classList.contains('service-card');
                if (isServiceCard) {
                    if (index === 0) content.classList.add('animate-left');
                    else if (index === 1) content.classList.add('animate-bottom');
                    else content.classList.add('animate-right');
                } else {
                    if (index === 0) content.classList.add('animate-right');
                    else if (index === 1) content.classList.add('animate-left');
                    else content.classList.add('animate-bottom');
                }

                // Setup intersection observer for both directions
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                // Scrolling down - animate in
                                setTimeout(() => {
                                    content.classList.add('animate-active');
                                }, 100);
                            } else {
                                // Scrolling up - animate out
                                content.classList.remove('animate-active');
                            }
                        });
                    },
                    {
                        threshold: 0.2,
                        rootMargin: '0px 0px -50px 0px'
                    }
                );

                observer.observe(card);
            });
        };

        // Delay setup to ensure DOM is ready
        const timer = setTimeout(setupAnimations, 100);
        
        return () => clearTimeout(timer);
    }, []);

    const setBodyBgClass = (className: string) => {
        document.body.classList.remove('bg-primary', 'bg-secondary');
        if (className) {
            document.body.classList.add(className);
        }
    };

    useEffect(() => {
        setBodyBgClass('bg-primary');

        return () => {
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

    // Track scroll position for parallax effect
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Meta
                title="CyberGaar - Elite Cybersecurity Solutions"
                description="CyberGaar offers cutting-edge cybersecurity services, including compliance audits, penetration testing, and vulnerability assessments to protect your digital assets."
            />
            
            {/* Navigation Header - Always on Top */}
            <Header />
            
            {/* Fixed Hero Section with Parallax Movement */}
            <div className="fixed inset-0 bg-black overflow-hidden z-0">
                <CyberGaarGlobe onBannerHiddenChange={setIsBannerHidden} />
                
                {/* Parallax Reveal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10"></div>
                
                {/* Welcome Banner - Centered with Parallax Movement */}
                <div data-banner="true" className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-1/2 lg:w-[45%] z-30 flex items-center justify-center pointer-events-auto transition-opacity duration-300 ${isBannerHidden ? 'opacity-0' : 'opacity-100'}`} style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.5}px))` }}>
                    <div className="w-full h-full bg-black/40 backdrop-blur-md md:rounded-r-3xl border-r border-t border-b border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center animate-fadeInUp">
                       

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight text-center">
                            Welcome to the <br className="hidden md:block"/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                               World of Standards
                            </span>
                        </h1>
                        
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed font-light max-w-2xl text-center">
                            Navigate the complex landscape of international cybersecurity standards and compliance frameworks across the globe.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10 justify-center">
                            <Link 
                                to="/#contact"
                                className="px-6 sm:px-8 py-2.5 sm:py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:scale-105 text-sm sm:text-base">
                               Contact Us
                            </Link>
                            <a 
                                href="https://demo.cybergaar.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 sm:px-8 py-2.5 sm:py-3.5 bg-white/5 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm text-sm sm:text-base">
                               Get a Demo
                            </a>
                        </div>

                        <div className="flex flex-row space-x-6 sm:space-x-8 text-xs sm:text-sm text-gray-400 justify-center">
                            <div>
                                <span className="block text-lg sm:text-xl md:text-2xl font-bold text-white">32+</span>
                                <span className="text-xs sm:text-sm">Active Regions</span>
                            </div>
                            <div>
                                <span className="block text-lg sm:text-xl md:text-2xl font-bold text-white">50+</span>
                                <span className="text-xs sm:text-sm">Frameworks</span>
                            </div>
                            <div>
                                <span className="block text-lg sm:text-xl md:text-2xl font-bold text-white">24/7</span>
                                <span className="text-xs sm:text-sm">Monitoring</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Scroll Down Animation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
                    <div className="flex flex-col items-center space-y-2">
                        <span className="text-cyan-400 text-xs font-medium animate-pulse">Scroll Down</span>
                        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scrolling Content - Starts after hero section */}
            <div className="relative z-10" style={{ marginTop: '100vh' }}>
                {/* Services Section */}
                <section id="services" className="py-8 bg-black text-white relative z-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Our Services
                            </span>
                        </h2>
                        <AnimateOnVisible options={{ threshold: 0.1 }}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <Link to="/compliance-audit" className="block">
                                    <div className="bg-gray-900 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 h-full">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                                                <ShieldCheckIcon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Compliance Audit</h3>
                                        </div>
                                        <p className="text-gray-300 mb-4">
                                            Navigating the complex constellations of regulations like ISO 27001, PCI DSS, and SOC 2 to ensure your operations are cleared for any mission.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">ISO 27001</span>
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">PCI DSS</span>
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">SOC 2</span>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/security-testing" className="block">
                                    <div className="bg-gray-900 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 h-full">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                                                <BugAntIcon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Penetration Testing</h3>
                                        </div>
                                        <p className="text-gray-300 mb-4">
                                            We identify and neutralize system vulnerabilities with comprehensive penetration testing, simulating attacks to strengthen your defenses.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">Web App Testing</span>
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">Network Security</span>
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">Social Engineering</span>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/vulnerability-assessment" className="block">
                                    <div className="bg-gray-900 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400 transition-all duration-300 h-full">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                                                <ShieldExclamationIcon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Vulnerability Assessment</h3>
                                        </div>
                                        <p className="text-gray-300 mb-4">
                                            Proactively scanning your digital infrastructure to identify, classify, and neutralize security weaknesses before they are exploited.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">Automated Scanning</span>
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">Manual Testing</span>
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">Risk Analysis</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </AnimateOnVisible>
                    </div>
                </section>

                {/* Case Studies Section */}
                <section className="py-8 bg-black text-white relative z-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Case Studies
                            </span>
                        </h2>
                        <AnimateOnVisible options={{ threshold: 0.1 }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="case-study-card">
                                    <div className="case-study-card-content">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-white font-bold text-xl">FS</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Financial Services</h3>
                                        </div>
                                        <p className="text-gray-300 mb-4">
                                            Implemented comprehensive cybersecurity framework for a leading financial institution, achieving 99.9% uptime and zero security breaches.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">SOC 2</span>
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">PCI DSS</span>
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">ISO 27001</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="case-study-card">
                                    <div className="case-study-card-content">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-white font-bold text-xl">HC</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Healthcare Provider</h3>
                                        </div>
                                        <p className="text-gray-300 mb-4">
                                            Secured patient data and medical records for a regional healthcare network, ensuring HIPAA compliance and improving data protection by 85%.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">HIPAA</span>
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">HITRUST</span>
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">NIST</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="case-study-card">
                                    <div className="case-study-card-content">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                                                <span className="text-white font-bold text-xl">EC</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">E-commerce Platform</h3>
                                        </div>
                                        <p className="text-gray-300 mb-4">
                                            Protected customer payment data and personal information for a global e-commerce platform serving 10M+ users worldwide.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">PCI DSS</span>
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">GDPR</span>
                                            <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-1 rounded">CCPA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnVisible>
                    </div>
                </section>

                {/* Clients Carousel Section */}
                <section className="py-8 bg-gray-900 text-white relative z-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Trusted by Industry Leaders
                            </span>
                        </h2>
                        <AnimateOnVisible options={{ threshold: 0.1 }}>
                            <ClientsCarousel />
                        </AnimateOnVisible>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-8 bg-black text-white relative z-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Frequently Asked Questions
                            </span>
                        </h2>
                        <AnimateOnVisible options={{ threshold: 0.1 }}>
                            <FAQ items={faqs} />
                        </AnimateOnVisible>
                    </div>
                </section>

                {/* Contact Section - Parallax Cover */}
                <section id="contact" className="bg-black text-white py-8 relative z-20">
                    <div className="relative z-20 container mx-auto px-6">
                        <div className="max-w-2xl mx-auto">
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer - Always at Bottom */}
            <div className="relative z-30">
                <Footer />
            </div>
        </>
    );
}

export default HomePage;
