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
  Calendar
} from 'lucide-react';

const VendorPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({ vendors: 0, sales: 0, countries: 0 });

  // Animate stats on component mount
  useEffect(() => {
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
      color: 'from-blue-500 to-cyan-500',
      stats: '150+ Countries'
    },
    {
      title: 'Secure Payments',
      description: 'Automated split payouts with Stripe, PayPal, and Mobile Money integration.',
      icon: CreditCard,
      color: 'from-green-500 to-emerald-500',
      stats: '99.9% Uptime'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time sales tracking, conversion rates, and performance insights.',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      stats: 'Real-time Data'
    },
    {
      title: 'Affiliate Network',
      description: 'Leverage our affiliate and influencer network to boost your sales.',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      stats: '50K+ Affiliates'
    },
    {
      title: 'Marketing Tools',
      description: 'Built-in email campaigns, discount codes, and social media integration.',
      icon: Target,
      color: 'from-indigo-500 to-purple-500',
      stats: 'Advanced Tools'
    },
    {
      title: 'Instant Withdrawals',
      description: '24/7 automated payouts with multiple withdrawal methods.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      stats: 'Instant Payouts'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for getting started',
      features: [
        'Up to 100 products',
        'Basic analytics',
        '5% commission fee',
        'Email support',
        'Standard withdrawal'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Professional',
      price: '$29/month',
      description: 'For growing businesses',
      features: [
        'Unlimited products',
        'Advanced analytics',
        '3% commission fee',
        'Priority support',
        'Instant withdrawals',
        'Marketing tools',
        'Custom campaigns'
      ],
      cta: 'Go Pro',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large scale operations',
      features: [
        'Everything in Pro',
        '1% commission fee',
        'Dedicated account manager',
        'Custom integrations',
        'White-label options',
        'Advanced API access'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fashion Retailer',
      content: 'Increased my sales by 300% in the first 6 months. The affiliate network is incredible!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Mike Chen',
      role: 'Electronics Vendor',
      content: 'The analytics dashboard gives me insights I never had before. Game changer!',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emma Davis',
      role: 'Handmade Crafts',
      content: 'From local to global in months. The platform handles everything seamlessly.',
      rating: 5,
      avatar: '👩‍🎨'
    }
  ];

  const handleGetStarted = (plan) => {
    // In a real app, this would navigate to registration
    alert(`Starting registration process${plan ? ` with ${plan} plan` : ''}...`);
  };

  const StatCard = ({ number, label, prefix }) => (
    <div className="text-center">
      <div className="text-3xl font-bold text-white mb-1">
        {prefix}{number.toLocaleString()}+
      </div>
                    <div className="text-blue-200">{label}</div>
    </div>
  );

  const BenefitCard = ({ benefit, index }) => {
    const Icon = benefit.icon;
    return (
      <div className="group relative bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 border-opacity-30">
        <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
        <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
        <p className="text-gray-300 mb-4">{benefit.description}</p>
        <div className="text-sm font-semibold text-blue-400">{benefit.stats}</div>
      </div>
    );
  };

  const PricingCard = ({ plan, index }) => (
    <div className={`relative bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl transition-all duration-300 border border-gray-700 border-opacity-30 ${
      plan.popular 
        ? 'ring-2 ring-blue-500 scale-105 shadow-blue-500/20' 
        : 'hover:shadow-xl hover:-translate-y-1'
    }`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-gray-300 mb-4">{plan.description}</p>
        <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={() => handleGetStarted(plan.name.toLowerCase())}
        className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
          plan.popular
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg'
            : 'bg-gray-700 bg-opacity-50 text-white hover:bg-gray-600 hover:bg-opacity-70 border border-gray-600'
        }`}
      >
        {plan.cta}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Become a{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Vendor
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Join our global marketplace and start selling to customers worldwide. 
                Get access to powerful analytics, marketing tools, and our affiliate network.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => handleGetStarted()}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Start Selling Today
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <StatCard number={stats.vendors} label="Active Vendors" prefix="" />
                <StatCard number={stats.sales} label="Total Sales" prefix="$" />
                <StatCard number={stats.countries} label="Countries" prefix="" />
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-black bg-opacity-30 backdrop-blur-xl rounded-3xl p-8 border border-gray-600 border-opacity-30">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
                    <span className="text-gray-200">Monthly Revenue</span>
                    <span className="text-yellow-400 font-bold">$12,847</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
                    <span className="text-gray-200">Orders This Week</span>
                    <span className="text-green-400 font-bold">234</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
                    <span className="text-gray-200">Conversion Rate</span>
                    <span className="text-blue-400 font-bold">8.3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to grow your business, from product management to global sales.
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
      <section className="py-24 bg-black bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300">
              Start free and scale as you grow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of successful vendors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 relative border border-gray-700 border-opacity-30">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Selling?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our platform today and start reaching customers worldwide
          </p>
          <button
            onClick={() => handleGetStarted()}
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default VendorPage;