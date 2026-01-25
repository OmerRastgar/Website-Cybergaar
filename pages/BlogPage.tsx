import React from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../blog/loader';
import AnimatedSection from '../components/AnimatedSection';
import Meta from '../components/Meta';
import Header from '../components/Header';

const BlogPage: React.FC = () => {
    const posts = getPosts();

    return (
        <div className="min-h-screen flex flex-col">
            <Meta
                title="CyberGaar Blog - Cybersecurity Insights and Analysis"
                description="Stay informed with the latest cybersecurity trends, insights, and expert analysis from the CyberGaar team. Explore articles on compliance, security, and more."
            />
            
            {/* Navigation Header - Always on Top */}
            <Header />
            
            <div className="-mt-32 bg-black text-white flex-grow">
                <section className="hero-section text-center py-20 px-4 bg-slate-900 text-white" style={{ backgroundColor: '#0f172a', color: 'white' }}>
                    <AnimatedSection>
                        <div className="pt-32">
                            <h1 className="text-4xl md:text-5xl font-bold">CyberGaar Blog</h1>
                            <p className="text-lg md:text-xl text-slate-300 mt-2">Insights and Analysis on Cybersecurity Trends</p>
                        </div>
                    </AnimatedSection>
                </section>

                <div className="container mx-auto py-20 px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <AnimatedSection key={post.slug} className={`delay-${index * 100}`}>
                                <Link to={`/blog/${post.slug}`} className="block bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 h-full border border-white/10 hover:border-blue-400 hover:shadow-xl">
                                    <div className="p-6 flex flex-col h-full">
                                        <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
                                        <p className="text-white mb-4 flex-grow">{post.description}</p>
                                        <div className="text-sm text-gray-300 mt-auto">
                                            <span>{post.date}</span> &bull; <span>{post.author}</span>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;