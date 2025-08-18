import React, { useState, useEffect } from 'react';
import { Star, TrendingUp, Users, Rocket, Globe, Instagram, Youtube, Twitter, Heart, Share2, DollarSign } from 'lucide-react';

const InfluencerPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const categories = [
        { id: 'all', name: 'All Categories' },
        { id: 'fashion', name: 'Fashion & Style' },
        { id: 'tech', name: 'Technology' },
        { id: 'lifestyle', name: 'Lifestyle' },
        { id: 'gaming', name: 'Gaming' },
        { id: 'health', name: 'Health & Fitness' }
    ];

    const influencers = [
        {
            id: 1,
            name: 'Sarah Johnson',
            avatar: 'SJ',
            category: 'fashion',
            followers: '2.5M',
            engagement: '4.8%',
            platforms: ['instagram', 'youtube'],
            tags: ['Fashion', 'Lifestyle', 'Beauty'],
            bio: 'Fashion enthusiast and lifestyle blogger sharing daily inspiration.',
            rating: 4.8,
            reviews: 128,
            earnings: '125K+'
        },
        {
            id: 2,
            name: 'Alex Tech',
            avatar: 'AT',
            category: 'tech',
            followers: '1.8M',
            engagement: '5.2%',
            platforms: ['youtube', 'twitter'],
            tags: ['Tech Reviews', 'Gaming', 'Software'],
            bio: 'Tech reviewer and software developer making complex topics simple.',
            rating: 4.9,
            reviews: 245,
            earnings: '200K+'
        },
        {
            id: 3,
            name: 'Fit Mike',
            avatar: 'FM',
            category: 'health',
            followers: '985K',
            engagement: '6.1%',
            platforms: ['instagram', 'youtube', 'twitter'],
            tags: ['Fitness', 'Nutrition', 'Wellness'],
            bio: 'Personal trainer and nutrition expert helping you achieve your fitness goals.',
            rating: 4.7,
            reviews: 189,
            earnings: '150K+'
        },
        // Add more influencers as needed
    ];

    const filteredInfluencers = selectedCategory === 'all'
        ? influencers
        : influencers.filter(inf => inf.category === selectedCategory);

    const getPlatformIcon = (platform) => {
        switch (platform) {
            case 'instagram': return Instagram;
            case 'youtube': return Youtube;
            case 'twitter': return Twitter;
            default: return Globe;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className={\`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 transform \${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }\`}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Connect with Top Influencers
                    </span>
                </h1>
                <p className={\`text-xl text-gray-300 max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-200 transform \${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }\`}>
                Collaborate with influential creators to amplify your brand's reach and drive meaningful engagement
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                {[
                    { icon: Users, label: 'Active Influencers', value: '10K+' },
                    { icon: TrendingUp, label: 'Average Engagement', value: '5.2%' },
                    { icon: Star, label: 'Success Rate', value: '94%' }
                ].map((stat, index) => (
                    <div
                        key={index}
                        className={\`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-1000 delay-\${index * 200} transform \${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }\`}
                            >
                <div className="flex items-center justify-center space-x-4">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-3">
                        <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                </div>
            </div>
                        ))}
        </div>
                </div >
            </section >

    {/* Categories */ }
    < section className = "py-12 px-4" >
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-12">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={\`px-6 py-3 rounded-xl font-medium transition-all duration-300 \${
                    selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }\`}
                            >
                {category.name}
            </button>
                        ))}
        </div>

{/* Influencers Grid */ }
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {filteredInfluencers.map((influencer) => (
        <div
            key={influencer.id}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
        >
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                        {influencer.avatar}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text">
                            {influencer.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                            {influencer.platforms.map((platform, index) => {
                                const Icon = getPlatformIcon(platform);
                                return (
                                    <Icon
                                        key={index}
                                        className="w-4 h-4 text-gray-400 group-hover:text-gray-300"
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                        <Heart className="w-5 h-5 text-gray-400 hover:text-pink-500" />
                    </button>
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                        <Share2 className="w-5 h-5 text-gray-400 hover:text-purple-500" />
                    </button>
                </div>
            </div>

            <p className="text-gray-300 text-sm mb-6">
                {influencer.bio}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-white">{influencer.followers}</div>
                    <div className="text-xs text-gray-400">Followers</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-white">{influencer.engagement}</div>
                    <div className="text-xs text-gray-400">Engagement</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-white">{influencer.rating}</div>
                    <div className="text-xs text-gray-400">{influencer.reviews} Reviews</div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {influencer.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center text-gray-300">
                    <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                    <span>Est. Earnings: {influencer.earnings}/year</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    Contact
                </button>
            </div>
        </div>
    ))}
</div>
                </div >
            </section >

    {/* CTA Section */ }
    < section className = "py-20 px-4" >
        <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Grow Your Brand?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                    Join our network of influencers and start collaborating with brands that match your values
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    Get Started Now
                </button>
            </div>
        </div>
            </section >
        </div >
    );
};

export default InfluencerPage;
