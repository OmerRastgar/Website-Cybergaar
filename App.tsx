import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToAnchor from './components/ScrollToAnchor';
import CookieNotice from './components/CookieNotice';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ComplianceAuditPage from './pages/ComplianceAuditPage';
import SecurityTestingPage from './pages/SecurityTestingPage';
import VulnerabilityAssessmentPage from './pages/VulnerabilityAssessmentPage';
import PolicyAuditProPage from './pages/PolicyAuditProPage';
import AIChatPage from './pages/AIChatPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <Router>
                <ScrollToTop />
                <ScrollToAnchor />
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services/compliance-audit" element={<ComplianceAuditPage />} />
                        <Route path="/services/security-testing" element={<SecurityTestingPage />} />
                        <Route path="/services/vulnerability-assessment" element={<VulnerabilityAssessmentPage />} />
                        <Route path="/products/policy-audit-pro" element={<PolicyAuditProPage />} />
                        <Route path="/products/ai-chat" element={<AIChatPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/blog/:slug" element={<BlogPostPage />} />
                    </Routes>
                </main>
                <Footer />
                <CookieNotice />
            </Router>
        </ErrorBoundary>
    );
};

export default App;