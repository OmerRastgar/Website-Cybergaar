import React, { useState } from 'react';
import type { FAQItem } from '../types';
import AnimatedSection from './AnimatedSection';

interface FAQProps {
  items: FAQItem[];
}

// New SVG Icon for Chevron
const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AnimatedSection key={index} className={`delay-${index * 100}`}>
          <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur-sm shadow-sm">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center text-left p-4 sm:p-5 hover:bg-gray-700/50 focus:outline-none transition-colors duration-200"
            >
              <h3 className="text-md sm:text-lg font-semibold text-gray-100">{item.question}</h3>
              <ChevronDownIcon className={`w-6 h-6 text-blue-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
              <div className="p-4 sm:p-5 border-t border-gray-700">
                <p className="text-gray-300">{item.answer}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default FAQ;
