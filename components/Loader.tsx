import React from 'react';
import '../styles.css'; // Ensure we can use Tailwind classes

const Loader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center">
            <div className="relative">
                {/* Spinning Outer Ring */}
                <div className="w-24 h-24 rounded-full border-t-2 border-b-2 border-cyan-500 animate-spin"></div>

                {/* Inner Pulse */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-900/20 rounded-full animate-pulse"></div>

                {/* Core Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
            </div>

            <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold text-white tracking-widest uppercase mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 animate-pulse">
                        CyberGaar
                    </span>
                </h2>
                <div className="flex items-center space-x-1 justify-center">
                    <span className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                    <span className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
                <p className="text-cyan-500/60 text-xs font-mono mt-2 tracking-widest">INITIALIZING SECURE CONNECTION</p>
            </div>
        </div>
    );
};

export default Loader;
