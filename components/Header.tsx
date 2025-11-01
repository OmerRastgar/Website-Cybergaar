import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Logo = () => (
    <div className="flex items-center">
        <img src="/images/logo.png" alt="CyberGaar Logo" className="h-8 w-auto" />
    </div>
);

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const location = useLocation();

    const servicesDropdownRef = useRef<HTMLDivElement>(null);
    const productsDropdownRef = useRef<HTMLDivElement>(null);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setServicesOpen(false);
        setProductsOpen(false);
    }, [location]);

    // Close desktop dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
                setServicesOpen(false);
            }
            if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target as Node)) {
                setProductsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // If we are on the homepage, smooth scroll
        if (location.pathname === '/') {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // If on mobile, also close the menu
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    };

    const activeLinkClass = "text-blue-600";
    const inactiveLinkClass = "hover:text-blue-600 transition-colors";
    
    const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
        isActive ? activeLinkClass : inactiveLinkClass;

    const navItems = (isMobile = false) => (
        <>
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/about" className={navLinkClasses}>About</NavLink>
            
            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
                <button onClick={() => setServicesOpen(!servicesOpen)} className={`${inactiveLinkClass} flex items-center w-full justify-center`}>
                    Services 
                    <svg className={`w-4 h-4 ml-2 transition-transform transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                {servicesOpen && (
                    <div className={isMobile ? "pt-2 flex flex-col items-center space-y-2" : "absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-md shadow-lg py-2 z-10 border border-slate-200"}>
                        <Link to="/compliance-audit" className={isMobile ? "hover:text-blue-600" : "block px-4 py-2 hover:bg-slate-100 w-full text-left"}>Compliance Audit</Link>
                        <Link to="/security-testing" className={isMobile ? "hover:text-blue-600" : "block px-4 py-2 hover:bg-slate-100 w-full text-left"}>Penetration Testing</Link>
                        <Link to="/vulnerability-assessment" className={isMobile ? "hover:text-blue-600" : "block px-4 py-2 hover:bg-slate-100 w-full text-left"}>Vulnerability Assessment</Link>
                    </div>
                )}
            </div>

            {/* Products Dropdown */}
            <div className="relative" ref={productsDropdownRef}>
                <button onClick={() => setProductsOpen(!productsOpen)} className={`${inactiveLinkClass} flex items-center w-full justify-center`}>
                    Products
                    <svg className={`w-4 h-4 ml-2 transition-transform transform ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                {productsOpen && (
                    <div className={isMobile ? "pt-2 flex flex-col items-center space-y-2" : "absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-md shadow-lg py-2 z-10 border border-slate-200"}>
                        <Link to="/policy-audit-pro" className={isMobile ? "hover:text-blue-600" : "block px-4 py-2 hover:bg-slate-100 w-full text-left"}>Policy Audit Pro</Link>
                        <Link to="/ai-chat" className={isMobile ? "hover:text-blue-600" : "block px-4 py-2 hover:bg-slate-100 w-full text-left"}>AI Chat</Link>
                    </div>
                )}
            </div>
            
            <NavLink to="/blog" className={navLinkClasses}>Blog</NavLink>
        </>
    );

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
            <div className="relative bg-slate-100/50 backdrop-blur-lg rounded-full shadow-lg h-16 grid grid-cols-2 lg:grid-cols-3 items-center px-6 text-slate-900">
                
                {/* Left: Logo */}
                <div className="justify-self-start">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>

                {/* Center: Desktop Navigation */}
                <nav className="hidden lg:flex justify-self-center items-center space-x-6 text-sm font-medium">
                    {navItems()}
                </nav>

                {/* Right: Get in Touch & Mobile Menu */}
                <div className="justify-self-end flex items-center col-start-2 lg:col-start-3">
                    <div className="hidden lg:block">
                        <Link 
                            to="/#contact" 
                            onClick={handleContactClick}
                            className="border border-slate-900 font-bold py-2 px-5 rounded-full text-sm transition-all hover:scale-105 hover:bg-slate-900 hover:text-white">
                            Contact 
                        </Link>
                    </div>

                    <div className="lg:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none" aria-label="Toggle mobile menu">
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="lg:hidden mt-2 bg-slate-100/95 backdrop-blur-md rounded-xl shadow-lg text-slate-900">
                    <nav className="flex flex-col items-center space-y-4 py-6 text-md font-medium">
                        {navItems(true)}
                        <Link 
                            to="/#contact"
                            onClick={handleContactClick}
                            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-transform hover:scale-105">
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
