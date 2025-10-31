import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Timeline from '../components/Timeline'; // Import the new Timeline component
import type { TimelineStep, FAQItem } from '../types';

const timelineSteps: TimelineStep[] = [
    { title: 'Target Reconnaissance', description: 'We map your digital footprint to identify potential vectors of attack, gathering intelligence to inform our strategy.' },
    { title: 'System Scanning & Enumeration', description: 'Automated and manual scans map your network topology, identifying open ports, active services, and potential system weaknesses.' },
    { title: 'Controlled Exploitation', description: 'Our ethical hackers attempt to breach identified vulnerabilities in a controlled, non-disruptive manner to confirm their strategic impact.' },
    { title: 'Post-Breach Analysis', description: 'We assess the potential impact of a successful breach, including data exfiltration, lateral movement, and system compromise.' },
    { title: 'After-Action Debriefing', description: 'A comprehensive report is delivered, detailing all findings, their threat levels, and clear, actionable intelligence for remediation.' },
];

const faqs: FAQItem[] = [
    { question: "What is Penetration Testing?", answer: "Penetration Testing is a simulated hostile engagement against your systems to identify exploitable vulnerabilities. It reveals how an adversary could compromise your defenses and provides the intelligence needed to neutralize those threats." },
    { question: "How does Penetration Testing differ from a Vulnerability Assessment?", answer: "A Vulnerability Assessment identifies and catalogs potential vulnerabilities. Penetration Testing goes a step further by actively attempting to exploit those vulnerabilities to determine the real-world impact of an attack." },
    { question: "Will this engagement disrupt our core operations?", answer: "We adhere to strict rules of engagement to ensure our analysis is non-disruptive. We coordinate with your team to schedule operations during low-impact periods and utilize controlled, safe techniques."
    },
];

const SecurityTestingPage: React.FC = () => {
    return (
        <div className="-mt-32">
            <section className="hero-section text-center py-20 px-4" style={{ backgroundColor: '#1a202c', color: 'white' }}>
                <AnimatedSection>
                    <div className="pt-32">
                        <h1 className="text-4xl md:text-5xl font-bold">Penetration Testing</h1>
                        <p className="text-lg md:text-xl mt-2">Simulating Attacks to Fortify Your Defenses</p>
                    </div>
                </AnimatedSection>
            </section>

            <div className="container mx-auto py-20 px-4">
                <AnimatedSection className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-20">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                         <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-bold mb-4">Penetration Testing</h2>
                            <p className="text-lg leading-relaxed mb-4">Our Penetration Testing simulates real-world attack scenarios to provide a true measure of your defensive posture. From network and web application exploitation to social engineering, we identify critical weaknesses that automated tools cannot detect.</p>
                            <p className="text-lg leading-relaxed">By proactively neutralizing vulnerabilities, you can protect your critical assets, maintain operational integrity, and prevent catastrophic system breaches.</p>
                        </div>
                        <div className="order-1 md:order-2">
                           <img src="/images/security-testing.jpg" alt="Penetration Testing" className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center mb-12">Our Engagement Protocol</h2>
                </AnimatedSection>
                
                {/* Replace the old timeline code with the new Timeline component */}
                <Timeline steps={timelineSteps} />

                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center mb-12">Engagement Briefings</h2>
                    <div className="max-w-4xl mx-auto">
                        <FAQ items={faqs} />
                    </div>
                </AnimatedSection>
            </div>
            
            <section className="contact-section py-20" id="contact">
                <div className="container mx-auto px-4">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default SecurityTestingPage;
