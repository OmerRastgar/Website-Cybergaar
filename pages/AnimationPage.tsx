import React from 'react';

const AnimationPage: React.FC = () => {
    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <iframe 
                src="/animation.html" 
                style={{ width: '100%', height: '100%', border: 'none' }} 
                title="Animation"
            />
        </div>
    );
};

export default AnimationPage;
