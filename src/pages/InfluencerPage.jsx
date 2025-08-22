import React, { useState, useEffect } from 'react';
import { 
  Globe, Users, BarChart3, Shield, Target, Zap, Rocket, Sparkles, DollarSign, ArrowRight, Calendar, Star 
} from 'lucide-react';
import Header from '../components/common/Header';

const InfluencerPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({ influencers: 0, campaigns: 0, followers: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setStats({ influencers: 12000, campaigns: 350000, followers: 5000000 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      title: 'Global Influence',
      description: 'Reach audiences worldwide with multi-platform campaigns and collaborations.',
      icon: Globe,
      color: 'from-red-400 via-orange-500 to-red-600',
      stats: 'Worldwide',
      glow: 'shadow-orange-500/25'
    },
    {
      title: 'Secure Payments',
      description: 'Fast and secure payout solutions for influencers with zero delays.',
      icon: Shield,
      color: 'from-orange-400 to-red-500',
      stats: '99.9% Uptime',
      glow: 'shadow-orange-400/25'
    },
    {
      title: 'AI Analytics',
      description: 'Track engagement, growth, and conversions with AI-driven insights.',
      icon: BarChart3,
      color: 'from-red-500 to-orange-500',
      stats: 'Real-time Data',
      glow: 'shadow-red-500/25'
    },
    {
      title: 'Network Expansion',
      description: 'Collaborate with top brands and fellow influencers for maximum reach.',
      icon: Users,
      color: 'from-red-500 to-orange-600',
      stats: 'Top Brands',
      glow: 'shadow-orange-500/25'
    },
    {
      title: 'Campaign Tools',
      description: 'AI-optimized campaigns and automated marketing strategies.',
      icon: Target,
      color: 'from-orange-500 to-red-600',
      stats: 'AI-Powered',
      glow: 'shadow-red-500/25'
    },
    {
      title: 'Instant Payouts',
      description: 'Receive instant payments in crypto or fiat for premium partners.',
      icon: Zap,
      color: 'from-red-400 to-orange-500',
      stats: 'Zero Fees',
      glow: 'shadow-orange-500/25'
    }
  ];

  const testimonials = [
    {
      name: 'Lila Martinez',
      role: 'Fashion Influencer',
      content: 'Partnering with brands through this platform grew my engagement 3x in 6 months!',
      rating: 5,
      avatar: '💃',
      revenue: '$120K'
    },
    {
      name: 'David Chen',
      role: 'Tech Content Creator',
      content: 'The AI analytics help me understand which campaigns work best instantly.',
      rating: 5,
      avatar: '🖥️',
      revenue: '$90K'
    },
    {
      name: 'Nina Kapoor',
      role: 'Fitness Coach',
      content: 'Fast payouts and global campaigns make this platform a must for influencers.',
      rating: 5,
      avatar: '💪',
      revenue: '$110K'
    }
  ];

  const handleGetStarted = () => {
    alert('Launching influencer onboarding experience...');
  };

  const StatCard = ({ number, label, prefix, delay }) => (
    <div className={`text-center transition-all duration-1000 delay-${delay} transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      <div className="relative">
        <div className="text-4xl font-bold bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent mb-2">
          {prefix}{number.toLocaleString()}+
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-orange-500 to-red-600 blur-lg opacity-20 rounded-xl"></div>
      </div>
      <div className="text-orange-200 font-medium">{label}</div>
    </div>
  );

  const BenefitCard = ({ benefit, index }) => {
    const Icon = benefit.icon;
    return (
      <div className={`group relative overflow-hidden transition-all duration-700 delay-${index * 100} transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-red-500/20 hover:border-orange-500/40 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-orange-500/20">
          <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>
          <div className={`relative w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${benefit.glow}`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">{benefit.title}</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold bg-gradient-to-r from-red-400 via-orange-500 to-red-500 bg-clip-text text-transparent">{benefit.stats}</div>
            <Sparkles className="w-4 h-4 text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </div>
      </div>
    );
  };

  const TestimonialCard = ({ testimonial }) => {
    return (
      <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-red-500/20 hover:border-orange-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-red-500/30 flex items-center justify-center text-2xl">{testimonial.avatar}</div>
          <div className="ml-4">
            <h4 className="text-white font-bold">{testimonial.name}</h4>
            <p className="text-orange-300 text-sm">{testimonial.role}</p>
          </div>
        </div>
        <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-orange-400" />
            ))}
          </div>
          <span className="text-orange-400 font-semibold">{testimonial.revenue}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="inline-flex items-center bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-8">
                  <Rocket className="w-5 h-5 text-orange-400 mr-2" />
                  <span className="text-orange-300 text-sm font-medium">Top Influencer Platform</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6">
                  Become a{' '}
                  <span className="bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent animate-gradient">
                    Influencer
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join a global network of influencers, maximize engagement with AI analytics, and get paid instantly.
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <button
                  onClick={handleGetStarted}
                  className="group relative overflow-hidden bg-gradient-to-r from-red-400 via-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-500 hover:via-orange-600 hover:to-red-700 transition-all duration-300 shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/40 transform hover:-translate-y-1 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Join Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                <button className="group border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-400 hover:text-black transition-all duration-300 backdrop-blur-sm">
                  <Calendar className="w-5 h-5 inline mr-2 group-hover:scale-110 transition-transform duration-200" />
                  Book Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <StatCard number={stats.influencers} label="Active Influencers" prefix="" delay="500" />
                <StatCard number={stats.campaigns} label="Campaigns Run" prefix="" delay="700" />
                <StatCard number={stats.followers} label="Total Followers" prefix="" delay="900" />
              </div>
            </div>

            {/* Right Hero Panel */}
            <div className={`relative transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <div className="relative bg-black/30 backdrop-blur-2xl rounded-3xl p-8 border border-red-500/30 shadow-2xl shadow-orange-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-orange-500/5 to-red-500/5 rounded-3xl"></div>
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-xl backdrop-blur-sm border border-red-500/20 hover:bg-red-500/20 transition-all duration-300">
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-orange-400 mr-2" />
                      <span className="text-gray-200">Monthly Earnings</span>
                    </div>
                    <span className="text-orange-400 font-bold text-lg">$15,432</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-orange-500/10 rounded-xl backdrop-blur-sm border border-orange-500/20 hover:bg-orange-500/20 transition-all duration-300">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-red-400 mr-2" />
                      <span className="text-gray-200">Network Reach</span>
                    </div>
                    <span className="text-red-400 font-bold text-lg">5M+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-xl backdrop-blur-sm border border-red-500/20 hover:bg-red-500/20 transition-all duration-300">
                    <div className="flex items-center">
                      <BarChart3 className="w-5 h-5 text-orange-400 mr-2" />
                      <span className="text-gray-200">Average Engagement</span>
                    </div>
                    <span className="text-orange-400 font-bold text-lg">5.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent mb-6">
              Why Join Our Influencer Network?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience top-tier collaborations, AI-driven insights, and global campaigns that grow your brand.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              Influencer Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4">
              Real influencers sharing real results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfluencerPage;
