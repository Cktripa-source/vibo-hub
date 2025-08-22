import React, { useState, useEffect } from 'react';
import { ChevronRight, TrendingUp, Target, Zap, DollarSign, Sparkles, ArrowDown } from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const AffiliatePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        const handleScroll = () => setScrollY(window.scrollY);
        
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const benefits = [
        {
            title: 'High Commissions',
            description: 'Earn up to 30% on every successful referral with tiered bonus structures.',
            icon: DollarSign,
            gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
            stat: '30%',
            color: 'emerald',
            delay: '0ms'
        },
        {
            title: 'Real-Time Analytics',
            description: 'Advanced dashboard with live conversion tracking and performance insights.',
            icon: TrendingUp,
            gradient: 'from-blue-400 via-indigo-500 to-purple-600',
            stat: '24/7',
            color: 'blue',
            delay: '100ms'
        },
        {
            title: 'Marketing Arsenal',
            description: 'Premium creatives, landing pages, and conversion-optimized content.',
            icon: Target,
            gradient: 'from-violet-400 via-purple-500 to-fuchsia-600',
            stat: '500+',
            color: 'purple',
            delay: '200ms'
        },
        {
            title: 'Instant Payouts',
            description: 'Lightning-fast payments via crypto, PayPal, or direct bank transfer.',
            icon: Zap,
            gradient: 'from-orange-400 via-red-500 to-pink-600',
            stat: '<1h',
            color: 'orange',
            delay: '300ms'
        },
    ];

    const handleGetStarted = () => {
        console.log('Navigating to affiliate registration...');
    };

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes float-slow {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-20px) rotate(180deg); }
                    }
                    
                    @keyframes float-medium {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-15px) rotate(-180deg); }
                    }
                    
                    @keyframes float-fast {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-25px) rotate(360deg); }
                    }

                    @keyframes gradient-shift {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    
                    .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
                    .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
                    .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
                    .animate-gradient-shift { animation: gradient-shift 3s ease-in-out infinite; }
                    .bg-300 { background-size: 300% 300%; }
                `
            }} />

            <Header />

            {/* Dynamic cursor follower */}
            <div 
                className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
                style={{
                    left: mousePosition.x - 12,
                    top: mousePosition.y - 12,
                    transition: 'all 0.1s ease-out'
                }}
            >
                <div className="w-full h-full bg-white rounded-full opacity-80"></div>
            </div>

            {/* Mesh gradient background */}
            <div className="fixed inset-0 opacity-60">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/30"></div>
                <div className="absolute inset-0 opacity-40" style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.02\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                }}></div>
            </div>

            {/* Animated orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div 
                    className="absolute w-96 h-96 rounded-full blur-3xl animate-float-slow"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                        left: '10%',
                        top: '20%',
                        transform: `translateY(${scrollY * 0.1}px)`
                    }}
                ></div>
                <div 
                    className="absolute w-80 h-80 rounded-full blur-3xl animate-float-medium"
                    style={{
                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
                        right: '10%',
                        top: '60%',
                        transform: `translateY(${scrollY * -0.05}px)`
                    }}
                ></div>
                <div 
                    className="absolute w-64 h-64 rounded-full blur-3xl animate-float-fast"
                    style={{
                        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
                        left: '60%',
                        top: '10%',
                        transform: `translateY(${scrollY * 0.08}px)`
                    }}
                ></div>
            </div>

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="min-h-screen flex items-center px-4 pt-20">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div className={`transition-all duration-1200 ease-out ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                            }`}>
                                {/* Floating badge */}
                                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 mb-8 group hover:bg-white/10 transition-all duration-300">
                                    <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                                    <span className="text-sm font-medium text-white/80 group-hover:text-white">
                                        Join 10,000+ Top Affiliates
                                    </span>
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                </div>
                                
                                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">
                                    <span className="block">Become an</span>
                                    <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient-shift bg-300 relative">
                                        Affiliate
                                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-20 animate-pulse"></div>
                                    </span>
                                </h1>
                                
                                <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed">
                                    Transform your audience into revenue with our 
                                    <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold"> revolutionary affiliate program</span>
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                    <button
                                        onClick={handleGetStarted}
                                        className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-2xl text-lg font-bold overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                                        <span className="relative z-10 flex items-center gap-3">
                                            Start Earning Today
                                            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                                        </span>
                                    </button>
                                    
                                    <button className="group text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 px-6 py-4">
                                        <span>Learn More</span>
                                        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                                    </button>
                                </div>

                                {/* Stats bar */}
                                <div className="flex items-center gap-8 md:gap-12">
                                    {[
                                        { label: 'Active Affiliates', value: '10K+' },
                                        { label: 'Monthly Payouts', value: '$2M+' },
                                        { label: 'Avg. Commission', value: '30%' }
                                    ].map((stat, index) => (
                                        <div key={index} className="group cursor-pointer">
                                            <div className="text-2xl md:text-3xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Visual Content */}
                            <div className={`relative lg:flex hidden justify-center items-center transition-all duration-1400 ease-out ${
                                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                            }`}>
                                {/* Main visual element */}
                                <div className="relative w-96 h-96">
                                    {/* Central glowing orb */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                                    <div className="absolute inset-8 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur-2xl opacity-40 animate-pulse delay-1000"></div>
                                    <div className="absolute inset-16 bg-gradient-to-r from-purple-700 via-pink-700 to-cyan-700 rounded-full blur-xl opacity-60 animate-pulse delay-500"></div>
                                    
                                    {/* Floating elements */}
                                    <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 animate-float-slow">
                                        <DollarSign className="w-8 h-8 text-green-400" />
                                    </div>
                                    <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 animate-float-medium">
                                        <TrendingUp className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 animate-float-fast">
                                        <Zap className="w-8 h-8 text-yellow-400" />
                                    </div>
                                    <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 animate-float-slow delay-1000">
                                        <Target className="w-8 h-8 text-purple-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-24 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className={`text-center mb-20 transition-all duration-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                                Why Choose Us?
                            </h2>
                            <p className="text-xl text-white/70 max-w-2xl mx-auto">
                                Industry-leading benefits designed to maximize your earning potential
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit, index) => {
                                const IconComponent = benefit.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`group relative transition-all duration-700 hover:scale-105 cursor-pointer ${
                                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                        }`}
                                        style={{ 
                                            transitionDelay: `${300 + parseInt(benefit.delay)}ms`
                                        }}
                                        onMouseEnter={() => setActiveCard(index)}
                                        onMouseLeave={() => setActiveCard(null)}
                                    >
                                        {/* Glassmorphism card */}
                                        <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20">
                                            {/* Animated background gradient */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-[0.03] rounded-3xl transition-all duration-500`}></div>
                                            
                                            {/* Glow effect */}
                                            <div className={`absolute -inset-0.5 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}></div>
                                            
                                            {/* Content */}
                                            <div className="relative z-10">
                                                {/* Header */}
                                                <div className="flex items-center justify-between mb-6">
                                                    <div className={`relative p-4 bg-gradient-to-br ${benefit.gradient} rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                                                        <IconComponent className="w-7 h-7 text-white" />
                                                        <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className={`text-3xl font-black bg-gradient-to-r ${benefit.gradient} text-transparent bg-clip-text`}>
                                                            {benefit.stat}
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                                                    {benefit.title}
                                                </h3>
                                                
                                                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed mb-4">
                                                    {benefit.description}
                                                </p>

                                                {/* Hover action */}
                                                <div className={`flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${
                                                    activeCard === index ? 'translate-x-0' : 'translate-x-4'
                                                } bg-gradient-to-r ${benefit.gradient} text-transparent bg-clip-text`}>
                                                    Explore feature <ChevronRight className="w-4 h-4 ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-24 px-4">
                    <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <div className="relative bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 overflow-hidden">
                            {/* Animated background elements */}
                            <div className="absolute top-0 left-0 w-full h-full">
                                <div className="absolute top-4 right-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                                    Ready to 
                                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> Transform</span> 
                                    <br />Your Income?
                                </h3>
                                <p className="text-xl text-white/70 mb-8 leading-relaxed">
                                    Join the next generation of affiliate marketers and start earning with cutting-edge tools and unmatched support
                                </p>
                                
                                <button
                                    onClick={handleGetStarted}
                                    className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white px-12 py-4 rounded-2xl text-xl font-black overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                                    <span className="relative z-10 flex items-center gap-3">
                                        <Sparkles className="w-6 h-6" />
                                        Start Your Journey
                                        <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AffiliatePage;