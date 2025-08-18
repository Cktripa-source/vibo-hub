import React from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/home/HeroSection';
import HowItWorks from '../components/home/HowItWorks';
import KeyFeatures from '../components/home/KeyFeatures';
import CTASection from '../components/home/CTASection';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <HowItWorks />
      <KeyFeatures />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;