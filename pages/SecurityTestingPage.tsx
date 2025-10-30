import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import type { TimelineStep, FAQItem } from '../types';

const timelineSteps: TimelineStep[] = [
    { title: 'Reconnaissance', description: 'We gather information about your digital footprint to identify potential attack vectors.' },
    { title: 'Scanning & Enumeration', description: 'Automated and manual tools are used to map your networks and systems, identifying open ports, services, and vulnerabilities.' },
    { title: 'Exploitation', description: 'Our ethical hackers attempt to exploit identified vulnerabilities in a controlled, non-disruptive manner to confirm their impact.' },
    { title: 'Post-Exploitation', description: 'We assess the potential damage an attacker could cause after gaining initial access, such as data exfiltration or lateral movement.' },
    { title: 'Reporting & Debrief', description: 'A comprehensive report is delivered, detailing all findings, their risk levels, and clear, actionable steps for remediation.' },
];

const faqs: FAQItem[] = [
    { question: "What is penetration testing?", answer: "Penetration testing, or pen testing, is a simulated cyber attack against your computer system to check for exploitable vulnerabilities. It helps identify security weaknesses before malicious actors can." },
    { question: "How is security testing different from a vulnerability assessment?", answer: "A vulnerability assessment identifies and reports on vulnerabilities, while security testing (like pen testing) goes a step further by attempting to actively exploit those vulnerabilities to see what an attacker could achieve." },
    { question: "Will penetration testing disrupt our business operations?", answer: "We take great care to ensure our testing is non-disruptive. We work with you to schedule tests during low-traffic periods and use controlled, safe exploitation techniques." },
];

const SecurityTestingPage: React.FC = () => {
    return (
        <div className="-mt-32">
            <section className="hero-section text-center bg-slate-900 text-white py-20 px-4">
                <AnimatedSection>
                    <div className="pt-32">
                        <h1 className="text-4xl md:text-5xl font-bold">Security Testing</h1>
                        <p className="text-lg md:text-xl text-slate-300 mt-2">Uncover and Remediate Your Most Critical Vulnerabilities</p>
                    </div>
                </AnimatedSection>
            </section>

            <div className="container mx-auto py-20 px-4">
                <AnimatedSection className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-20">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                         <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Think Like an Attacker</h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-4">Our security testing services simulate real-world attacks to provide a true measure of your security posture. From network and web application penetration testing to social engineering, we identify weaknesses that automated tools often miss.</p>
                            <p className="text-lg text-slate-700 leading-relaxed">By proactively discovering and fixing vulnerabilities, you can protect your assets, maintain customer trust, and prevent costly data breaches.</p>
                        </div>
                        <div className="order-1 md:order-2">
                           <img src="https://picsum.photos/id/433/800/600" alt="Security Testing" className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Testing Methodology</h2>
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

export default SecurityTestingPage;