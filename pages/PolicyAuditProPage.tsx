import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import type { FAQItem } from '../types';

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.1.73-.24.73-.53v-1.84c-3.03.66-3.67-1.46-3.67-1.46-.5-1.27-1.22-1.61-1.22-1.61-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.56 1.2 3.18.92.1-.72.38-1.2.7-1.48-2.43-.28-5-1.2-5-5.42 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.91 0 0 .92-.3 3 1.12a10.45 10.45 0 015.46 0c2.08-1.42 3-1.12 3-1.12.6 1.51.22 2.63.11 2.91.7.77 1.13 1.75 1.13 2.95 0 4.23-2.57 5.14-5 5.42.4.34.75 1.03.75 2.08v3.08c0 .29.18.63.73.53A11 11 0 0012 1.27z" />
    </svg>
);

const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
    </svg>
);

const RobotIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4 2 2 0 000-4zm0 2a2 2 0 110 4 2 2 0 010-4zm0 0V4m0 2h.01M6 12h.01M18 12h.01M7 16h10M7 20h10M6 20a2 2 0 11-4 0 2 2 0 014 0zM18 20a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const UsersCogIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 19l-2-2m0 0a2.5 2.5 0 10-4-3.5 2.5 2.5 0 004 3.5zM19 8a2 2 0 11-4 0 2 2 0 014 0zM5 8a2 2 0 11-4 0 2 2 0 014 0zM5 19l2-2m0 0a2.5 2.5 0 104 3.5 2.5 2.5 0 00-4-3.5z" />
    </svg>
);

const ChartPieIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>
);

const FileAltIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);

const features = [
    { icon: RobotIcon, title: 'Automated Evidence Collection', description: 'Deploy lightweight agents to automatically collect compliance evidence, saving hundreds of hours of manual work.' },
    { icon: UsersCogIcon, title: 'Centralized Auditor Management', description: 'A dedicated portal for consultancies to manage multiple clients, auditors, and audit timelines efficiently.' },
    { icon: ChartPieIcon, title: 'Real-time Dashboards', description: 'Gain instant visibility into compliance posture with intuitive dashboards that track progress and highlight gaps.' },
    { icon: FileAltIcon, title: 'One-Click Reporting', description: 'Generate comprehensive, audit-ready reports instantly, tailored to specific standards like ISO 27001 and PCI DSS.' },
];

const faqs: FAQItem[] = [
    { question: "Who is Policy Audit Pro for?", answer: "It's designed for both cybersecurity consultancies managing multiple clients and for end-customer organizations looking to streamline their internal compliance processes and evidence collection." },
    { question: "How are the agents deployed?", answer: "Our agents are lightweight and can be easily deployed across your infrastructure (servers, cloud environments, endpoints) using standard deployment tools. They are designed to have minimal performance impact." },
    { question: "Can we customize the audit controls and reporting?", answer: "Yes, the platform is highly customizable. You can tailor controls, evidence requirements, and report templates to fit specific client needs or internal policies." },
];

const PolicyAuditProPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="-mt-32">
            <section className="hero-section text-center bg-slate-900 text-white pt-52 pb-24 px-4">
                <AnimatedSection>
                    <h1 className="text-4xl md:text-5xl font-bold">Policy Audit Pro</h1>
                    <p className="text-lg md:text-xl text-slate-300 mt-4 max-w-3xl mx-auto">The ultimate compliance automation tool for consultancies and customers.</p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="http://demo.cybergaar.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-md transition-transform hover:scale-105 w-full sm:w-auto flex items-center justify-center">
                            <PlayIcon className="w-5 h-5 mr-2" />
                            Go To Demo
                        </a>
                        <a href="https://github.com/OmerRastgar/AI-Audit-Analyzer" target="_blank" rel="noopener noreferrer" className="border-2 border-slate-300 text-slate-300 font-bold py-3 px-6 rounded-full text-md transition-transform hover:scale-105 hover:bg-slate-300 hover:text-slate-900 w-full sm:w-auto flex items-center justify-center">
                            <GithubIcon className="w-5 h-5 mr-2" />
                            View on GitHub
                        </a>
                        <Link to="/products/policy-audit-pro#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-md transition-transform hover:scale-105 w-full sm:w-auto flex items-center justify-center">
                            <EnvelopeIcon className="w-5 h-5 mr-2" />
                            Contact Sales
                        </Link>
                    </div>
                </AnimatedSection>
            </section>

            <div className="container mx-auto py-20 px-4">
                <AnimatedSection className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Introducing Our Product</h2>
                    <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto bg-slate-200 rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={openModal}>
                        <img src="/images/product-demo-thumbnail.jpg" alt="Product demo video thumbnail" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                            <PlayIcon className="w-16 h-16 text-white" />
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Key Features</h2>
                </AnimatedSection>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <AnimatedSection key={index} className={`delay-${index * 100}`}>
                            <div className="text-center bg-slate-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col border border-slate-200 hover:border-blue-600">
                                <div className="mb-4 text-blue-600 mx-auto">
                                    <feature.icon className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-700 flex-grow">{feature.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
                    <div className="max-w-4xl mx-auto">
                        <FAQ items={faqs} />
                    </div>
                </AnimatedSection>
            </div>
            
            <section className="contact-section py-20 bg-slate-100" id="contact">
                <div className="container mx-auto px-4">
                    <ContactForm />
                </div>
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeModal}>
                    <div className="relative w-full max-w-4xl h-auto" onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeModal} className="absolute -top-12 right-0 text-white text-3xl">&times;</button>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe 
                                className="w-full h-full"
                                src="https://drive.google.com/file/d/1iGzjKX7MIYNpWX_s73UCoVW0fZpMwQSr/view?usp=drive_link" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PolicyAuditProPage;
