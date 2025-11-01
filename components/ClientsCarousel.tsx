import React from 'react';

const logos = [
    { name: 'Marketlytics', src: '/logos/marketlytics.png', url: 'https://marketlytics.com/' },
    { name: 'Sakoon Engineering', src: '/logos/Sakoon-RG.png.webp', url: 'https://www.sakoon.com.pk/' },
    { name: 'Air Audit', src: '/logos/cropped-AirAudti-RG-02-1-206x69.png', url: 'https://airaudit.co/' },
    { name: 'CuberCore', src: '/logos/cubercore_logo.jpg', url: 'https://cubercore.com/' },
    { name: 'FortunaXR', src: '/logos/Fortune.jpg', url: 'https://www.fortunaxr.com/' },
    { name: 'Creating Realities', src: '/logos/images.jpg', url: 'https://www.creatingrealities.com/' },
];

const ClientsCarousel: React.FC = () => {
    return (
        <div className="w-full py-12">
            <h2 className="text-4xl font-bold text-center text-black mb-12">Trusted By</h2>
            <div className="relative overflow-hidden">
                <div className="logos-track animate-scroll-x">
                    {[...logos, ...logos].map((logo, index) => (
                        <a key={index} href={logo.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 mx-4 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white">
                            <img src={logo.src} alt={`${logo.name} logo`} className="h-16 mb-4" loading="lazy" />
                            <p className="text-lg font-semibold text-center">{logo.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientsCarousel;