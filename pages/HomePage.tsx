import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import ClientCarousel from '../components/ClientCarousel';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ContactForm from '../components/ContactForm';
import type { Service } from '../types';

// Dummy icon components. In a real app, these would be from an icon library like Heroicons.
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


const services: Service[] = [
    { icon: ShieldCheckIcon, title: 'Compliance Audits', description: 'Navigate complex regulations like ISO 27001, PCI DSS, and SOC 2 with our expert-led audits.' },
    { icon: BugAntIcon, title: 'Security Testing', description: 'Identify and mitigate vulnerabilities with our comprehensive penetration testing and security assessments.' },
    { icon: MagnifyingGlassIcon, title: 'Vulnerability Assessment', description: 'Proactively identify, classify, and remediate security weaknesses before they can be exploited.' },
];

const animatedTexts = ["Digital Assets", "Business", "Infrastructure"];

const HomePage: React.FC = () => {
    const [currentText, setCurrentText] = useState(animatedTexts[0]);
    const [index, setIndex] = useState(0);

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
        <div className="-mt-32">
            {/* Hero Section */}
            <section className="hero-section bg-slate-900 text-white text-center py-20 px-4 relative">
                <div className="container mx-auto relative z-10 pt-32">
                    <AnimatedSection>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            Secure Your <span className="text-blue-600 transition-all duration-300 ease-in-out">{currentText}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">CyberGaar provides cutting-edge cybersecurity solutions, from compliance audits to penetration testing, ensuring your business is secure and resilient.</p>
                        <Link to="/#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105 inline-block">Explore Our Services</Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section py-20 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Core Services</h2>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {services.map((service, index) => (
                            <AnimatedSection key={index} className={`delay-${index * 100}`}>
                                <div className="service-card text-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col border border-slate-200 hover:border-blue-600">
                                    <div className="mb-4 text-blue-600 mx-auto">
                                        <service.icon className="h-16 w-16" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                                    <p className="text-slate-700 flex-grow">{service.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
            
            <ClientCarousel />
            
            <TestimonialCarousel />

            {/* Contact Section */}
            <section className="contact-section py-20 bg-slate-100" id="contact">
                <div className="container mx-auto px-4">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default HomePage;