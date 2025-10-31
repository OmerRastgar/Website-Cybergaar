import React from 'react';

const clients = [
    { name: 'Marketlytics', logo: '/logos/marketlytics.png', url: 'https://marketlytics.com/' },
    { name: 'Sakoon Engineering', logo: '/logos/sakoon-engineering.png', url: 'https://www.sakoon.com.pk/' },
    { name: 'Air Audit', logo: '/logos/air-audit.png', url: 'https://airaudit.co/' },
    { name: 'CuberCore', logo: '/logos/cubercore.png', url: 'https://cubercore.com/' },
    { name: 'FortunaXR', logo: '/logos/fortunaxr.png', url: 'https://www.fortunaxr.com/' },
    { name: 'Creating Realities', logo: '/logos/creating-realities.png', url: 'https://www.creatingrealities.com/' },
];

// Duplicate the clients array for a seamless loop
const duplicatedClients = [...clients, ...clients];

const ClientsCarousel: React.FC = () => {
    return (
        <div className="w-full max-w-6xl mx-auto">
            <h2 className="section-title text-5xl md:text-6xl font-bold animate fade-in-up text-center mb-12">Our Clients</h2>
            <div className="logos-container overflow-hidden relative">
                <div className="logos-slide flex w-max">
                    {duplicatedClients.map((client, index) => (
                        <a href={client.url} key={`${client.name}-${index}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 mx-4 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white">
                            <img src={client.logo} alt={`${client.name} logo`} className="h-16 mb-4" loading="lazy" />
                            <p className="text-lg font-semibold text-center">{client.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientsCarousel;
