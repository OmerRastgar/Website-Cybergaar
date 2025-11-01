import React from 'react';
import type { TeamMember } from '../types';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import AnimatedCounter from '../components/AnimatedCounter';
import Meta from '../components/Meta';

const team: TeamMember[] = [
    { name: 'Omer Rastgar', role: 'Chief Technical  Officer', description: 'Expert in designing and auditing secure systems for highly regulated industries like FinTech and iGaming.', linkedin: 'https://www.linkedin.com/in/omer-rastgar/' },
    { name: 'Muhammad Usama Iqbal', role: 'Chief Executive Officer', description: 'Over 7 years of experience leading security missions with top-tier audit firms.', linkedin: 'https://pk.linkedin.com/in/muhammad-usama-iqbal' },
    { name: 'Taimoor Ahmed', role: 'Chief Operation Officer', description: 'Specializes in the strategic deployment of enterprise-wide security solutions.', linkedin: 'https://www.linkedin.com/in/taimoor-ahmed-cybersecurity/' },
];

const stats = [
    { end: 500, suffix: '+', label: 'Missions Completed' },
    { end: 98, suffix: '%', label: 'Mission Success Rate' },
    { value: '24/7', label: 'Threat Overwatch' },
    { end: 50, suffix: '+', label: 'Sectors Secured' },
];

const LinkedInIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 012.063-2.065 2.064 2.064 0 012.063 2.065c0 1.14-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
    </svg>
);

const AboutPage: React.FC = () => {
    return (
        <>
            <Meta
                title="About CyberGaar - Our Mission and Team"
                description="Learn about CyberGaar's mission to secure cyberspace and meet the experienced team of cybersecurity experts leading our operations."
            />
            <div className="-mt-32">
                <section className="hero-section text-center bg-slate-900 text-white py-20 px-4">
                    <div className="container mx-auto relative z-10 pt-32">
                        <h1 className="text-4xl md:text-5xl font-bold">Our Mission Command</h1>
                        <p className="text-lg md:text-xl text-slate-300 mt-2">Charting the Course for Secure Cyberspace</p>
                    </div>
                </section>

                <div className="container mx-auto py-20 px-4">
                    <AnimatedSection className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-20">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Prime Directive</h2>
                                <p className="text-lg text-slate-700 leading-relaxed">Our mission is to go beyond mere compliance into true security. We navigate the uncharted sectors of your cyberspace, actively neutralizing the 'Threat-roids' that populate an evolving digital landscape. We are the specialists who chart secure pathways for high-stakes industries, transforming your security posture from a simple necessity into a mission-critical advantage.</p>
                            </div>
                            <div className="order-1 md:order-2">
                                <img src="/images/cybergaar-office.jpg" alt="CyberGaar Mission Command" className="w-full h-auto rounded-lg shadow-md" />
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Meet the Command Crew</h2>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {team.map((member, index) => (
                             <AnimatedSection key={member.name} className={`card bg-white rounded-lg shadow-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2 delay-${index * 200} border border-slate-200 hover:border-blue-600`}>
                                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                                <p className="text-slate-700 mb-4">{member.role}</p>
                                <p className="text-slate-700 flex-grow">{member.description}</p>
                                <div className="mt-4 flex justify-center">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                                        <LinkedInIcon />
                                    </a>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-20">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Commitment to Mission Success</h2>
                                <p className="text-lg text-slate-700 leading-relaxed">We are dedicated to providing the highest quality of service and delivering results that exceed expectations. Our team of certified mission specialists is passionate about security and committed to helping our clients achieve their compliance objectives.</p>
                            </div>
                            <div className="order-1 md:order-2">
                                <img src="/images/banner.png" alt="CyberGaar Mission Success" className="w-full h-auto rounded-lg shadow-md" />
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {stats.map((stat, index) => (
                            <AnimatedSection key={stat.label} className={`stats-card bg-slate-900 text-white text-center p-6 rounded-lg delay-${index * 100}`}>
                               { 'end' in stat ? (
                                    <AnimatedCounter
                                        end={stat.end!}
                                        suffix={stat.suffix}
                                        className="text-4xl font-bold"
                                    />
                                ) : (
                                    <div className="text-4xl font-bold">{stat.value}</div>
                                )}
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
        </>
    );
};

export default AboutPage;
