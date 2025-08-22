import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  User,
  LogOut,
  Settings,
  BarChart3,
  Sparkles,
  Zap,
  ShoppingBag,
  Store,
  Users,
  Star,
  Bell,
  Search,
  Globe,
  Crown,
  Shield,
  TrendingUp,
  Wallet,
  Gift,
  ChevronDown,
  Home,
  Rocket
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications] = useState([
    { id: 1, type: 'earning', message: 'New commission earned: $125.50', time: '2m ago', read: false },
    { id: 2, type: 'sale', message: 'Product sold: Premium Headphones', time: '15m ago', read: false },
    { id: 3, type: 'milestone', message: 'Congratulations! 1000 sales milestone', time: '1h ago', read: true }
  ]);

  const { user, isAuthenticated, logout: authLogout } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleNotifications = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleLogout = async () => {
    try {
      await authLogout();
      setIsUserMenuOpen(false);
      window.location.href = '/'; // Redirect to home page after logout
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('Failed to logout. Please try again.');
    }
  };

  const getDashboardPath = () => {
    if (!user) return '/';
    switch (user.role) {
      case 'vendor':
        return '/vendor-dashboard';
      case 'affiliate':
        return '/affiliate-dashboard';
      case 'influencer':
        return '/influencer-dashboard';
      default:
        return '/';
    }
  };

  const navLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag, color: 'from-blue-500 to-cyan-500' },
    { name: 'Vendors', href: '/become-vendor', icon: Store, color: 'from-green-500 to-emerald-500' },
    { name: 'Affiliates', href: '/become-affiliate', icon: Users, color: 'from-purple-500 to-pink-500' },
    { name: 'Influencers', href: '/influencers', icon: Star, color: 'from-orange-500 to-red-500' },
  ];

  const unreadNotifications = notifications.filter(n => !n.read).length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClickOutside = (e) => {
      if (!e.target.closest('.user-menu') && !e.target.closest('.user-menu-button')) {
        setIsUserMenuOpen(false);
      }
      if (!e.target.closest('.notification-menu') && !e.target.closest('.notification-button')) {
        setIsNotificationOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'earning': return Wallet;
      case 'sale': return ShoppingBag;
      case 'milestone': return Crown;
      default: return Bell;
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'vendor': return Store;
      case 'affiliate': return Users;
      case 'influencer': return Star;
      default: return User;
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
        ? 'bg-black/30 backdrop-blur-3xl border-b border-white/10 shadow-2xl shadow-purple-500/5'
        : 'bg-transparent'
        }`}>

        {/* Enhanced animated gradient border */}
        <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-shimmer-wave"></div>
        </div>

        {/* Enhanced dynamic glow effect following mouse - desktop only */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-700 hidden lg:block"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(139, 69, 193, 0.15), 
              rgba(59, 130, 246, 0.08) 30%, 
              rgba(249, 115, 22, 0.05) 50%, 
              transparent 70%)`
          }}
        ></div>

        <nav className="max-w-[1500px] mx-auto px-7 py-3 sm:px-4 lg:px-6 xl:px-8 relative">
          <div className="flex justify-between items-center h-16 lg:h-14">

            {/* Compact Logo for desktop */}
           <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
  <div className="relative">
    <div className="w-12 h-10 lg:w-8 lg:h-8 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl lg:rounded-xl flex items-center justify-center shadow-xl shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 border border-white/20">
      <span className="text-white font-black text-lg lg:text-sm tracking-tight">V</span>
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl lg:rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
    </div>
    <div className="absolute -top-1 -right-1 w-4 h-4 lg:w-3 lg:h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
      <Sparkles className="w-2 h-2 lg:w-1.5 lg:h-1.5 text-white" />
    </div>
  </div>
  <div className="group-hover:translate-x-1 transition-transform duration-300">
    <div className="text-2xl lg:text-xl font-black bg-gradient-to-r from-white via-purple-100 to-orange-200 text-transparent bg-clip-text">
      VIBO HUB
    </div>
    <div className="text-xs lg:text-xs text-orange-400 font-semibold -mt-1 flex items-center">
      <Rocket className="w-2.5 h-2.5 lg:w-2 lg:h-2 mr-1 animate-pulse" />
      Next-Gen Commerce
    </div>
  </div>
