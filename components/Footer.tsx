import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GithubIcon } from './icons/GithubIcon';

const Logo = () => (
    <div className="flex items-center">
        <img src="/images/logo.png" alt="CyberGaar Logo" className="h-8 w-auto" />
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
                            <a href="https://www.instagram.com/cybergaar/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.667 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.667-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.141 0-3.506.012-4.73.068-2.759.127-4.001 1.363-4.129 4.129-.056 1.224-.068 1.588-.068 4.73s.012 3.506.068 4.73c.127 2.759 1.363 4.001 4.129 4.129 1.224.056 1.588.068 4.73.068s3.506-.012 4.73-.068c2.759-.127 4.001-1.363 4.129-4.129.056-1.224.068-1.588.068-4.73s-.012-3.506-.068-4.73c-.127-2.759-1.363-4.001-4.129-4.129-1.224-.056-1.588-.068-4.73-.068zm0 2.882c-1.957 0-3.521 1.564-3.521 3.521s1.564 3.521 3.521 3.521 3.521-1.564 3.521-3.521-1.564-3.521-3.521-3.521zm0 5.602c-1.157 0-2.081-.924-2.081-2.081s.924-2.081 2.081-2.081 2.081.924 2.081 2.081-.924 2.081-2.081 2.081zm4.965-5.857c-.62 0-1.12.5-1.12 1.12s.5 1.12 1.12 1.12 1.12-.5 1.12-1.12-.5-1.12-1.12-1.12z"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/cybergaar" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 012.063-2.065 2.064 2.064 0 012.063 2.065c0 1.14-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                                </svg>
                            </a>
                            <a href="https://github.com/CyberGaar-ops" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
								<GithubIcon className="h-6 w-6" />
                            </a>
							<a href="https://huggingface.co/CyberGaar/CyberSecurity" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
								<img src="/images/hugging-face (1).png" alt="Hugging Face" className="h-6 w-6" />
							</a>
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