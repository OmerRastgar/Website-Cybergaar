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
const AIChatPage = lazy(() => import('./pages/AIChatPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));

const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

// This component will conditionally render the footer
const ConditionalFooter = () => {
    const location = useLocation();
    // Do not render the footer on the homepage
    if (location.pathname === '/') {
        return null;
    }
    return <Footer />;
}

const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <Router>
                <Meta title="CyberGaar" description="Your first line of defense in the vast expanse of cyberspace, securing your operations with resilient, cutting-edge threat mitigation." />
                <ScrollToTop />
                <ScrollToAnchor />
                <Header />
                <main>
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/compliance-audit" element={<ComplianceAuditPage />} />
                            <Route path="/security-testing" element={<SecurityTestingPage />} />
                            <Route path="/vulnerability-assessment" element={<VulnerabilityAssessmentPage />} />
                            <Route path="/policy-audit-pro" element={<PolicyAuditProPage />} />
                            <Route path="/ai-chat" element={<AIChatPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/blog/:slug" element={<BlogPostPage />} />
                        </Routes>
                    </Suspense>
                </main>
                <ConditionalFooter />
                <CookieNotice />
            </Router>
        </ErrorBoundary>
    );
};

export default App;
