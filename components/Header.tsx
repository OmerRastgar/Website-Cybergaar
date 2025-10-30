import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Logo = () => (
    <div className="flex items-center font-bold font-aeonik text-xl text-slate-900">
        <div className="inline-flex items-center justify-center h-[28px] w-[28px] bg-slate-900 rounded-md mr-2">
            <span className="text-slate-100 font-bold font-aeonik text-xl leading-none">C</span>
        </div>
        <span>yberGaar</span>
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

    const activeLinkClass = "text-blue-600";
    const inactiveLinkClass = "text-slate-900 hover:text-blue-600 transition-colors";
    
    const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
        isActive ? activeLinkClass : inactiveLinkClass;

    const navItems = (isMobile = false) => (
        <>
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/about" className={navLinkClasses}>About</NavLink>
            
            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
                <button onClick={() => setServicesOpen(!servicesOpen)} className={`${inactiveLinkClass} flex items-center w-full justify-center`}>
                    Services <i className={`fas fa-chevron-down ml-2 text-xs transition-transform ${servicesOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {servicesOpen && (
                    <div className={isMobile ? "pt-2 flex flex-col items-center space-y-2" : "absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-md shadow-lg py-2 z-10 border border-slate-200"}>
                        <Link to="/services/compliance-audit" className={isMobile ? "text-slate-600 hover:text-blue-600" : "block px-4 py-2 text-slate-700 hover:bg-slate-100 w-full text-left"}>Compliance Audit</Link>
                        <Link to="/services/security-testing" className={isMobile ? "text-slate-600 hover:text-blue-600" : "block px-4 py-2 text-slate-700 hover:bg-slate-100 w-full text-left"}>Security Testing</Link>
                        <Link to="/services/vulnerability-assessment" className={isMobile ? "text-slate-600 hover:text-blue-600" : "block px-4 py-2 text-slate-700 hover:bg-slate-100 w-full text-left"}>Vulnerability Assessment</Link>
                    </div>
                )}
            </div>

            {/* Products Dropdown */}
            <div className="relative" ref={productsDropdownRef}>
                <button onClick={() => setProductsOpen(!productsOpen)} className={`${inactiveLinkClass} flex items-center w-full justify-center`}>
                    Products <i className={`fas fa-chevron-down ml-2 text-xs transition-transform ${productsOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {productsOpen && (
                    <div className={isMobile ? "pt-2 flex flex-col items-center space-y-2" : "absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-md shadow-lg py-2 z-10 border border-slate-200"}>
                        <Link to="/products/policy-audit-pro" className={isMobile ? "text-slate-600 hover:text-blue-600" : "block px-4 py-2 text-slate-700 hover:bg-slate-100 w-full text-left"}>Policy Audit Pro</Link>
                        <Link to="/products/ai-chat" className={isMobile ? "text-slate-600 hover:text-blue-600" : "block px-4 py-2 text-slate-700 hover:bg-slate-100 w-full text-left"}>AI Chat</Link>
                    </div>
                )}
            </div>
            
            <NavLink to="/blog" className={navLinkClasses}>Blog</NavLink>
        </>
    );

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
            <div className="relative bg-slate-100/50 backdrop-blur-lg rounded-full shadow-lg h-16 grid grid-cols-3 items-center px-6">
                
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
                <div className="justify-self-end flex items-center">
                    <div className="hidden lg:block">
                        <Link to={`${location.pathname}#contact`} className="border border-slate-900 text-slate-900 font-bold py-2 px-5 rounded-full text-sm transition-all hover:scale-105 hover:bg-slate-900 hover:text-white">
                            Get in Touch
                        </Link>
                    </div>

                    <div className="lg:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900 focus:outline-none">
                            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="lg:hidden mt-2 bg-slate-100/95 backdrop-blur-md rounded-xl shadow-lg">
                    <nav className="flex flex-col items-center space-y-4 py-6 text-md font-medium">
                        {navItems(true)}
                        <Link to={`${location.pathname}#contact`} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-transform hover:scale-105">
                            Get in Touch
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;