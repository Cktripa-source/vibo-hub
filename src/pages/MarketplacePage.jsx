import React, { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, Star, Heart, Share2, ShoppingBag, Download } from 'lucide-react';
import Header from '../components/common/Header';
const MarketplacePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sortBy, setSortBy] = useState('popular');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const categories = [
        { id: 'all', name: 'All Products' },
        { id: 'digital', name: 'Digital Products' },
        { id: 'templates', name: 'Templates' },
        { id: 'software', name: 'Software' },
        { id: 'courses', name: 'Courses' },
        { id: 'graphics', name: 'Graphics' }
    ];

    const products = [
        {
            id: 1,
            name: 'Premium Website Template',
            category: 'templates',
            price: 49,
            rating: 4.8,
            reviews: 124,
            sales: 1520,
            image: '🎨',
            tags: ['React', 'Tailwind', 'Responsive'],
            author: {
                name: 'DesignMaster',
                avatar: 'DM',
                rating: 4.9
            }
        },
        {
            id: 2,
            name: 'Social Media Marketing Course',
            category: 'courses',
            price: 199,
            rating: 4.9,
            reviews: 256,
            sales: 2430,
            image: '📚',
            tags: ['Marketing', 'Social Media', 'Strategy'],
            author: {
                name: 'Marketing Pro',
                avatar: 'MP',
                rating: 4.8
            }
        },
        {
            id: 3,
            name: 'Analytics Dashboard UI Kit',
            category: 'graphics',
            price: 79,
            rating: 4.7,
            reviews: 89,
            sales: 945,
            image: '📊',
            tags: ['UI Kit', 'Dashboard', 'Analytics'],
            author: {
                name: 'UI Wizard',
                avatar: 'UW',
                rating: 4.7
            }
        }
    ];

    const filteredProducts = products
        .filter(product =>
            (selectedCategory === 'all' || product.category === selectedCategory) &&
            (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
            product.price >= priceRange[0] && product.price <= priceRange[1]
        )
        .sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                default:
                    return b.sales - a.sales;
            }
        });

    return (
          
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <Header />
            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-600">
                            Digital Marketplace
                        </span>
                    </h1>
                    <p className={`text-xl text-gray-300 max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-200 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        Discover high-quality digital products, templates, and resources
                    </p>

                    {/* Search Bar */}
                    <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-400 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for digital products..."
                                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                            />
                            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg text-white text-sm font-medium">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-4 max-w-7xl m-auto">
                <div className="container mx-auto">
                    {/* Filters and Categories */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
                        <div className="flex flex-wrap gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                        selectedCategory === category.id
                                            ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg shadow-blue-500/25'
                                            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <div className="relative">
                                <button className="px-6 py-3 bg-white/5 rounded-xl text-gray-300 hover:bg-white/10 transition-all flex items-center space-x-2">
                                    <Filter className="w-4 h-4" />
                                    <span>Filter</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-6 py-3 bg-white/5 rounded-xl text-gray-300 hover:bg-white/10 transition-all appearance-none cursor-pointer"
                                >
                                    <option value="popular">Most Popular</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl m-auto">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
                            >
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
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500/20 to-emerald-500/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Start Selling Your Digital Products
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Join our marketplace and reach thousands of potential customers worldwide
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                                Become a Seller
                            </button>
                            <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-medium text-lg hover:bg-white/20 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MarketplacePage;