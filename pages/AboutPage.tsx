import React from 'react';
import type { TeamMember, Stat } from '../types';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';

const team: TeamMember[] = [
    { name: 'Omer Rastgar', role: 'Chief Technology Officer', description: 'Conducted audits in highly regulated industries, including FinTech and iGaming.', linkedin: 'https://www.linkedin.com/in/omer-rastgar/' },
    { name: 'Muhammad Usama Iqbal', role: 'Chief Executive Officer', description: 'Over 7 years of experience with leading audit firms.', linkedin: 'https://pk.linkedin.com/in/muhammad-usama-iqbal' },
    { name: 'Taimoor Ahmed', role: 'Chief Operating Officer', description: 'Over 7 years of experience with CRM and ERP solutions.', linkedin: 'https://www.linkedin.com/in/taimoor-ahmed-cybersecurity/' },
];

const stats: Stat[] = [
    { value: '500+', label: 'Successful Audits' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Security Monitoring' },
    { value: '50+', label: 'Domains' },
];

const AboutPage: React.FC = () => {
    return (
        <div className="-mt-32">
            <section className="hero-section text-center bg-slate-900 text-white py-20 px-4">
                <div className="container mx-auto relative z-10 pt-32">
                    <h1 className="text-4xl md:text-5xl font-bold">About CyberGaar</h1>
                    <p className="text-lg md:text-xl text-slate-300 mt-2">Leading the Way in Cybersecurity Excellence</p>
                </div>
            </section>

            <div className="container mx-auto py-20 px-4">
                <AnimatedSection className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-20">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                            <p className="text-lg text-slate-700 leading-relaxed">At CyberGaar, we go beyond compliance into true security. We help businesses of all sizes protect against evolving cyber threats while ensuring compliance with ISO 27001, PCI DSS, NIST, SOC 2, and other standards. Specializing in banking, fintech, and iGaming, we provide gap assessments, compliance audits, cloud security reviews, and ISMS implementations, turning security into a strategic advantage.</p>
                        </div>
                        <div className="order-1 md:order-2">
                            <img src="https://picsum.photos/id/10/800/600" alt="CyberGaar Office" className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Leadership Team</h2>
                </AnimatedSection>
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {team.map((member, index) => (
                         <AnimatedSection key={member.name} className={`card bg-white rounded-lg shadow-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2 delay-${index * 200} border border-slate-200 hover:border-blue-600`}>
                            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                            <p className="text-slate-700 mb-4">{member.role}</p>
                            <p className="text-slate-700 flex-grow">{member.description}</p>
                            <div className="mt-4">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-2xl">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <AnimatedSection key={stat.label} className={`stats-card bg-slate-900 text-white text-center p-6 rounded-lg delay-${index * 100}`}>
                            <div className="text-4xl font-bold">{stat.value}</div>
                            <p className="text-slate-300 mt-1">{stat.label}</p>
                        </AnimatedSection>
                    ))}
                </div>
            </div>

             <section className="contact-section py-20 bg-slate-100" id="contact">
                <div className="container mx-auto px-4">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default AboutPage;