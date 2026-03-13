import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';
import Meta from '../components/Meta';

const ShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.744c0 1.517.283 2.968.8 4.298a12.01 12.01 0 002.508 3.75 12.01 12.01 0 003.5 2.508c1.33.517 2.781.8 4.298.8 1.517 0 2.968-.283 4.298-.8a12.01 12.01 0 003.5-2.508 12.01 12.01 0 002.508-3.75c.517-1.33.8-2.781.8-4.298 0-1.309-.21-2.568-.598-3.744A11.959 11.959 0 0112 2.714z" />
    </svg>
);

const EyeSlashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
);

const LockIcons: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 00-2.25 2.25z" />
    </svg>
);

const BeakerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.607a2 2 0 01-.586 1.414l-4.22 4.221a8 8 0 002.613 13.36c.398.128.825.194 1.254.194h6.378c.429 0 .856-.066 1.254-.194a8 8 0 002.613-13.36l-4.22-4.221a2 2 0 01-.586-1.414V3.104M9.75 3.104c0-.555.448-1.004 1-1.004h2.5c.552 0 1 .449 1 1.004M9.75 3.104h4.5M4.5 9.75h15" />
    </svg>
);

const CpuChipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m1.5 7.5H3m7.5 6V21m3.75 3v-1.5m4.5-4.5H21m-1.5-7.5H21M15.75 3v1.5M12 12.75a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM15.75 15.75h.008v.008h-.008v-.008zm0-6h.008v.008h-.008V9.75zm-7.5 0h.008v.008H8.25V9.75zm0 6h.008v.008H8.25v-.008zM6.75 6.75h10.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V9a2.25 2.25 0 012.25-2.25z" />
    </svg>
);

const CubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
);

const pricingData = [
    {
        title: 'Starter',
        price: '$1',
        monthlyPrice: '$7',
        features: ['Standard Security', 'Basic Privacy', 'Single Region'],
        gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
        title: 'ID Tier',
        price: '$2',
        monthlyPrice: '$18',
        features: ['Enhanced Security', 'IP Masking', 'Multi-Region Testing', 'Priority Support'],
        gradient: 'from-purple-500/10 to-blue-500/10',
        popular: true
    },
    {
        title: 'Premium',
        price: '$4',
        monthlyPrice: '$36',
        features: ['Ultimate Security', 'Anti-Fingerprinting', 'Zero-Day Protection', 'Centralized Admin Control'],
        gradient: 'from-amber-500/10 to-red-500/10'
    }
];

const features = [
    {
        title: "Enhanced Security & Malware Protection",
        icon: ShieldIcon,
        description: "Browser execution in an isolated environment ensures malware stays on the remote server, protecting local files from zero-day exploits with disposable, stateless sessions."
    },
    {
        title: "Privacy & Anonymity",
        icon: EyeSlashIcon,
        description: "Mask your digital fingerprint with IP masking, anti-fingerprinting using standardized hardware profiles, and automatic stripping of tracking pixels."
    },
    {
        title: "Protection Against Phishing",
        icon: LockIcons,
        description: "Open suspicious links in read-only mode to prevent credential theft and unauthorized script execution, keeping your session cookies safe."
    },
    {
        title: "Safe Testing & Research",
        icon: BeakerIcon,
        description: "Ideal for researchers with multi-region testing capabilities and the ability to run legacy browsers or different OS builds without local installation."
    },
    {
        title: "Resource Management",
        icon: CpuChipIcon,
        description: "Offload heavy JavaScript rendering and high-resolution media to cloud servers, keeping your local device cool and memory free for other applications."
    },
    {
        title: "Centralized Data Control",
        icon: CubeIcon,
        description: "Enterprise-grade DLP ensures sensitive data never leaves the cloud with configurable restrictions on copy/paste or downloading functions."
    }
];

const VirtualBrowserPage: React.FC = () => {
    return (
        <>
            <Meta
                title="Virtual Browsers - Secure & Private Browsing | CyberGaar"
                description="Harness the power of isolated browsing with CyberGaar's Virtual Browsers. Enhanced security, complete privacy, and elite resource management."
            />
            <div className="-mt-32 bg-black text-white">
                <section className="hero-section text-center py-32 px-4 bg-slate-900 text-white overflow-hidden relative" style={{ backgroundColor: '#0f172a', color: 'white', marginTop: '125px' }}>
                     <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-[120px]"></div>
                    </div>

                    <AnimatedSection>
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
                            Virtual Browsers
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mt-4 max-w-3xl mx-auto leading-relaxed">
                            Securing your digital workspace with isolated, cloud-powered browsing environments. 
                            The ultimate protection for teams and individuals.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                             <a href="#pricing" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-full text-md transition-all hover:scale-105 shadow-lg shadow-blue-500/20">
                                View Pricing
                            </a>
                        </div>
                    </AnimatedSection>
                </section>

                <div className="container mx-auto py-24 px-4">
                    <AnimatedSection className="mb-24" id="overview">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Isolated. Secure. Performant.</h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Traditional browsers execute code directly on your machine. CyberGaar's Virtual Browsers offload this risk to our secure, isolated containers, delivering only safe visual data to your screen.
                                </p>
                                <ul className="space-y-4">
                                    {[ "Zero local footprint", "Enterprise-grade encryption", "Instant-wipe sessions" ].map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-300">
                                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                    <img 
                                        src="/images/virtual-browser-hero.png" 
                                        alt="CyberGaar Virtual Browser" 
                                        className="relative rounded-xl border border-white/10 shadow-2xl transition duration-500 group-hover:scale-[1.01]" 
                                    />
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection id="pricing" className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Tiers</h2>
                        <p className="text-gray-400">Scale your secure browsing as your needs grow.</p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8 mb-32">
                        {pricingData.map((tier, index) => (
                            <AnimatedSection key={index} className={`delay-${index * 100}`}>
                                <div className={`relative h-full flex flex-col p-8 rounded-2xl border ${tier.popular ? 'border-blue-500 bg-slate-900/80' : 'border-white/10 bg-slate-900/40'} backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 group overflow-hidden`}>
                                    {tier.popular && (
                                        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                                            Recommended
                                        </div>
                                    )}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                                        <div className="mb-6">
                                            <div className="text-5xl font-bold text-white mb-1">{tier.price}</div>
                                            <div className="text-slate-400 text-sm">Daily Subscription</div>
                                        </div>
                                        <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/5">
                                             <div className="text-xl font-semibold text-blue-400">{tier.monthlyPrice} / Month</div>
                                             <div className="text-slate-500 text-xs uppercase tracking-widest font-bold">Standard Usage</div>
                                        </div>
                                        <ul className="space-y-4 mb-10 text-gray-300 text-sm">
                                            {tier.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-start">
                                                    <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link 
                                            to={`/checkout?plan=${encodeURIComponent(tier.title)}&price=${encodeURIComponent(tier.price)}`} 
                                            className="block w-full"
                                        >
                                            <button className={`w-full py-3 rounded-full font-bold transition-all ${tier.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                                                Select Plan
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Ecosystem Advantages</h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                        {features.map((feature, index) => (
                            <AnimatedSection key={index} className={`delay-${index * 100}`}>
                                <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-blue-500/50 hover:bg-slate-900/60 transition-all duration-300 h-full flex flex-col group">
                                    <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 text-blue-400">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
                
                <section className="contact-section py-24 bg-gradient-to-b from-black to-slate-950 text-white" id="contact">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Enterprise Solutions</h2>
                                <p className="text-gray-400">Need specific configurations or higher volume? Let's discuss your requirements.</p>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default VirtualBrowserPage;
