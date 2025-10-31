import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Timeline from '../components/Timeline'; // Import the new Timeline component
import type { TimelineStep, FAQItem } from '../types';
import '../styles/timeline.css';
import Meta from '../components/Meta';

const timelineSteps: TimelineStep[] = [
    { title: 'Mission Scoping & Planning', description: 'We work with you to define the mission parameters based on your specific compliance needs (ISO 27001, PCI DSS, SOC 2, etc.).' },
    { title: 'Evidence Acquisition', description: 'Our mission specialists collect and review all relevant documentation, policies, and system configurations.' },
    { title: 'Remote Systems Analysis', description: 'We conduct remote interviews and technical scans to verify that all required controls are implemented effectively.' },
    { title: 'After-Action Report & Remediation', description: 'You receive a detailed after-action report with findings, threat levels, and actionable recommendations for remediation.' },
    { title: 'Certification & Continuous Monitoring', description: 'We guide you through the final steps to achieve certification and provide ongoing monitoring to ensure continued compliance.' },
];

const faqs: FAQItem[] = [
    { question: "What is the difference between a scan and an assessment?", answer: "A scan is a formal, structured evaluation against a specific regulatory framework (like ISO 27001), often leading to certification. An assessment is a broader, less formal evaluation aimed at identifying and mitigating risks without necessarily adhering to a single framework." },
    { question: "How long does a compliance scan take?", answer: "The duration of a scan varies depending on the mission scope, the size of your organization, and the specific regulations. A typical scan can take anywhere from a few weeks to several months." },
    { question: "What do we need to prepare for a scan?", answer: "Preparation involves compiling all relevant data, including security protocols, procedural documents, network architecture diagrams, and access control logs. We provide a detailed pre-flight checklist to help you prepare." },
];

const ComplianceAuditPage: React.FC = () => {
    return (
        <>
            <Meta
                title="Compliance Audits - ISO 27001, PCI DSS, SOC 2 | CyberGaar"
                description="Navigate complex regulations with CyberGaar's expert compliance audit services. We specialize in ISO 27001, PCI DSS, SOC 2, and more to ensure your organization meets all required standards."
            />
            <div className="-mt-32">
                <section className="hero-section text-center bg-slate-900 text-white py-20 px-4">
                    <AnimatedSection>
                        <div className="pt-32">
                            <h1 className="text-4xl md:text-5xl font-bold">Compliance Audit</h1>
                            <p className="text-lg md:text-xl text-slate-300 mt-2">Navigating the Regulatory Cosmos with Precision</p>
                        </div>
                    </AnimatedSection>
                </section>

                <div className="container mx-auto py-20 px-4">
                    <AnimatedSection className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-20">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Navigating Complexity with Ease</h2>
                                <p className="text-lg text-slate-700 leading-relaxed mb-4">CyberGaar specializes in helping organizations meet rigorous industry standards like ISO 27001, PCI DSS, NIST, and SOC 2. Our comprehensive scans identify gaps, reduce risk, and provide a clear roadmap to certification and ongoing compliance.</p>
                                <p className="text-lg text-slate-700 leading-relaxed">We understand that compliance isn't just about checking boxes; it's about building a robust security framework that protects your data and your reputation.</p>
                            </div>
                            <div>
                               <img src="/images/compliance-audit.jpg" alt="Compliance Scan" className="w-full h-auto rounded-lg shadow-md" />
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Scan Protocol</h2>
                    </AnimatedSection>
                    
                    {/* Replace the old timeline code with the new Timeline component */}
                    <Timeline steps={timelineSteps} />

                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Mission-Critical Briefings</h2>
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
        </>
    );
};

export default ComplianceAuditPage;
