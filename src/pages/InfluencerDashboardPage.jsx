import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import InfluencerDashboard from '../components/dashboard/InfluencerDashboard';
import ProtectedRoute from '../components/common/ProtectedRoute';

// Placeholder components for nested routes
const CampaignsPage = () => <div className="p-8"><h1 className="text-2xl font-bold">Campaigns</h1></div>;
const AnalyticsPage = () => <div className="p-8"><h1 className="text-2xl font-bold">Analytics</h1></div>;
const SettingsPage = () => <div className="p-8"><h1 className="text-2xl font-bold">Settings</h1></div>;

const InfluencerDashboardPage = () => {
    const { user } = useAuth();

    return (
        <ProtectedRoute allowedRoles={['influencer']}>
            <Routes>
                <Route path="/" element={<InfluencerDashboard />} />
                <Route path="/campaigns" element={<CampaignsPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={<Navigate to="/influencer/dashboard" replace />} />
            </Routes>
        </ProtectedRoute>
    );
};

export default InfluencerDashboardPage;