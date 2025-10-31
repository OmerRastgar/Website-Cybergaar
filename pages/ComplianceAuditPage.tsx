import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import ClientsCarousel from '../components/ClientsCarousel';
import type { TimelineStep, FAQItem } from '../types';

const timelineSteps: TimelineStep[] = [
    { title: 'Scoping & Planning', description: 'We work with you to define the audit scope based on your specific compliance needs (ISO 27001, PCI DSS, SOC 2, etc.).' },
    { title: 'Evidence Gathering', description: 'Our auditors collect and review documentation, policies, and system configurations.' },
    { title: 'On-site/Remote Assessment', description: 'We conduct interviews and technical tests to verify that controls are implemented effectively.' },
    { title: 'Reporting & Remediation', description: 'You receive a detailed report with findings, risk levels, and actionable recommendations for remediation.' },
    { title: 'Certification Support', description: 'We guide you through the final steps to achieve and maintain your certification.' },
];

const faqs: FAQItem[] = [
    { question: "What is the difference between an audit and an assessment?", answer: "An audit is a formal, structured evaluation against a specific standard (like ISO 27001) often leading to certification. An assessment is typically less formal and broader, aimed at identifying risks and security posture without necessarily adhering to a single framework." },
    { question: "How long does a compliance audit take?", answer: "The duration varies depending on the scope, the size of your organization, and the specific standard. A typical audit can take anywhere from a few weeks to several months." },
    { question: "What do we need to prepare for an audit?", answer: "Preparation involves gathering all relevant documentation, such as security policies, procedures, network diagrams, and access control records. We provide a detailed checklist to help you prepare." },
];

const ComplianceAuditPage: React.FC = () => {
    return (
        <div className="-mt-32">
            <section className="hero-section text-center bg-slate-900 text-white py-20 px-4">
                <AnimatedSection>
                    <div className="pt-32">
                        <h1 className="text-4xl md:text-5xl font-bold">Compliance Audits</h1>
                        <p className="text-lg md:text-xl text-slate-300 mt-2">Achieve and Maintain Regulatory Compliance with Confidence</p>
                    </div>
                </AnimatedSection>
            </section>

            <div className="container mx-auto py-20 px-4">
                <AnimatedSection className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-20">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Navigate Complexity with Ease</h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-4">CyberGaar specializes in helping organizations meet rigorous industry standards like ISO 27001, PCI DSS, NIST, and SOC 2. Our comprehensive audits identify gaps, reduce risk, and provide a clear roadmap to certification and ongoing compliance.</p>
                            <p className="text-lg text-slate-700 leading-relaxed">We understand that compliance isn't just about checking boxes; it's about building a robust security framework that protects your data and your reputation.</p>
                        </div>
                        <div>
                           <img src="/images/compliance-audit.jpg" alt="Compliance Audit" className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Audit Process</h2>
                </AnimatedSection>
                <div className="relative mb-20">
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-300 -translate-x-1/2 hidden sm:block"></div>
                    {timelineSteps.map((step, index) => (
                        <div key={index} className="relative sm:flex sm:items-center mb-12 group">
                             <div className={`sm:w-1/2 ${index % 2 !== 0 ? 'sm:order-2 sm:pl-8' : 'sm:pr-8 sm:text-right'}`}>
                                <AnimatedSection>
                                    <div className="bg-white p-6 rounded-lg shadow-md mb-4 sm:mb-0 border border-slate-200">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-700">{step.description}</p>
                                    </div>
                                </AnimatedSection>
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ring-8 ring-white group-hover:bg-blue-700 transition-colors">
                                {index + 1}
                            </div>
                             <div className={`sm:w-1/2 ${index % 2 !== 0 ? 'sm:order-1 sm:pr-8' : 'sm:pl-8'}`}></div>
                        </div>
                    ))}
                </div>

                <AnimatedSection className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-20">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Commitment to Excellence</h2>
                            <p className="text-lg text-slate-700 leading-relaxed">We are dedicated to providing the highest quality of service and delivering results that exceed expectations. Our team of certified professionals is passionate about security and committed to helping our clients achieve their compliance goals.</p>
                        </div>
                        <div className="order-1 md:order-2">
                            <img src="/images/cybergaar-office.jpg" alt="CyberGaar Office" className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="py-20">
                    <ClientsCarousel />
                </AnimatedSection>

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
        </div>
    );
};

export default ComplianceAuditPage;
