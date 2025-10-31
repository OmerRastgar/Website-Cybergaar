import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import type { FAQItem } from '../types';

const features = [
    {
        icon: 'fas fa-robot',
        title: 'Automated Evidence Collection',
        description: 'Deploy lightweight agents to automatically collect compliance evidence, saving hundreds of hours of manual work.'
    },
    {
        icon: 'fas fa-users-cog',
        title: 'Centralized Auditor Management',
        description: 'A dedicated portal for consultancies to manage multiple clients, auditors, and audit timelines efficiently.'
    },
    {
        icon: 'fas fa-chart-pie',
        title: 'Real-time Dashboards',
        description: 'Gain instant visibility into compliance posture with intuitive dashboards that track progress and highlight gaps.'
    },
    {
        icon: 'fas fa-file-alt',
        title: 'One-Click Reporting',
        description: 'Generate comprehensive, audit-ready reports instantly, tailored to specific standards like ISO 27001 and PCI DSS.'
    },
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
                        <a href="http://demo.cybergaar.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-md transition-transform hover:scale-105 w-full sm:w-auto">
                            <i className="fas fa-play mr-2"></i>View Demo
                        </a>
                        <a href="https://github.com/OmerRastgar/AI-Audit-Analyzer" target="_blank" rel="noopener noreferrer" className="border-2 border-slate-300 text-slate-300 font-bold py-3 px-6 rounded-full text-md transition-transform hover:scale-105 hover:bg-slate-300 hover:text-slate-900 w-full sm:w-auto">
                            <i className="fab fa-github mr-2"></i>View on GitHub
                        </a>
                        <Link to="/products/policy-audit-pro#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-md transition-transform hover:scale-105 w-full sm:w-auto">
                            <i className="fas fa-envelope mr-2"></i>Contact Sales
                        </Link>
                    </div>
                </AnimatedSection>
            </section>

            <div className="container mx-auto py-20 px-4">
                <AnimatedSection className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Introducing Our Product</h2>
                    <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto bg-slate-200 rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={openModal}>
                        <img src="/images/product-demo-thumbnail.jpg" alt="Product demo video thumbnail" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <i className="fas fa-play text-white text-6xl"></i>
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
                                    <i className={`${feature.icon} text-5xl`}></i>
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
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
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
