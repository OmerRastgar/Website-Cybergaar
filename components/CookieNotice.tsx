import React, { useState, useEffect } from 'react';

const CookieNotice: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (consent === null) {
            setIsVisible(true);
        }
    }, []);

    const handleConsent = (consent: 'accepted' | 'declined') => {
        localStorage.setItem('cookie_consent', consent);
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-sm text-white p-4 z-50 shadow-lg">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-slate-300 text-center sm:text-left">
                    We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                </p>
                <div className="flex-shrink-0 flex gap-3">
                    <button 
                        onClick={() => handleConsent('accepted')} 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-sm transition-colors"
                    >
                        Accept
                    </button>
                    <button 
                        onClick={() => handleConsent('declined')} 
                        className="bg-transparent hover:bg-slate-700 text-slate-300 font-bold py-2 px-4 rounded-md text-sm transition-colors border border-slate-500"
                    >
                        Decline
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieNotice;