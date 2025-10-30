import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo = () => (
    <div className="flex items-center font-bold font-aeonik text-xl text-slate-300">
         <div className="inline-flex items-center justify-center h-[28px] w-[28px] bg-slate-300 rounded-md mr-2">
            <span className="text-slate-900 font-bold font-aeonik text-xl leading-none">C</span>
        </div>
        <span>yberGaar</span>
    </div>
);

const Footer: React.FC = () => {
    const location = useLocation();
    
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* About Section */}
                    <div className="md:col-span-2">
                        <div className="mb-4">
                            <Logo />
                        </div>
                        <p className="text-slate-400">Your trusted partner in navigating the complexities of cybersecurity and compliance.</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><i className="fab fa-instagram text-xl"></i></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><i className="fab fa-xing text-xl"></i></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><i className="fab fa-linkedin-in text-xl"></i></a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
                            <li><Link to={`${location.pathname}#contact`} className="text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
                        <ul className="space-y-2">
                            <li><Link to="/services/compliance-audit" className="text-slate-400 hover:text-white transition-colors">Compliance Audit</Link></li>
                            <li><Link to="/services/security-testing" className="text-slate-400 hover:text-white transition-colors">Security Testing</Link></li>
                            <li><Link to="/services/vulnerability-assessment" className="text-slate-400 hover:text-white transition-colors">Vulnerability Assessment</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Products</h4>
                        <ul className="space-y-2">
                            <li><Link to="/products/policy-audit-pro" className="text-slate-400 hover:text-white transition-colors">Policy Audit Pro</Link></li>
                             <li><Link to="/products/ai-chat" className="text-slate-400 hover:text-white transition-colors">AI Chat</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
                    <p>&copy; {new Date().getFullYear()} CyberGaar. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;