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
                         <i className="fas fa-database text-5xl text-blue-600 mb-4"></i>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">The Dataset</h3>
                        <p className="text-slate-700 mb-4">Explore the comprehensive cybersecurity dataset used to train our model.</p>
                        <a href="https://huggingface.co/datasets/omer-rastgar/cyber-security-dataset" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700">View on Hugging Face &rarr;</a>
                    </div>
                     <div className="card bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 border border-slate-200 hover:border-blue-600">
                        <i className="fas fa-robot text-5xl text-blue-600 mb-4"></i>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">The PEFT Model</h3>
                        <p className="text-slate-700 mb-4">Access the fine-tuned model files, ready for your own projects and research.</p>
                        <a href="https://huggingface.co/omer-rastgar/Llama-2-7b-chat-finetune" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700">View on Hugging Face &rarr;</a>
                    </div>
                     <div className="card bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2 border border-slate-200 hover:border-blue-600">
                        <i className="fab fa-github text-5xl text-blue-600 mb-4"></i>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">The GUI</h3>
                        <p className="text-slate-700 mb-4">See the code behind our user-friendly chat interface and contribute to its development.</p>
                        <a href="https://github.com/OmerRastgar/LLM-Security-Chat" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700">View on GitHub &rarr;</a>
                    </div>
                </div>

                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
                    <div className="max-w-4xl mx-auto">
                        <FAQ items={faqs} />
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default AIChatPage;