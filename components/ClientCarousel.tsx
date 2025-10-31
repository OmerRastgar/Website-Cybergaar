import React, { useState, useEffect, useCallback } from 'react';

const clients = [
    'https://cybergaar.com/assets/client4.a823927d.png',
    'https://cybergaar.com/assets/client5.30922e03.png',
    'https://cybergaar.com/assets/client6.64936353.png',
    'https://cybergaar.com/assets/client7.0d34a478.png',
    'https://cybergaar.com/assets/client8.1e05915d.png',
    'https://cybergaar.com/assets/client9.b94a2a19.png',
    'https://cybergaar.com/assets/client10.957591b9.png',
];

const ClientCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);

    const totalItems = clients.length;
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsToShow(2);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(3);
            } else {
                setItemsToShow(4);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % totalItems);
    }, [totalItems]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + totalItems) % totalItems);
    };
    
    const getVisibleSlides = () => {
        const slides = [];
        for (let i = 0; i < itemsToShow; i++) {
            slides.push(clients[(currentIndex + i) % totalItems]);
        }
        return slides;
    };


    return (
        <div className="relative w-full">
            <div className="overflow-hidden">
                <div className="flex">
                    {getVisibleSlides().map((client, index) => (
                        <div key={index} className="flex-shrink-0 px-2 sm:px-4" style={{ width: `${100 / itemsToShow}%` }}>
                            <div className="client-item h-28 sm:h-32 flex items-center justify-center p-4 bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 border border-slate-200">
                                <img src={client} alt={`Client ${index + 1}`} className="max-h-16 sm:max-h-20 max-w-full object-contain grayscale transition-all duration-300 hover:grayscale-0" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={prevSlide} className="carousel-control prev absolute top-1/2 -translate-y-1/2 -left-2 md:-left-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl hover:bg-slate-700 transition-colors z-10">‹</button>
            <button onClick={nextSlide} className="carousel-control next absolute top-1/2 -translate-y-1/2 -right-2 md:-right-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl hover:bg-slate-700 transition-colors z-10">›</button>
        </div>
    );
};

export default ClientCarousel;
