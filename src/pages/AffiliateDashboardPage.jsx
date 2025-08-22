import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AffiliateDashboard from '../components/dashboard/AffiliateDashboard';
import ProtectedRoute from '../components/common/ProtectedRoute';

// Placeholder components for nested routes
const EarningsPage = () => <div className="p-8"><h1 className="text-2xl font-bold">Earnings</h1></div>;
const AnalyticsPage = () => <div className="p-8"><h1 className="text-2xl font-bold">Analytics</h1></div>;
const SettingsPage = () => <div className="p-8"><h1 className="text-2xl font-bold">Settings</h1></div>;

const AffiliateDashboardPage = () => {
    const { user } = useAuth();

    return (
        <ProtectedRoute allowedRoles={['affiliate']}>
            <Routes>
                <Route path="/" element={<AffiliateDashboard />} />
                <Route path="/earnings" element={<EarningsPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={<Navigate to="/affiliate/dashboard" replace />} />
            </Routes>
        </ProtectedRoute>
    );
};

export default AffiliateDashboardPage;