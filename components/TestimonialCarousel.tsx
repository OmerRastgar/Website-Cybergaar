import React, { useState, useEffect, useCallback } from 'react';
import type { Testimonial } from '../types';
import AnimatedSection from './AnimatedSection';


const testimonials: Testimonial[] = [
    {
        quote: "CyberGaar's team provided an exceptional penetration testing service. Their thoroughness and clear reporting helped us significantly improve our security posture. Highly recommended!",
        name: 'Jane Doe',
        company: 'FinTech Innovations Inc.',
        image: 'https://picsum.photos/id/237/100/100',
        stars: 5,
    },
    {
        quote: "The compliance audit was seamless and incredibly insightful. CyberGaar guided us through the entire ISO 27001 certification process with expertise and professionalism.",
        name: 'John Smith',
        company: 'SecureHealth Solutions',
        image: 'https://picsum.photos/id/238/100/100',
        stars: 5,
    },
    {
        quote: "We were impressed by the depth of the vulnerability assessment. The team uncovered critical issues we were unaware of and provided practical solutions to fix them.",
        name: 'Emily White',
        company: 'iGaming Platform Ltd.',
        image: 'https://picsum.photos/id/239/100/100',
        stars: 4,
    },
    {
        quote: "Their social engineering simulation was an eye-opener. It helped us train our staff effectively and build a stronger human firewall against phishing attacks.",
        name: 'Michael Brown',
        company: 'Global Logistics Corp.',
        image: 'https://picsum.photos/id/240/100/100',
        stars: 5,
    }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex text-yellow-400 mb-4 justify-center">
        {[...Array(5)].map((_, i) => (
            <i key={i} className={`fas fa-star ${i < rating ? 'text-yellow-400' : 'text-slate-300'}`}></i>
        ))}
    </div>
);

const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, []);
    
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonial-section bg-white py-20">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                  <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What Our Clients Say</h2>
                </AnimatedSection>
                <AnimatedSection>
                  <div className="relative max-w-3xl mx-auto">
                      <div className="overflow-hidden">
                          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                              {testimonials.map((testimonial, index) => (
                                  <div key={index} className="w-full flex-shrink-0 px-2">
                                      <div className="testimonial-card bg-white rounded-xl p-8 shadow-lg h-auto sm:h-[22rem] flex flex-col relative text-center border border-slate-200">
                                           <i className="fas fa-quote-left text-7xl text-slate-200 opacity-50 absolute top-4 left-4"></i>
                                          <StarRating rating={testimonial.stars} />
                                          <p className="testimonial-content flex-grow mb-6 text-slate-700 italic leading-relaxed">"{testimonial.quote}"</p>
                                          <div className="client-info flex flex-col sm:flex-row items-center justify-center">
                                              <img src={testimonial.image} alt={testimonial.name} className="client-image w-16 h-16 rounded-full mr-0 sm:mr-4 mb-2 sm:mb-0 border-2 border-blue-600" />
                                              <div className="client-details text-center sm:text-left">
                                                  <h5 className="font-bold text-slate-900">{testimonial.name}</h5>
                                                  <p className="text-slate-500 text-sm">{testimonial.company}</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                       <button onClick={prevSlide} className="carousel-control prev absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl hover:bg-slate-700 transition-colors z-10">‹</button>
                      <button onClick={nextSlide} className="carousel-control next absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl hover:bg-slate-700 transition-colors z-10">›</button>
                  </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default TestimonialCarousel;