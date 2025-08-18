import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const CTASection = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    const handleGetStarted = () => {
        if (isAuthenticated) {
            navigate('/dashboard');
        } else {
            navigate('/register');
        }
    };

    return (
        <section className="py-20 bg-gradient-to-r from-gray-900 to-purple-950">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                    Ready to Get Started?
                </h2>
                <p className="text-xl text-white mb-8">
                    Join our platform today and start growing your business.
                </p>
                <button
                    onClick={handleGetStarted}
                    className="inline-flex items-center px-8 py-3 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                </button>
            </div>
        </section>
    );
};

export default CTASection;