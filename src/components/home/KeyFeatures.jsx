import React, { useState, useEffect } from 'react';
import { Globe, Shield, BarChart2, Headphones, ArrowUpRight } from 'lucide-react';

const KeyFeatures = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        {
            title: 'Global Reach',
            description: 'Connect with customers and partners worldwide.',
            icon: Globe,
            gradient: 'from-emerald-500 to-teal-500',
            stat: '150+',
            statLabel: 'Countries',
            delay: '0ms'
        },
        {
            title: 'Secure Payments',
            description: 'Safe and reliable transaction processing.',
            icon: Shield,
            gradient: 'from-blue-500 to-indigo-500',
            stat: '99.9%',
            statLabel: 'Uptime',
            delay: '100ms'
        },
        {
            title: 'Analytics',
            description: 'Detailed insights and performance tracking.',
            icon: BarChart2,
            gradient: 'from-purple-500 to-pink-500',
            stat: 'Real-time',
            statLabel: 'Data',
            delay: '200ms'
        },
        {
            title: 'Support',
            description: '24/7 customer support and assistance.',
            icon: Headphones,
            gradient: 'from-orange-500 to-red-500',
            stat: '24/7',
            statLabel: 'Available',
            delay: '300ms'
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="inline-block mb-4">
                        <span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
                            Why Choose Us
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Key Features
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Everything you need to succeed in one powerful platform
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{
                                animationDelay: feature.delay,
                                animation: isVisible ? `slideInUp 0.6s ease-out ${feature.delay} both` : 'none'
                            }}
                            onMouseEnter={() => setActiveFeature(index)}
                            onMouseLeave={() => setActiveFeature(null)}
                        >
                            <div className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-3 group-hover:shadow-2xl ${activeFeature === index ? 'bg-white/10 border-white/20 scale-105 -translate-y-3' : ''}`}>
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 ${activeFeature === index ? 'opacity-10' : ''}`}></div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Header with icon and stat */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                            <feature.icon className="w-8 h-8 text-white" />
                                        </div>

                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-white">{feature.stat}</div>
                                            <div className="text-xs text-gray-400">{feature.statLabel}</div>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 flex-grow leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Learn more link */}
                                    <div className={`mt-6 flex items-center text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                                        <span className={`bg-gradient-to-r ${feature.gradient} text-transparent bg-clip-text font-semibold`}>
                                            Learn more
                                        </span>
                                        <ArrowUpRight className={`w-4 h-4 ml-2 text-gray-400 group-hover:text-white transition-colors`} />
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>

                                {/* Corner accent */}
                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom section with additional info */}
                <div className={`text-center mt-20 transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-3xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Trusted by Industry Leaders
                        </h3>
                        <p className="text-xl text-gray-300 mb-8">
                            Join thousands of businesses already using our platform to scale their operations
                        </p>

                        {/* Stats row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">10,000+</div>
                                <div className="text-gray-400">Active Users</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">$50M+</div>
                                <div className="text-gray-400">Transactions Processed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                                <div className="text-gray-400">Customer Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
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
        </section>
    );
};

export default KeyFeatures; 