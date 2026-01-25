import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../blog/loader';
import AnimatedSection from '../components/AnimatedSection';
import Meta from '../components/Meta';

const markdownToHtml = (markdown: string): string => {
    const blocks = markdown.trim().split(/\n\n+/);
    return blocks.map(block => {
        // This is a simplified parser. It won't handle nested lists, etc.
        if (block.startsWith('# ')) return `<h1>${block.substring(2)}</h1>`;
        if (block.startsWith('## ')) return `<h2>${block.substring(3)}</h2>`;
        if (block.startsWith('### ')) return `<h3>${block.substring(4)}</h3>`;
        // Basic paragraph handling
        return `<p>${block.replace(/\n/g, '<br />')}</p>`;
    }).join('');
}


const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getPostBySlug(slug) : undefined;

    if (!post) {
        return (
            <div className="container mx-auto py-40 px-4 text-center bg-black text-white">
                <h1 className="text-4xl font-bold text-gray-100">Post not found</h1>
                <p className="text-gray-300 mt-4">The blog post you're looking for does not exist.</p>
                <Link to="/blog" className="mt-8 inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-full">Back to Blog</Link>
            </div>
        );
    }

    const htmlContent = post.content ? markdownToHtml(post.content) : '';

    return (
        <>
            <Meta
                title={post.title}
                description={post.description}
            />
            <div className="-mt-32 bg-black text-white">
                <section className="hero-section text-left bg-slate-900 text-white pt-48 pb-24 px-4">
                    <AnimatedSection>
                        <div className="container mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
                            <p className="text-lg text-slate-300 mt-4">
                                By {post.author} on {post.date}
                            </p>
                        </div>
                    </AnimatedSection>
                </section>

                <div className="bg-gray-900">
                    <div className="container mx-auto py-20 px-4">
                        <article className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm p-6 sm:p-10 rounded-lg shadow-lg border border-white/10">
                            <div 
                                className="markdown-content text-gray-100"
                                dangerouslySetInnerHTML={{ __html: htmlContent }} 
                            />
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPostPage;