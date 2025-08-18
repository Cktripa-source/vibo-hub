import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Marketplace = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-white mb-8">Marketplace</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Placeholder for products/services */}
                    <div className="bg-gray-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Coming Soon
                        </h3>
                        <p className="text-gray-400">
                            Our marketplace is under construction. Check back soon for amazing products and services!
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Marketplace;