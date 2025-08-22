import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  CreditCard, 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  BarChart3, 
  Zap, 
  Shield, 
  Target, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  Star,
  Calendar,
  Sparkles,
  Rocket,
  Award
} from 'lucide-react';
import Header from '../components/common/Header';

const VendorPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({ vendors: 0, sales: 0, countries: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Animate stats and components on mount
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setStats({ vendors: 25000, sales: 2400000, countries: 150 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      title: 'Global Marketplace',
      description: 'Reach customers in 150+ countries with multi-currency and multi-language support.',
      icon: Globe,
      color: 'from-emerald-400 to-green-500',
      stats: '150+ Countries',
      glow: 'shadow-emerald-500/25'
    },
    {
      title: 'Secure Payments',
      description: 'Automated split payouts with Stripe, PayPal, and Mobile Money integration.',
      icon: Shield,
      color: 'from-green-400 to-emerald-600',
      stats: '99.9% Uptime',
      glow: 'shadow-green-500/25'
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Machine learning insights, predictive analytics, and real-time performance tracking.',
      icon: BarChart3,
      color: 'from-teal-400 to-emerald-500',
      stats: 'Real-time AI',
      glow: 'shadow-teal-500/25'
    },
    {
      title: 'Influencer Network',
      description: 'Access our network of 50K+ verified influencers and content creators.',
      icon: Users,
      color: 'from-emerald-500 to-green-600',
      stats: '50K+ Influencers',
      glow: 'shadow-emerald-500/25'
    },
    {
      title: 'Smart Marketing',
      description: 'AI-driven campaigns, automated A/B testing, and personalized customer journeys.',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      stats: 'AI-Powered',
      glow: 'shadow-green-500/25'
    },
    {
      title: 'Lightning Payouts',
      description: 'Instant crypto and fiat withdrawals with zero fees for premium members.',
      icon: Zap,
      color: 'from-lime-400 to-green-500',
      stats: 'Zero Fees',
      glow: 'shadow-lime-500/25'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for testing the waters',
      features: [
        'Up to 100 products',
        'Basic AI analytics',
        '5% commission fee',
        'Email support',
        'Standard withdrawal'
      ],
      cta: 'Start Free',
      popular: false,
      gradient: 'from-gray-700 to-gray-800'
    },
    {
      name: 'Pro',
      price: '$29/month',
      description: 'For serious entrepreneurs',
      features: [
        'Unlimited products',
        'Advanced AI insights',
        '2% commission fee',
        'Priority support',
        'Instant crypto payouts',
        'Influencer network access',
        'Custom AI campaigns',
        'White-label options'
      ],
      cta: 'Go Pro',
      popular: true,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For scaling unicorns',
      features: [
        'Everything in Pro',
        '0% commission fee',
        'Dedicated AI specialist',
        'Custom ML models',
        'API-first architecture',
        'Blockchain integration',
        '24/7 white-glove support'
      ],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'from-green-600 to-emerald-700'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'AI Fashion Startup',
      content: '10x growth in 6 months. The AI recommendations alone increased my conversion by 400%!',
      rating: 5,
      avatar: '🚀',
      revenue: '$2.4M ARR'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Tech Gadgets',
      content: 'The influencer network is insane. Went from 0 to 100K followers organically.',
      rating: 5,
      avatar: '⚡',
      revenue: '$890K'
    },
    {
      name: 'Zoe Kim',
      role: 'Digital Artist',
      content: 'Crypto payouts changed my life. No more waiting weeks for international transfers.',
      rating: 5,
      avatar: '🎨',
      revenue: '$1.2M'
    }
  ];

  const handleGetStarted = (plan) => {
    alert(`Launching ${plan ? plan : 'registration'} experience...`);
  };

  const StatCard = ({ number, label, prefix, delay }) => (
    <div className={`text-center transition-all duration-1000 delay-${delay} transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      <div className="relative">
        <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
          {prefix}{number.toLocaleString()}+
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 blur-lg opacity-20"></div>
      </div>
      <div className="text-emerald-200 font-medium">{label}</div>
    </div>
  );

  const BenefitCard = ({ benefit, index }) => {
    const Icon = benefit.icon;
    return (
      
      <div className={`group relative overflow-hidden transition-all duration-700 delay-${index * 100} transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        
        <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-emerald-500/20">
          {/* Animated gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-500`}></div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
            <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
          </div>
          
          <div className={`relative w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${benefit.glow}`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
            {benefit.title}
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              {benefit.stats}
            </div>
            <Sparkles className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </div>
      </div>
    );
  };

  const PricingCard = ({ plan, index }) => (
    <div className={`relative transition-all duration-700 delay-${index * 200} transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
    }`}>
      <div className={`relative overflow-hidden bg-black/40 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 ${
        plan.popular 
          ? 'border-emerald-400/50 scale-105 shadow-2xl shadow-emerald-500/25' 
          : 'border-emerald-500/20 hover:border-emerald-400/40 hover:shadow-xl hover:-translate-y-2 hover:shadow-emerald-500/10'
      }`}>
        
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur opacity-50"></div>
            </div>
          </div>
        )}
        
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-10 transition-all duration-500`}></div>
        
        <div className="relative text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <p className="text-gray-300 mb-6">{plan.description}</p>
          <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
            {plan.price}
          </div>
        </div>
        
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center group/item">
              <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
              <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={() => handleGetStarted(plan.name.toLowerCase())}
          className={`relative w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
            plan.popular
              ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-600 hover:to-green-600 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30'
              : 'bg-emerald-900/20 text-emerald-400 hover:bg-emerald-900/40 border border-emerald-500/30 hover:border-emerald-400/50'
          } hover:scale-105`}
        >
          <span className="relative z-10 flex items-center justify-center">
            {plan.cta}
            <ArrowRight className="w-4 h-4 ml-2" />
          </span>
          {plan.popular && (
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8">
                  <Rocket className="w-5 h-5 text-emerald-400 mr-2" />
                  <span className="text-emerald-300 text-sm font-medium">Next-Gen Vendor Platform</span>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6">
                  Become a{' '}
                  <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                    Vendor
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join the future of commerce. AI-powered insights, instant crypto payouts, 
                  and a network of 50K+ influencers ready to amplify your brand.
                </p>
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <button
                  onClick={() => handleGetStarted()}
                  className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/40 transform hover:-translate-y-1 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Start Selling Today
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                <button className="group border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 hover:text-black transition-all duration-300 backdrop-blur-sm">
                  <PlayCircle className="w-5 h-5 inline mr-2 group-hover:scale-110 transition-transform duration-200" />
                  Watch Demo
                </button>
              </div>
              
              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-8">
                <StatCard number={stats.vendors} label="AI-Powered Vendors" prefix="" delay="500" />
                <StatCard number={stats.sales} label="Platform Revenue" prefix="$" delay="700" />
                <StatCard number={stats.countries} label="Global Reach" prefix="" delay="900" />
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <div className="relative bg-black/30 backdrop-blur-2xl rounded-3xl p-8 border border-emerald-500/30 shadow-2xl shadow-emerald-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5 rounded-3xl"></div>
                
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between p-4 bg-emerald-500/10 rounded-xl backdrop-blur-sm border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-300">
                    <div className="flex items-center">
                      <DollarSign className="w-5 h-5 text-emerald-400 mr-2" />
                      <span className="text-gray-200">Monthly Revenue</span>
                    </div>
                    <span className="text-emerald-400 font-bold text-lg">$12,847</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-xl backdrop-blur-sm border border-green-500/20 hover:bg-green-500/20 transition-all duration-300">
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-gray-200">AI Conversions</span>
                    </div>
                    <span className="text-green-400 font-bold text-lg">+340%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-teal-500/10 rounded-xl backdrop-blur-sm border border-teal-500/20 hover:bg-teal-500/20 transition-all duration-300">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-teal-400 mr-2" />
                      <span className="text-gray-200">Influencer Reach</span>
                    </div>
                    <span className="text-teal-400 font-bold text-lg">2.4M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the future of e-commerce with AI-driven insights, blockchain payments, and viral marketing tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-green-500/10 to-emerald-500/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300">
              Start free, scale with AI, dominate with enterprise features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Real entrepreneurs, real results, real growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`group relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 delay-${index * 200}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-emerald-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-emerald-400 font-bold text-sm bg-emerald-500/10 px-3 py-1 rounded-full">
                      {testimonial.revenue}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-emerald-400 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Build Your Empire?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Join the next generation of entrepreneurs leveraging AI, blockchain, and social influence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleGetStarted()}
              className="group relative overflow-hidden bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 backdrop-blur-sm">
              <Calendar className="w-5 h-5 inline mr-2" />
              Book Demo
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default VendorPage;