// Complete Integration Example for Animated Service and Case Study Cards
// Replace your existing sections in HomePage.tsx with this code

import React from 'react';
import { ServiceCard, CaseStudyCard, AnimatedSection } from '../components/AnimatedCards';

// Icon components
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

// Services data
const services = [
    {
        icon: <ShieldCheckIcon className="w-6 h-6 text-white" />,
        title: 'Compliance Audit',
        description: 'Navigate complex regulations with our expert compliance audit services. We specialize in ISO 27001, PCI DSS, SOC 2, and more.',
        tags: ['ISO 27001', 'PCI DSS', 'SOC 2'],
        animationDirection: 'left' as const,
        delay: 100
    },
    {
        icon: <BugAntIcon className="w-6 h-6 text-white" />,
        title: 'Penetration Testing',
        description: 'Identify vulnerabilities before attackers do with comprehensive penetration testing services. We simulate real-world attacks to strengthen your defenses.',
        tags: ['Web App Testing', 'Network Security', 'Social Engineering'],
        animationDirection: 'bottom' as const,
        delay: 200
    },
    {
        icon: <ShieldExclamationIcon className="w-6 h-6 text-white" />,
        title: 'Vulnerability Assessment',
        description: 'Proactively scan and identify security weaknesses in your infrastructure. Our comprehensive assessments help prioritize remediation efforts.',
        tags: ['Automated Scanning', 'Manual Testing', 'Risk Analysis'],
        animationDirection: 'right' as const,
        delay: 300
    }
];

// Case studies data
const caseStudies = [
    {
        title: 'Financial Services',
        description: 'Implemented comprehensive cybersecurity framework for a leading financial institution, achieving 99.9% uptime and zero security breaches.',
        tags: ['SOC 2', 'PCI DSS', 'ISO 27001'],
        companyInitials: 'FS',
        animationDirection: 'right' as const,
        delay: 100
    },
    {
        title: 'Healthcare Provider',
        description: 'Secured patient data and medical records for a regional healthcare network, ensuring HIPAA compliance and improving data protection by 85%.',
        tags: ['HIPAA', 'HITRUST', 'NIST'],
        companyInitials: 'HC',
        animationDirection: 'left' as const,
        delay: 200
    },
    {
        title: 'E-commerce Platform',
        description: 'Protected customer payment data and personal information for a global e-commerce platform serving 10M+ users worldwide.',
        tags: ['PCI DSS', 'GDPR', 'CCPA'],
        companyInitials: 'EC',
        animationDirection: 'bottom' as const,
        delay: 300
    }
];

// Animated Sections Component
const AnimatedSections: React.FC = () => {
    return (
        <>
            {/* Services Section */}
            <AnimatedSection title="Our Services">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            tags={service.tags}
                            animationDirection={service.animationDirection}
                            delay={service.delay}
                        />
                    ))}
                </div>
            </AnimatedSection>

            {/* Case Studies Section */}
            <AnimatedSection title="Case Studies">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((caseStudy, index) => (
                        <CaseStudyCard
                            key={caseStudy.title}
                            title={caseStudy.title}
                            description={caseStudy.description}
                            tags={caseStudy.tags}
                            companyInitials={caseStudy.companyInitials}
                            animationDirection={caseStudy.animationDirection}
                            delay={caseStudy.delay}
                        />
                    ))}
                </div>
            </AnimatedSection>
        </>
    );
};

export default AnimatedSections;
