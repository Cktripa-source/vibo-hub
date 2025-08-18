import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, TrendingUp, Target, Zap, DollarSign } from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const AffiliatePage = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const benefits = [
        {
            title: 'High Commissions',
            description: 'Earn competitive commissions on every sale.',
            icon: DollarSign,
            gradient: 'from-emerald-500 to-teal-600',
            stat: '30%'
        },
        {
            title: 'Easy Tracking',
            description: 'Monitor your performance with real-time analytics.',
            icon: TrendingUp,
            gradient: 'from-blue-500 to-indigo-600',
            stat: '24/7'
        },
        {
            title: 'Marketing Resources',
            description: 'Access promotional materials and tools.',
            icon: Target,
            gradient: 'from-purple-500 to-pink-600',
            stat: '100+'
        },
        {
            title: 'Instant Payouts',
            description: 'Get paid quickly and securely.',
            icon: Zap,
            gradient: 'from-orange-500 to-red-600',
            stat: '<24h'
        },
    ];

    const handleGetStarted = () => {
        navigate('/register', { state: { role: 'affiliate' } });
    };

    return (
        <div className="min-h-screen  bg-gradient-to-br from-gray-950   to-gray-950 relative overflow-hidden mt-16">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <Header />
            
            <main className="container mx-auto px-4 py-12 relative z-10">
                {/* Hero Section */}
                <div className={`text-center mb-12 transition-all duration-1000 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="inline-block mb-4">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
                            Join Our Network
                        </span>
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
                        Become an
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text block">
                            Affiliate
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Earn money by promoting great products with industry-leading commissions
                    </p>
                    
                    <button
                        onClick={handleGetStarted}
                        className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Start Earning
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                </div>

                {/* Benefits Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 transition-all duration-1000 delay-300 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                                onMouseEnter={() => setActiveCard(index)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-3 bg-gradient-to-br ${benefit.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xl font-bold text-purple-400">{benefit.stat}</span>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                                        {benefit.title}
                                    </h3>
                                    
                                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                                        {benefit.description}
                                    </p>

                                    <div className={`mt-3 flex items-center text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${
                                        activeCard === index ? 'translate-x-0' : 'translate-x-2'
                                    }`}>
                                        Learn more <ChevronRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center transition-all duration-1000 delay-600 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Ready to Start Earning?
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Join thousands of successful affiliates today
                        </p>
                        <button
                            onClick={handleGetStarted}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
                        >
                            Get Started Now
                        </button>
                    </div>
                </div>
            </main>
            
            <Footer />

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
        </div>
    );
};

export default AffiliatePage;