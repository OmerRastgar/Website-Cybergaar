import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToAnchor from './components/ScrollToAnchor';
import CookieNotice from './components/CookieNotice';
import ErrorBoundary from './components/ErrorBoundary';
import Loader from './components/Loader';
import Meta from './components/Meta';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ComplianceAuditPage = lazy(() => import('./pages/ComplianceAuditPage'));
const SecurityTestingPage = lazy(() => import('./pages/SecurityTestingPage'));
const VulnerabilityAssessmentPage = lazy(() => import('./pages/VulnerabilityAssessmentPage'));
const PolicyAuditProPage = lazy(() => import('./pages/PolicyAuditProPage'));
const VirtualBrowserPage = lazy(() => import('./pages/VirtualBrowserPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));

const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const AnimationPage = lazy(() => import('./pages/AnimationPage'));

const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

// This component will conditionally render the header
const ConditionalHeader = () => {
    const location = useLocation();
    // Do not render the header on the animation page
    if (location.pathname === '/animation') {
        return null;
    }
    return <Header />;
}

// This component will conditionally render the footer
const ConditionalFooter = () => {
    const location = useLocation();
    // Do not render the footer on the homepage or animation page
    if (location.pathname === '/' || location.pathname === '/animation') {
        return null;
    }
    return <Footer />;
}

const App: React.FC = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Enforce a minimum loading time to prevent FOUC and allow assets to initialize
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds splash screen

        return () => clearTimeout(timer);
    }, []);

    return (
        <ErrorBoundary>
            {/* Always render Loader if loading, but keep it on top */}
            {isLoading && <Loader />}

            {/* Render main app content but hide it physically until loading is done */}
            <div style={{ display: isLoading ? 'none' : 'block', opacity: isLoading ? 0 : 1, transition: 'opacity 1s ease-in-out' }}>
                <Router>
                    <Meta title="CyberGaar" description="Your first line of defense in the vast expanse of cyberspace, securing your operations with resilient, cutting-edge threat mitigation." />
                    <ScrollToTop />
                    <ScrollToAnchor />
                    <ConditionalHeader />
                    <main>
                        <Suspense fallback={<Loader />}>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/compliance-audit" element={<ComplianceAuditPage />} />
                                <Route path="/security-testing" element={<SecurityTestingPage />} />
                                <Route path="/vulnerability-assessment" element={<VulnerabilityAssessmentPage />} />
                                <Route path="/policy-audit-pro" element={<PolicyAuditProPage />} />
                                <Route path="/virtual-browser" element={<VirtualBrowserPage />} />
                                <Route path="/checkout" element={<CheckoutPage />} />

                                <Route path="/blog" element={<BlogPage />} />
                                <Route path="/blog/:slug" element={<BlogPostPage />} />
                                <Route path="/animation" element={<AnimationPage />} />
                            </Routes>
                        </Suspense>
                    </main>
                    <ConditionalFooter />
                    <CookieNotice />
                </Router>
            </div>
        </ErrorBoundary>
    );
};

export default App;
