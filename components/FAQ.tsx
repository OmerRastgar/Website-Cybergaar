import React, { useState } from 'react';
import type { FAQItem } from '../types';
import AnimatedSection from './AnimatedSection';

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AnimatedSection key={index} className={`delay-${index * 100}`}>
          <div className="border border-slate-300 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center text-left p-4 sm:p-5 bg-slate-200 hover:bg-slate-300 focus:outline-none"
            >
              <h3 className="text-md sm:text-lg font-semibold text-slate-900">{item.question}</h3>
              <i className={`fas fa-chevron-down text-blue-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}></i>
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
              <div className="p-4 sm:p-5 border-t border-slate-300 bg-white">
                <p className="text-slate-700">{item.answer}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default FAQ;