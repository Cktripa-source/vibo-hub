import React from 'react';
import { Star, Heart, Share2, Download, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
            {/* Product Image */}
            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center text-6xl">
                {product.image}
            </div>

            {/* Product Info */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-500 group-hover:bg-clip-text">
                            {product.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                <span className="ml-1 text-sm text-gray-300">{product.rating}</span>
                            </div>
                            <span className="text-gray-500">•</span>
                            <span className="text-sm text-gray-300">{product.reviews} reviews</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-sm text-gray-300">{product.sales} sales</span>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                            <Heart className="w-5 h-5 text-gray-400 hover:text-pink-500" />
                        </button>
                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                            <Share2 className="w-5 h-5 text-gray-400 hover:text-blue-500" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                            {product.author.avatar}
                        </div>
                        <div className="text-sm">
                            <div className="text-gray-300">{product.author.name}</div>
                            <div className="text-gray-500 flex items-center">
                                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                                {product.author.rating}
                            </div>
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-white">${product.price}</div>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2">
                        <ShoppingBag className="w-5 h-5" />
                        <span>Buy Now</span>
                    </button>
                    <button className="px-4 py-3 bg-white/5 text-gray-300 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                        <Download className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
