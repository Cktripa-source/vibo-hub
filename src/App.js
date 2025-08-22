import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

// Pages
import Home from './pages/Home';
import MarketplacePage from './pages/MarketplacePage';
import VendorPage from './pages/VendorPage';
import AffiliatePage from './pages/AffiliatePage';
import InfluencerPage from './pages/InfluencerPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import VendorDashboardPage from './pages/VendorDashboardPage';
import AffiliateDashboardPage from './pages/AffiliateDashboardPage';
import InfluencerDashboardPage from './pages/InfluencerDashboardPage';
import RoleSelection from './components/auth/RoleSelection';

// Context
import { AuthProvider } from './contexts/AuthContext';

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="App min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 relative">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/become-vendor" element={<VendorPage />} />
              <Route path="/become-affiliate" element={<AffiliatePage />} />
              <Route path="/influencers" element={<InfluencerPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/role-selection" element={<RoleSelection />} />

              {/* Protected Routes - Dashboards */}
              <Route path="/vendor/dashboard/*" element={<VendorDashboardPage />} />
              <Route path="/affiliate/dashboard/*" element={<AffiliateDashboardPage />} />
              <Route path="/influencer/dashboard/*" element={<InfluencerDashboardPage />} />

              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>

            {/* Toast notifications */}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#1f2937',
                  color: '#ffffff',
                  border: '1px solid #374151',
                },
                success: {
                  iconTheme: {
                    primary: '#10b981',
                    secondary: '#ffffff',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#ef4444',
                    secondary: '#ffffff',
                  },
                },
              }}
            />
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

// 404 Not Found Component
const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default App;