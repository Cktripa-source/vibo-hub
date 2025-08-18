import React, { useState, useEffect } from 'react';
import {
  Play,
  ArrowRight,
  CheckCircle,
  Store,
  Share2,
  Users,
  Upload,
  BarChart,
  Shield,
  ShoppingBag,
  Clock,
  CreditCard,
  Target,
  LineChart,
  Briefcase,
  X,
  Sparkles,
  Zap,
  TrendingUp,
  Globe,
  Star,
  Rocket,
  Award,
  Eye,
  Heart
} from 'lucide-react';

const HeroSection = () => {
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeRole, setActiveRole] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentStats, setCurrentStats] = useState({
    earnings: 12847.50,
    products: 247,
    commission: 2847,
    users: 25000
  });

  // Mock auth and navigation for demo
  const isAuthenticated = false;
  const navigate = (path, options) => console.log('Navigate to:', path, options);

  useEffect(() => {
    setIsVisible(true);

    // Animate stats with more realistic increments
    const interval = setInterval(() => {
      setCurrentStats(prev => ({
        earnings: prev.earnings + Math.random() * 50,
        products: prev.products + (Math.random() > 0.8 ? 1 : 0),
        commission: prev.commission + Math.random() * 25,
        users: prev.users + Math.floor(Math.random() * 3)
      }));
    }, 3000);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      setShowRoleModal(true);
    }
  };

  const handleRoleSelection = (role) => {
    setShowRoleModal(false);
    navigate('/register', { state: { selectedRole: role } });
  };

  const roles = [
    {
      id: 'vendor',
      title: 'Vendor',
      description: 'Sell your products and reach global customers',
      features: [
        { text: 'Upload unlimited products', icon: Upload },
        { text: 'Advanced analytics & insights', icon: BarChart },
        { text: 'Secure payments & escrow', icon: Shield },
        { text: 'Global marketplace reach', icon: Globe }
      ],
      icon: Store,
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:from-blue-400 hover:to-cyan-400',
      badge: 'Popular',
      earnings: '$15,000+/month'
    },
    {
      id: 'affiliate',
      title: 'Affiliate',
      description: 'Promote products and earn lucrative commissions',
      features: [
        { text: 'Choose from 10,000+ products', icon: ShoppingBag },
        { text: 'Real-time performance tracking', icon: Clock },
        { text: 'Weekly automated payouts', icon: CreditCard },
        { text: 'AI-powered recommendations', icon: Sparkles }
      ],
      icon: Share2,
      color: 'from-green-500 to-emerald-500',
      hoverColor: 'hover:from-green-400 hover:to-emerald-400',
      badge: 'High Earning',
      earnings: '$8,500+/month'
    },
    {
      id: 'influencer',
      title: 'Influencer',
      description: 'Create campaigns and monetize your audience',
      features: [
        { text: 'Advanced campaign management', icon: Target },
        { text: 'Detailed performance metrics', icon: LineChart },
        { text: 'Premium brand partnerships', icon: Briefcase },
        { text: 'Creator fund access', icon: Star }
      ],
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-400 hover:to-pink-400',
      badge: 'Creator Focused',
      earnings: '$12,000+/month'
    },
    {
      id: 'buyer',
      title: 'Buyer',
      description: 'Discover and purchase amazing products',
      features: [
        { text: 'Curated premium marketplace', icon: ShoppingBag },
        { text: 'Secure checkout & protection', icon: Shield },
        { text: 'Express worldwide delivery', icon: Clock },
        { text: 'Exclusive member discounts', icon: Zap }
      ],
      icon: ShoppingBag,
      color: 'from-orange-500 to-red-500',
      hoverColor: 'hover:from-orange-400 hover:to-red-400',
      badge: 'New',
      earnings: 'Save 30%+'
    }
  ];

  const testimonials = [
    { name: "Sarah Chen", role: "vendor", earning: "$23K", avatar: "👩‍💼", rating: 5 },
    { name: "Mike Torres", role: "affiliate", earning: "$18K", avatar: "👨‍💻", rating: 5 },
    { name: "Emma Wilson", role: "influencer", earning: "$35K", avatar: "👩‍🎨", rating: 5 },
    { name: "David Kim", role: "vendor", earning: "$41K", avatar: "👨‍🚀", rating: 5 },
    { name: "Lisa Rodriguez", role: "affiliate", earning: "$29K", avatar: "👩‍🔬", rating: 5 }
  ];

  const socialProof = [
    { label: "Active Users", value: currentStats.users.toLocaleString(), icon: Users },
    { label: "Products Listed", value: "50K+", icon: ShoppingBag },
    { label: "Countries", value: "180+", icon: Globe },
    { label: "Success Rate", value: "97%", icon: Award }
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Ultra-modern gradient background system */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/30 to-blue-950/40"></div>

        {/* Interactive mesh gradient following mouse */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none transition-all duration-1000 ease-out"
          style={{
            background: `
              radial-gradient(1200px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                rgba(168, 85, 247, 0.2), 
                rgba(59, 130, 246, 0.15) 20%, 
                rgba(249, 115, 22, 0.1) 40%, 
                rgba(34, 197, 94, 0.08) 60%,
                transparent 80%)
            `
          }}
        ></div>

        {/* Enhanced animated orbs with glassmorphism */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-500/25 to-pink-500/20 rounded-full blur-3xl animate-float-slow backdrop-blur-3xl"></div>
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/25 to-purple-500/20 rounded-full blur-3xl animate-float-delayed backdrop-blur-3xl"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-500/25 to-cyan-500/20 rounded-full blur-3xl animate-float backdrop-blur-3xl"></div>
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/15 rounded-full blur-3xl animate-pulse backdrop-blur-3xl"></div>
          <div className="absolute bottom-40 right-1/4 w-56 h-56 bg-gradient-to-br from-pink-500/20 to-rose-500/15 rounded-full blur-3xl animate-float-delayed backdrop-blur-3xl"></div>
        </div>

        {/* Dynamic floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float-particle-${i % 3} opacity-60`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${4 + (i % 4)}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Enhanced Hero Content */}
            <div className={`text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>

              {/* Dynamic announcement banner with micro-interactions */}
              <div className="mb-8 relative group">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 rounded-full text-white text-sm font-medium hover:scale-105 transition-all duration-300 shadow-2xl group cursor-pointer">
                  <Sparkles className="w-4 h-4 mr-2 text-yellow-400 animate-spin-slow" />
                  🚀 Join {currentStats.users.toLocaleString()}+ Users Growing Daily
                  <TrendingUp className="w-4 h-4 ml-2 text-green-400 animate-bounce" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>

              {/* Main headline with enhanced typography and staggered animation */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
                <div className="overflow-hidden">
                  <span className="inline-block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 text-transparent bg-clip-text animate-gradient-x bg-[length:200%_200%] animate-slide-up">
                    Sell. Promote.
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="inline-block text-white animate-slide-up delay-200">Earn.</span>
                </div>
                <div className="overflow-hidden">
                  <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text animate-gradient-x bg-[length:200%_200%] animate-slide-up delay-300">
                    Globally.
                  </span>
                </div>
              </h1>

              {/* Enhanced description with highlighted keywords */}
              <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed animate-fade-in-up delay-500">
                The world's most advanced platform connecting
                <span className="text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text font-semibold mx-1">vendors</span>,
                <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text font-semibold mx-1">affiliates</span>, and
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold mx-1">influencers</span>.
                Start your journey today and unlock unlimited earning potential with AI-powered insights and real-time analytics.
              </p>

              {/* Enhanced CTA buttons with advanced hover effects */}
              <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-fade-in-up delay-700">
                <button
                  onClick={handleGetStarted}
                  className="group relative bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-10 py-5 text-xl font-bold rounded-3xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Zap className="w-6 h-6 animate-pulse" />
                    Get Started Free
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-purple-400 rounded-3xl blur animate-pulse"></div>
                  </div>
                </button>

                <button className="group bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white px-10 py-5 text-xl font-bold rounded-3xl hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 transform hover:-translate-y-1">
                  <span className="flex items-center justify-center gap-3">
                    <div className="relative">
                      <Play className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    Watch Demo
                  </span>
                </button>
              </div>

              {/* Enhanced social proof section */}
              <div className="space-y-8 animate-fade-in-up delay-900">
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-2 group">
                    <CheckCircle className="w-5 h-5 text-green-400 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-green-300 transition-colors duration-300 font-medium">Free to join</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <CheckCircle className="w-5 h-5 text-green-400 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-green-300 transition-colors duration-300 font-medium">No setup fees</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <CheckCircle className="w-5 h-5 text-green-400 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-gray-300 group-hover:text-green-300 transition-colors duration-300 font-medium">24/7 AI support</span>
                  </div>
                </div>

                {/* Live testimonials ticker with ratings */}
                <div className="flex items-center space-x-6 overflow-hidden">
                  <span className="text-gray-400 text-sm font-medium flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Live earnings:
                  </span>
                  <div className="flex animate-scroll-x gap-6">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                      <div key={index} className="flex items-center space-x-3 mx-2 bg-white/8 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/10 hover:bg-white/12 transition-all duration-300 group cursor-pointer">
                        <span className="text-2xl">{testimonial.avatar}</span>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="text-white font-medium text-sm">{testimonial.name}</span>
                            <div className="flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <span className="text-green-400 font-bold text-sm">+{testimonial.earning}/mo</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social proof metrics grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  {socialProof.map((item, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/8 transition-all duration-300 group">
                      <item.icon className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Hero Visualization Dashboard */}
            <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-[2rem] p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 group">

                {/* Enhanced animated glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 rounded-[2rem] opacity-30 blur group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>

                <div className="relative space-y-8">
                  {/* Enhanced dashboard header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <BarChart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-white font-bold text-xl">Live Dashboard</span>
                        <div className="text-sm text-gray-400 flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          Real-time analytics
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-400"></div>
                    </div>
                  </div>

                  {/* Main earnings card with enhanced live updates */}
                  <div className="relative bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 hover:from-blue-600/40 hover:via-purple-600/40 hover:to-pink-600/30 transition-all duration-500 group/card overflow-hidden">

                    {/* Enhanced animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover/card:translate-x-[-100%] transition-transform duration-1000"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-blue-400 font-medium flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 animate-bounce" />
                          Total Earnings
                        </div>
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-yellow-400 animate-spin-slow" />
                          <div className="px-2 py-1 bg-green-400/20 rounded-full text-xs text-green-300 font-medium">LIVE</div>
                        </div>
                      </div>
                      <div className="text-4xl font-black text-white mb-3 tabular-nums group-hover/card:scale-105 transition-transform duration-300">
                        ${currentStats.earnings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                      <div className="flex items-center text-sm text-green-400 font-medium">
                        <ArrowRight className="w-4 h-4 rotate-[-45deg] mr-1 animate-bounce" />
                        +23.5% from last month
                        <Heart className="w-4 h-4 ml-2 text-red-400 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced metrics grid with micro-interactions */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group/metric cursor-pointer">
                      <div className="text-xs text-gray-400 mb-2 flex items-center">
                        <ShoppingBag className="w-3 h-3 mr-1" />
                        Products Sold
                      </div>
                      <div className="text-2xl font-black text-white tabular-nums group-hover/metric:scale-110 transition-transform duration-300">
                        {Math.floor(currentStats.products)}
                      </div>
                      <div className="text-xs text-green-400 mt-1 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +12 today
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group/metric cursor-pointer">
                      <div className="text-xs text-gray-400 mb-2 flex items-center">
                        <CreditCard className="w-3 h-3 mr-1" />
                        Commission
                      </div>
                      <div className="text-2xl font-black text-white tabular-nums group-hover/metric:scale-110 transition-transform duration-300">
                        ${Math.floor(currentStats.commission).toLocaleString()}
                      </div>
                      <div className="text-xs text-green-400 mt-1 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +$247 today
                      </div>
                    </div>
                  </div>

                  {/* Interactive 3D-style chart visualization */}
                  <div className="relative h-32 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden group/chart hover:bg-white/8 transition-all duration-300">
                    <div className="absolute inset-0 flex items-end justify-center p-4 gap-1">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-blue-500 via-purple-500 to-orange-500 rounded-t opacity-70 hover:opacity-100 transition-all duration-300 animate-pulse cursor-pointer hover:scale-110 transform origin-bottom"
                          style={{
                            width: '12px',
                            height: `${30 + Math.sin(i * 0.5) * 30 + Math.random() * 20}px`,
                            animationDelay: `${i * 0.1}s`,
                            boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)'
                          }}
                        ></div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 group-hover/chart:to-white/10 transition-all duration-300"></div>
                    <div className="absolute bottom-2 left-4 text-xs text-gray-400">Performance Metrics</div>
                    <div className="absolute top-2 right-4 text-xs text-green-400 flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +34.2%
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating achievement badges */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-3xl flex items-center justify-center text-white font-black text-xl shadow-2xl animate-float hover:animate-pulse cursor-pointer group">
                <div className="relative flex flex-col items-center">
                  <Rocket className="w-6 h-6 mb-1 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-xs">+$</span>
                </div>
                <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-spin" />
              </div>

              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl animate-bounce hover:animate-pulse cursor-pointer group">
                <div className="text-2xl group-hover:scale-125 transition-transform duration-300">📊</div>
              </div>

              <div className="absolute top-1/2 -right-6 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl animate-pulse hover:animate-bounce cursor-pointer group">
                <CheckCircle className="w-8 h-8 group-hover:scale-125 transition-transform duration-300" />
              </div>

              {/* New floating success indicator */}
              <div className="absolute top-8 -left-6 w-18 h-18 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-xl animate-float-delayed cursor-pointer group">
                <Award className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-modern Role Selection Modal */}
      {showRoleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => setShowRoleModal(false)}
          ></div>

          <div className="relative bg-gradient-to-br from-gray-900/90 via-purple-900/20 to-blue-900/30 backdrop-blur-3xl border border-white/30 rounded-[3rem] p-12 w-full max-w-7xl max-h-[90vh] overflow-y-auto animate-scale-in shadow-2xl">
            {/* Enhanced close button */}
            <button
              onClick={() => setShowRoleModal(false)}
              className="absolute top-8 right-8 text-gray-400 hover:text-white transition-all duration-300 z-10 p-3 hover:bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Modal header with enhanced animations */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/20 backdrop-blur-xl rounded-full mb-6 border border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <Sparkles className="w-5 h-5 mr-2 text-yellow-400 animate-spin-slow" />
                <span className="text-purple-300 text-lg font-medium">Choose Your Path to Success</span>
                <Rocket className="w-5 h-5 ml-2 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>

              <h2 className="text-6xl font-black text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 text-transparent bg-clip-text animate-gradient-x bg-[length:200%_200%]">
                  Start Your Journey
                </span>
              </h2>

              <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Select your role and unlock personalized features, AI-powered tools, and
                <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text font-semibold mx-1">exclusive opportunities</span>
                designed for your success
              </p>
            </div>

            {/* Enhanced role cards grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {roles.map((role, index) => (
                <div
                  key={role.id}
                  onClick={() => handleRoleSelection(role.id)}
                  onMouseEnter={() => setActiveRole(index)}
                  onMouseLeave={() => setActiveRole(null)}
                  className={`cursor-pointer group relative bg-white/8 backdrop-blur-2xl hover:bg-white/12 border border-white/20 hover:border-white/40 rounded-[2rem] p-10 transition-all duration-700 hover:scale-105 hover:shadow-2xl transform origin-center ${activeRole === index ? 'scale-105 shadow-2xl bg-white/12 border-white/40' : ''
                    }`}
                  style={{
                    backgroundImage: activeRole === index ? `linear-gradient(135deg, ${role.color.split(' ')[1]}/10, ${role.color.split(' ')[3]}/5)` : 'none'
                  }}
                >
                  {/* Enhanced glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${role.color} rounded-[2rem] opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm`}></div>

                  {/* Role badge with enhanced styling */}
                  <div className="absolute top-6 right-6">
                    <div className={`px-4 py-2 bg-gradient-to-r ${role.color} rounded-2xl text-white text-sm font-bold shadow-lg border border-white/20 backdrop-blur-sm hover:scale-110 transition-transform duration-300`}>
                      {role.badge}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start mb-8">
                      <div className={`w-24 h-24 bg-gradient-to-br ${role.color} ${role.hoverColor} rounded-[1.5rem] flex items-center justify-center text-white mr-8 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-white/20`}>
                        <role.icon className="w-12 h-12" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-4xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                          {role.title}
                        </h3>
                        <p className="text-gray-400 text-xl mb-4 group-hover:text-gray-300 transition-colors duration-300">
                          {role.description}
                        </p>
                        <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${role.color} bg-opacity-20 backdrop-blur-sm rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300`}>
                          <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                          <span className="text-white font-bold text-lg">{role.earnings}</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced features list */}
                    <ul className="space-y-5 mb-10">
                      {role.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                          <div className={`w-10 h-10 bg-gradient-to-br from-green-500/30 to-emerald-500/30 border border-green-500/50 rounded-2xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-green-500/50 group-hover:to-emerald-500/50 transition-all duration-300`}>
                            <feature.icon className="w-5 h-5 text-green-400" />
                          </div>
                          <span className="font-semibold text-lg">{feature.text}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Enhanced action button */}
                    <div className={`relative overflow-hidden px-10 py-5 bg-gradient-to-r ${role.color} ${role.hoverColor} rounded-3xl text-center text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-2xl border border-white/20`}>
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <Zap className="w-6 h-6" />
                        Start as {role.title}
                        <ArrowRight className="w-6 h-6" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced footer section */}
            <div className="text-center space-y-6">
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
                <div className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-300 cursor-pointer group">
                  <Shield className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">100% Secure</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer group">
                  <Globe className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">Global Platform</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer group">
                  <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">AI-Powered</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors duration-300 cursor-pointer group">
                  <Clock className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>

              {/* Alternative action */}
              <button
                onClick={() => setShowRoleModal(false)}
                className="text-gray-400 hover:text-white transition-all duration-300 text-xl font-medium hover:bg-white/5 px-8 py-3 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105"
              >
                I'll explore all options first
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced CSS animations and styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(2deg); }
        }

        @keyframes float-particle-0 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-30px) translateX(15px) scale(1.2); opacity: 1; }
        }

        @keyframes float-particle-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-40px) translateX(-20px) scale(1.5); opacity: 0.8; }
        }

        @keyframes float-particle-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.5; }
          50% { transform: translateY(-35px) translateX(25px) scale(1.3); opacity: 0.9; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(40px) scale(0.98); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        @keyframes scroll-x {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; backdrop-filter: blur(0px); }
          to { opacity: 1; backdrop-filter: blur(20px); }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.9) translateY(20px); 
            backdrop-filter: blur(0px);
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
            backdrop-filter: blur(30px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.4); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(147, 51, 234, 0.4); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-float-particle-0 {
          animation: float-particle-0 6s ease-in-out infinite;
        }

        .animate-float-particle-1 {
          animation: float-particle-1 8s ease-in-out infinite;
        }

        .animate-float-particle-2 {
          animation: float-particle-2 7s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-900 { animation-delay: 900ms; }

        /* Enhanced glassmorphism effect */
        .backdrop-blur-3xl {
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
        }

        /* Enhanced gradient text effect */
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }

        /* Smooth scrolling for testimonials */
        .animate-scroll-x {
          display: flex;
          animation: scroll-x 30s linear infinite;
        }

        /* Enhanced hover effects */
        .group:hover .group-hover:scale-125 {
          transform: scale(1.25);
        }

        .group:hover .group-hover:rotate-12 {
          transform: rotate(12deg);
        }

        /* Custom scrollbar for modal */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
          border-radius: 10px;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #db2777);
        }
      `}</style>
    </>
  );
};

export default HeroSection;