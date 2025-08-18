import React, { useState, useEffect } from 'react';
import { UserPlus, UserCog, Rocket, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeStep, setActiveStep] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const steps = [
        {
            title: 'Sign Up',
            description: 'Create your account as a vendor, affiliate, or influencer.',
            icon: UserPlus,
            gradient: 'from-blue-500 to-cyan-500',
            delay: '0ms',
            number: '01'
        },
        {
            title: 'Set Up Your Profile',
            description: 'Complete your profile and customize your settings.',
            icon: UserCog,
            gradient: 'from-purple-500 to-pink-500',
            delay: '200ms',
            number: '02'
        },
        {
            title: 'Start Growing',
            description: 'Begin selling, promoting, or influencing to earn revenue.',
            icon: Rocket,
            gradient: 'from-orange-500 to-red-500',
            delay: '400ms',
            number: '03'
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="inline-block mb-4">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
                            Simple Process
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Get started in just three simple steps and begin your journey to success
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative group transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{
                                animationDelay: step.delay,
                                animation: isVisible ? `slideInUp 0.6s ease-out ${step.delay} both` : 'none'
                            }}
                            onMouseEnter={() => setActiveStep(index)}
                            onMouseLeave={() => setActiveStep(null)}
                        >
                            {/* Connection Line (except for last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-600 to-transparent transform -translate-y-1/2 z-0">
                                    <ArrowRight className="absolute -right-2 -top-2 w-5 h-5 text-gray-500" />
                                </div>
                            )}

                            <div className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group-hover:shadow-2xl ${activeStep === index ? 'bg-white/10 border-white/20 scale-105 -translate-y-2' : ''}`}>
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 ${activeStep === index ? 'opacity-10' : ''}`}></div>

                                {/* Step number */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-600 rounded-2xl flex items-center justify-center">
                                    <span className="text-sm font-bold text-gray-300">{step.number}</span>
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    {/* Icon */}
                                    <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <step.icon className="w-10 h-10 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Hover indicator */}
                                    <div className={`mt-4 px-4 py-2 bg-gradient-to-r ${step.gradient} rounded-xl text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                                        Step {step.number}
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Ready to Get Started?
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Join thousands of successful users and start your journey today
                        </p>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
                            Start Your Journey
                        </button>
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

export default HowItWorks;