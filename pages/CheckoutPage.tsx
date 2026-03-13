import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Meta from '../components/Meta';

const CheckoutPage: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const plan = queryParams.get('plan') || 'Premium';
    const price = queryParams.get('price') || '$4';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        plan: plan,
        price: price
    });
    const [status, setStatus] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Processing order...');

        try {
            const response = await fetch('https://formspree.io/f/xzzdgkly', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: `New Subscription Order: ${plan}`,
                    message: `Customer: ${formData.name}\nPlan: ${plan}\nPrice: ${price}\nEmail: ${formData.email}`
                })
            });

            if (response.ok) {
                setIsSuccess(true);
                setStatus('Thank you for your purchase! An agent will be with you as soon as possible.');
                setFormData({ name: '', email: '', plan: plan, price: price });
            } else {
                setStatus('There was an issue processing your request. Please try again.');
            }
        } catch (error) {
            setStatus('Connection error. Please try again later.');
            console.error('Checkout error:', error);
        }
    };

    return (
        <>
            <Meta title={`Checkout - ${plan} | CyberGaar`} description="Secure your virtual browser environment with our high-performance subscription plans." />
            
            <div className="bg-black min-h-screen text-white pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <AnimatedSection>
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                            
                            {/* Left Side: Order Summary */}
                            <div className="md:w-1/3 bg-blue-600/10 p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                                <h2 className="text-xl font-semibold text-blue-400 mb-6 uppercase tracking-widest">Order Summary</h2>
                                <div className="mb-8">
                                    <div className="text-4xl font-bold mb-2">{plan}</div>
                                    <div className="text-slate-400">Virtual Browser Subscription</div>
                                </div>
                                <div className="border-t border-white/10 pt-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-slate-400">Amount Due</span>
                                        <span className="text-2xl font-bold">{price}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 italic">One-time payment / Subscription setup</p>
                                </div>
                            </div>

                            {/* Right Side: Details Form */}
                            <div className="md:w-2/3 p-10">
                                {isSuccess ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center py-10">
                                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 text-white">Purchase Confirmed</h3>
                                        <p className="text-gray-400">{status}</p>
                                        <Link to="/virtual-browser" className="mt-10 text-blue-400 hover:text-blue-300 font-semibold flex items-center">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                            Return to Products
                                        </Link>
                                    </div>
                                ) : (
                                    <>
                                        <h1 className="text-3xl font-bold mb-8">Complete Your Details</h1>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 gap-6">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">FULL NAME</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="John Doe"
                                                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-600"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">EMAIL ADDRESS</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        placeholder="john@example.com"
                                                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-slate-600"
                                                    />
                                                </div>
                                            </div>

                                            <div className="pt-4">
                                                <button
                                                    type="submit"
                                                    disabled={status.includes('Processing')}
                                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                                                >
                                                    {status.includes('Processing') ? 'PROCESSING...' : 'BUY NOW'}
                                                </button>
                                                {status && !isSuccess && <p className="text-center mt-4 text-red-400 text-sm">{status}</p>}
                                            </div>
                                            
                                            <p className="text-center text-xs text-slate-500 mt-6 px-4 leading-relaxed">
                                                By clicking "BUY NOW", you agree to our terms of service. An agent will contact you shortly to finalize your custom environment.
                                            </p>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
