import React, { useState } from 'react';
import { ArrowUpRight, Heart, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    // Mock Link component for demo
    const Link = ({ to, children, className, ...props }) => (
        <a href={to} className={className} {...props}>
            {children}
        </a>
    );

    const footerSections = [
        {
            title: 'About Us',
            content: (
                <div>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        ViboHub connects vendors, affiliates, and influencers in a powerful ecosystem, 
                        empowering businesses to grow and scale globally.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center text-gray-400 hover:text-purple-400 transition-colors">
                            <Mail className="w-4 h-4 mr-3" />
                            <span>contact@vibohub.com</span>
                        </div>
                        <div className="flex items-center text-gray-400 hover:text-purple-400 transition-colors">
                            <Phone className="w-4 h-4 mr-3" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center text-gray-400 hover:text-purple-400 transition-colors">
                            <MapPin className="w-4 h-4 mr-3" />
                            <span>San Francisco, CA</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: 'Quick Links',
            links: [
                { name: 'Home', href: '/' },
                { name: 'Marketplace', href: '/marketplace' },
                { name: 'Become a Vendor', href: '/become-vendor' },
                { name: 'Become an Affiliate', href: '/become-affiliate' },
                { name: 'Login', href: '/login' }
            ]
        },
        {
            title: 'Support',
            links: [
                { name: 'Help Center', href: '/help' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'FAQs', href: '/faq' },
                { name: 'Documentation', href: '/docs' },
                { name: 'Community', href: '/community' }
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Cookie Policy', href: '/cookies' },
                { name: 'GDPR Compliance', href: '/gdpr' }
            ]
        }
    ];

    const socialLinks = [
        { name: 'Twitter', href: '#', color: 'from-blue-400 to-blue-500' },
        { name: 'LinkedIn', href: '#', color: 'from-blue-600 to-blue-700' },
        { name: 'Discord', href: '#', color: 'from-indigo-500 to-purple-600' },
        { name: 'GitHub', href: '#', color: 'from-gray-600 to-gray-700' }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-gray-950 via-gray-950 to-black overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                }}></div>
            </div>

            {/* Top accent line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

            <div className="container mx-auto px-6 py-16 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {footerSections.map((section, index) => (
                        <div key={index} className="group">
                            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                                {section.title}
                            </h4>
                            
                            {section.content ? (
                                section.content
                            ) : (
                                <ul className="space-y-4">
                                    {section.links?.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                to={link.href}
                                                className="group/link flex items-center text-gray-400 hover:text-purple-400 transition-all duration-300"
                                                onMouseEnter={() => setHoveredLink(`${index}-${linkIndex}`)}
                                                onMouseLeave={() => setHoveredLink(null)}
                                            >
                                                <span className="relative">
                                                    {link.name}
                                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover/link:w-full"></span>
                                                </span>
                                                <ArrowUpRight className={`w-3 h-3 ml-2 transition-all duration-300 ${
                                                    hoveredLink === `${index}-${linkIndex}` 
                                                        ? 'opacity-100 transform translate-x-1 -translate-y-1' 
                                                        : 'opacity-0'
                                                }`} />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="mt-16 py-12 border-t border-gray-800/50">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-gray-400 mb-8">
                            Get the latest news, updates, and exclusive offers delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-800/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Brand & Copyright */}
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-lg">V</span>
                                </div>
                                <span className="text-xl font-bold text-white">VIBO HUB</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <span>Made with</span>
                                <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
                                <span>by the ViboHub team</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-white font-semibold hover:scale-110 transition-all duration-300 hover:shadow-lg`}
                                    title={social.name}
                                >
                                    {social.name.charAt(0)}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-6 border-t border-gray-800/30 text-center">
                        <p className="text-gray-500">
                            © {new Date().getFullYear()} ViboHub. All rights reserved. 
                            <span className="mx-2">|</span>
                            Building the future of digital commerce.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .animate-pulse {
                    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                
                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.1;
                    }
                    50% {
                        opacity: 0.3;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;