</Link>

            {/* Compact Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative px-6 py-4 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/8 backdrop-blur-sm border border-transparent hover:border-white/10"
                >
                  <span className="flex items-center space-x-2">
                    <div className={`w-6 h-6 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 border border-white/20`}>
                      <link.icon className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-medium text-xl">{link.name}</span>
                  </span>

                  {/* Compact animated underline */}
                  <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-2/3 transform -translate-x-1/2 rounded-full shadow-lg"></div>

                  {/* Compact hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 rounded-xl transition-all duration-500 -z-10 blur-sm`}></div>
                </a>
              ))}
            </div>

            {/* Compact Search Bar (Desktop) */}
            <div className="hidden xl:flex items-center">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search marketplace..."
                  className="w-64 pl-10 pr-12 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 hover:bg-white/15"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <kbd className="px-4 py-0.5 text-xs font-medium text-gray-400 bg-white/10 border border-white/20 rounded-md">⌘K</kbd>
                </div>
              </div>
            </div>

            {/* Compact Auth Section */}
            <div className="hidden md:flex items-center space-x-3">
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">

                  {/* Compact Notifications */}
                  <div className="relative">
                    <button
                      onClick={toggleNotifications}
                      className="notification-button relative p-2 rounded-xl hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm border border-white/10 hover:border-purple-500/30"
                    >
                      <Bell className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300" />
                      {unreadNotifications > 0 && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <span className="text-white text-xs font-bold">{unreadNotifications}</span>
                        </div>
                      )}
                    </button>

                    {/* Compact Notifications Dropdown */}
                    {isNotificationOpen && (
                      <div className="notification-menu absolute right-0 mt-2 w-80 bg-black/50 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden animate-slideIn">
                        <div className="px-4 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-white/10">
                          <div className="flex items-center justify-between">
                            <h3 className="text-base font-bold text-white flex items-center">
                              <Bell className="w-4 h-4 mr-2" />
                              Notifications
                            </h3>
                            <div className="px-2 py-1 bg-orange-500/20 rounded-lg">
                              <span className="text-orange-300 text-xs font-medium">{unreadNotifications} new</span>
                            </div>
                          </div>
                        </div>
                        <div className="max-h-72 overflow-y-auto">
                          {notifications.map((notification) => {
                            const IconComponent = getNotificationIcon(notification.type);
                            return (
                              <div key={notification.id} className={`px-4 py-3 hover:bg-white/5 transition-all duration-300 border-b border-white/5 last:border-b-0 ${!notification.read ? 'bg-purple-500/5' : ''}`}>
                                <div className="flex items-start space-x-3">
                                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${notification.type === 'earning' ? 'bg-green-500/20 text-green-400' :
                                    notification.type === 'sale' ? 'bg-blue-500/20 text-blue-400' :
                                      'bg-yellow-500/20 text-yellow-400'
                                    }`}>
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-white text-sm font-medium">{notification.message}</p>
                                    <p className="text-gray-400 text-xs mt-0.5">{notification.time}</p>
                                  </div>
                                  {!notification.read && (
                                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="px-4 py-3 bg-white/5 border-t border-white/10">
                          <button className="w-full text-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300">
                            View All Notifications
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Compact User Menu */}
                  <div className="relative">
                    <button
                      onClick={toggleUserMenu}
                      className="user-menu-button flex items-center space-x-1 p-2 rounded-2xl hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm border border-white/10 hover:border-purple-500/30"
                    >
                      <div className="relative">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 border border-white/20">
                          <span className="text-white font-bold text-sm">{user?.email?.charAt(0)?.toUpperCase() || user?.name?.charAt(0)?.toUpperCase() || 'U'}</span>
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border border-gray-900 rounded-full animate-pulse flex items-center justify-center">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:rotate-180" />
                    </button>

                    {/* Compact User Dropdown Menu */}
                    {isUserMenuOpen && (
                      <div className="user-menu absolute right-0 mt-2 w-72 bg-black/50 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden animate-slideIn">

                        {/* Compact Header with earnings */}
                        <div className="px-4 py-4 bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-blue-600/20 border-b border-white/10">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-xl border border-white/20">
                              <span className="text-white font-bold text-lg">{user?.email?.charAt(0)?.toUpperCase() || user?.name?.charAt(0)?.toUpperCase() || 'U'}</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">{user?.name}</p>
                              <p className="text-sm text-gray-400 truncate">{user?.email}</p>
                              <p className="text-sm text-gray-400 capitalize flex items-center mb-1">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                {user?.role} • Online
                              </p>
                              <div className="flex items-center text-xs">
                                <Crown className="w-3 h-3 text-yellow-400 mr-1" />
                                <span className="text-yellow-300 font-medium">{user?.level} Member</span>
                              </div>
                            </div>
                          </div>

                          {/* Compact Earnings Display */}
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-gray-400 text-xs">Total Earnings</p>
                                <p className="text-xl font-bold text-white">${(user?.earnings || 0).toLocaleString()}</p>
                              </div>
                              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Compact Menu Items */}
                        <div className="py-2">
                          <a
                            href={getDashboardPath()}
                            className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 group"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                              <BarChart3 className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">Dashboard</div>
                              <div className="text-xs text-gray-500">Analytics & insights</div>
                            </div>
                          </a>

                          <a
                            href="/wallet"
                            className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 group"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 border border-green-500/20">
                              <Wallet className="w-4 h-4 text-green-400" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">Wallet</div>
                              <div className="text-xs text-gray-500">Payments & withdrawals</div>
                            </div>
                          </a>

                          <a
                            href="/rewards"
                            className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 group"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 border border-yellow-500/20">
                              <Gift className="w-4 h-4 text-yellow-400" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">Rewards</div>
                              <div className="text-xs text-gray-500">Loyalty points & bonuses</div>
                            </div>
                          </a>

                          <a
                            href="/settings"
                            className="flex items-center px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 group"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-gray-500/20 to-slate-500/20 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 border border-gray-500/20">
                              <Settings className="w-4 h-4 text-gray-400" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">Settings</div>
                              <div className="text-xs text-gray-500">Account & preferences</div>
                            </div>
                          </a>

                          <div className="border-t border-white/10 mt-2 pt-2">
                            <button
                              onClick={handleLogout}
                              className="flex items-center w-full px-4 py-3 text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 group"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 border border-red-500/20">
                                <LogOut className="w-4 h-4 text-red-400" />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-sm">Sign Out</div>
                                <div className="text-xs text-gray-500">See you later!</div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <a
                    href="/login"
                    className="px-4 py-2 text-purple-400 border border-purple-500/30 rounded-xl hover:bg-purple-500/10 hover:border-purple-400/50 transition-all duration-300 font-medium backdrop-blur-sm hover:scale-105 text-sm"
                  >
                    Login
                  </a>
                  <a
                    href="/register"
                    className="relative px-4 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white rounded-xl font-medium overflow-hidden group shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <span className="relative z-10 flex items-center">
                      <Rocket className="w-3 h-3 mr-1" />
                      Join Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              )}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="md:hidden p-3 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 group"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white transform rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Ultra-modern Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/50 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-2xl mx-4 overflow-hidden animate-slideDown">

              {/* Mobile Search */}
              <div className="px-6 py-4 border-b border-white/10">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search marketplace..."
                    className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="px-6 py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-4 px-4 py-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${link.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20`}>
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-lg">{link.name}</span>
                  </a>
                ))}

                {/* Mobile Auth Section */}
                <div className="border-t border-white/20 pt-4 mt-4">
                  {isAuthenticated ? (
                    <div className="space-y-3">
                      <div className="px-4 py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl border border-white/10">
                        <div className="flex items-center justify-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                            <span className="text-white font-bold">{user?.email?.charAt(0)?.toUpperCase() || user?.name?.charAt(0)?.toUpperCase() || 'U'}</span>
                          </div>
                        </div>
                      </div>

                      <a
                        href={getDashboardPath()}
                        className="flex items-center space-x-4 px-4 py-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                          <BarChart3 className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="font-semibold">Dashboard</span>
                      </a>

                      <a
                        href="/wallet"
                        className="flex items-center space-x-4 px-4 py-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center border border-green-500/20 group-hover:scale-110 transition-transform duration-300">
                          <Wallet className="w-5 h-5 text-green-400" />
                        </div>
                        <span className="font-semibold">Wallet</span>
                      </a>

                      <a
                        href="/settings"
                        className="flex items-center space-x-4 px-4 py-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-500/20 to-slate-500/20 rounded-2xl flex items-center justify-center border border-gray-500/20 group-hover:scale-110 transition-transform duration-300">
                          <Settings className="w-5 h-5 text-gray-400" />
                        </div>
                        <span className="font-semibold">Settings</span>
                      </a>

                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center space-x-4 w-full px-4 py-4 text-gray-300 hover:text-red-400 hover:bg-red-500/10 rounded-2xl transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                          <LogOut className="w-5 h-5 text-red-400" />
                        </div>
                        <span className="font-semibold">Sign Out</span>
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-4">
                      <a
                        href="/login"
                        className="px-6 py-4 text-purple-400 border border-purple-500/30 rounded-2xl text-center hover:bg-purple-500/10 transition-all duration-300 font-semibold backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Login
                      </a>
                      <a
                        href="/register"
                        className="px-6 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-2xl text-center font-bold transition-all duration-300 shadow-lg flex items-center justify-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Rocket className="w-4 h-4 mr-2" />
                        Join Now
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Enhanced backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Enhanced custom styles with advanced animations */}
      <style jsx>{`
        @keyframes shimmer-wave {
          0% { 
            transform: translateX(-100%); 
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% { 
            transform: translateX(100%); 
            opacity: 0;
          }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateY(-20px) scale(0.95); 
            backdrop-filter: blur(0px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
            backdrop-filter: blur(30px);
          }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-30px) scale(0.95); 
            backdrop-filter: blur(0px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
            backdrop-filter: blur(30px);
          }
        }

        @keyframes float-gentle {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-5px) rotate(1deg); 
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 69, 193, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(139, 69, 193, 0.5), 0 0 40px rgba(139, 69, 193, 0.2);
          }
        }
        
        .animate-shimmer-wave {
          position: relative;
          overflow: hidden;
        }
        
        .animate-shimmer-wave::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer-wave 4s infinite;
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        /* Enhanced glassmorphism effects */
        .backdrop-blur-3xl {
          backdrop-filter: blur(40px) saturate(1.8);
          -webkit-backdrop-filter: blur(40px) saturate(1.8);
        }

        /* Smooth scrolling for dropdowns */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #db2777);
        }

        /* Enhanced focus states for accessibility */
        .focus\:ring-2:focus {
          ring-width: 2px;
          ring-color: rgba(139, 69, 193, 0.5);
        }

        /* Smooth transitions for all interactive elements */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Enhanced hover effects */
        .group:hover .group-hover\:scale-125 {
          transform: scale(1.25);
        }

        .group:hover .group-hover\:rotate-180 {
          transform: rotate(180deg);
        }

        .group:hover .group-hover\:rotate-3 {
          transform: rotate(3deg);
        }

        /* Custom gradient text animation */
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .bg-gradient-to-r {
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }

        /* Enhanced button press effect */
        .transition-all:active {
          transform: scale(0.98);
        }

        /* Improved mobile touch targets */
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }

        /* Desktop-specific optimizations */
        @media (min-width: 1024px) {
          /* Reduce header height for desktop */
          .h-16 {
            height: 3.5rem;
          }
          
          /* Compact spacing */
          .space-x-3 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 0.5rem;
          }
          
          /* Smaller text on desktop */
          .text-2xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
          
          /* Compact padding */
          .px-3 {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          
          .py-2 {
            padding-top: 0.375rem;
            padding-bottom: 0.375rem;
          }
        }

        /* Ultra-wide screen optimizations */
        @media (min-width: 1536px) {
          .max-w-7xl {
            max-width: 80rem;
          }
          
          /* Increase search bar width on ultra-wide */
          .w-64 {
            width: 20rem;
          }
        }

        /* Dark mode specific enhancements */
        @media (prefers-color-scheme: dark) {
          .backdrop-blur-3xl {
            backdrop-filter: blur(40px) saturate(1.5) brightness(0.8);
            -webkit-backdrop-filter: blur(40px) saturate(1.5) brightness(0.8);
          }
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .border-white\/10 {
            border-color: rgba(255, 255, 255, 0.3);
          }
          
          .bg-white\/10 {
            background-color: rgba(255, 255, 255, 0.2);
          }
        }

        /* Compact desktop mode styles */
        @media (min-width: 1024px) {
          /* Reduce all icon sizes for desktop */
          .w-6.h-6 {
            width: 1rem;
            height: 1rem;
          }
          
          .w-8.h-8 {
            width: 1.5rem;
            height: 1.5rem;
          }
          
          .w-10.h-10 {
            width: 2rem;
            height: 2rem;
          }
          
          .w-12.h-12 {
            width: 2.5rem;
            height: 2.5rem;
          }
          
          /* Compact font sizes for desktop */
          .text-lg {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
          
          .text-base {
            font-size: 0.75rem;
            line-height: 1rem;
          }
          
          /* Reduce padding and margins */
          .p-3 {
            padding: 0.5rem;
          }
          
          .px-4 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          .py-4 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }
          
          /* Compact rounded corners */
          .rounded-2xl {
            border-radius: 0.75rem;
          }
          
          .rounded-3xl {
            border-radius: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
