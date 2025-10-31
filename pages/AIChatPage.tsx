import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import FAQ from '../components/FAQ';
import type { FAQItem } from '../types';

const faqs: FAQItem[] = [
    { question: "Is the CyberGaar AI Chat completely free to use?", answer: "Yes, our AI Chat is available online for free. Our mission is to spread cybersecurity awareness and provide accessible tools to the community." },
    { question: "Why are you making the model and dataset open source?", answer: "Transparency is a core value at CyberGaar. By making our resources open source, we encourage community collaboration, allow for independent auditing, and contribute to the collective advancement of AI in cybersecurity." },
    { question: "What kind of data was the model trained on?", answer: "The model was trained on a specialized, curated dataset focused on cybersecurity topics, standards, and best practices. You can explore the full dataset on our Hugging Face page." },
    { question: "How can I contribute to the project?", answer: "We welcome contributions! You can contribute by providing feedback, reporting issues, or even helping with development. Check out our GitHub repository to get started." },
];

const DatabaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
);

const RobotIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4 2 2 0 000-4zm0 2a2 2 0 110 4 2 2 0 010-4zm0 0V4m0 2h.01M6 12h.01M18 12h.01M7 16h10M7 20h10M6 20a2 2 0 11-4 0 2 2 0 014 0zM18 20a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.1.73-.24.73-.53v-1.84c-3.03.66-3.67-1.46-3.67-1.46-.5-1.27-1.22-1.61-1.22-1.61-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.56 1.2 3.18.92.1-.72.38-1.2.7-1.48-2.43-.28-5-1.2-5-5.42 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.91 0 0 .92-.3 3 1.12a10.45 10.45 0 015.46 0c2.08-1.42 3-1.12 3-1.12.6 1.51.22 2.63.11 2.91.7.77 1.13 1.75 1.13 2.95 0 4.23-2.57 5.14-5 5.42.4.34.75 1.03.75 2.08v3.08c0 .29.18.63.73.53A11 11 0 0012 1.27z" />
    </svg>
);

const AIChatPage: React.FC = () => {
    return (
        <div className="-mt-32">
            <section className="hero-section text-center bg-slate-900 text-white py-20 px-4">
                <AnimatedSection>
                    <div className="pt-32">
                        <h1 className="text-4xl md:text-5xl font-bold">AI Chat</h1>
                        <p className="text-lg md:text-xl text-slate-300 mt-2">Our Commitment to an Open and Secure Community</p>
                    </div>
                </AnimatedSection>
            </section>

            <div className="container mx-auto py-20 px-4">
                <AnimatedSection className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-20 text-center">
                     <h2 className="text-3xl font-bold text-slate-900 mb-4">Spreading Awareness Through Open Source AI</h2>
                    <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto mb-8">At CyberGaar, we believe that knowledge is the best defense. That's why we've developed a free, open-source Large Language Model (LLM) dedicated to cybersecurity. Hosted at <a href="https://ai.cybergaar.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">ai.cybergaar.com</a>, our AI Chat is a transparent tool designed to help educate, inform, and assist anyone interested in learning more about digital security.</p>
                     <a href="https://ai.cybergaar.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105 inline-block">Try the AI Chat Now</a>
                </AnimatedSection>

                 <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Transparent & Community-Driven</h2>
                </AnimatedSection>
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="card bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 border border-slate-200 hover:border-blue-600">
                         <DatabaseIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">The Dataset</h3>
                        <p className="text-slate-700 mb-4">Explore the comprehensive cybersecurity dataset used to train our model.</p>
                        <a href="https://huggingface.co/datasets/omer-rastgar/cyber-security-dataset" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700">View on Hugging Face &rarr;</a>
                    </div>
                     <div className="card bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 border border-slate-200 hover:border-blue-600">
                        <RobotIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">The PEFT Model</h3>
                        <p className="text-slate-700 mb-4">Access the fine-tuned model files, ready for your own projects and research.</p>
                        <a href="https://huggingface.co/omer-rastgar/Llama-2-7b-chat-finetune" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700">View on Hugging Face &rarr;</a>
                    </div>
                     <div className="card bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 border border-slate-200 hover:border-blue-600">
                        <GithubIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-2">The GUI</h3>
                        <p className="text-slate-700 mb-4">See the code behind our user-friendly chat interface and contribute to its development.</p>
                        <a href="https://github.com/OmerRastgar/LLM-Security-Chat" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700">View on GitHub &rarr;</a>
                    </div>
                </div>

                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center text-black mb-12">Frequently Asked Questions</h2>
                    <div className="max-w-4xl mx-auto">
                        <FAQ items={faqs} />
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default AIChatPage;
