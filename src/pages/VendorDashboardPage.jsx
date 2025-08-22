import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import VendorDashboard from '../components/dashboard/VendorDashboard';
import ProtectedRoute from '../components/common/ProtectedRoute';

// Placeholder components for nested routes
const ProductsPage = () => <div className="p-8"><h1 className="text-2xl font-bold">Products</h1></div>;
const OrdersPage = () => <div className="p-8"><h1 className="text-2xl font-bold">Orders</h1></div>;
const AnalyticsPage = () => <div className="p-8"><h1 className="text-2xl font-bold">Analytics</h1></div>;
const SettingsPage = () => <div className="p-8"><h1 className="text-2xl font-bold">Settings</h1></div>;

const VendorDashboardPage = () => {
    const { user } = useAuth();

    return (
        <ProtectedRoute allowedRoles={['vendor']}>
            <Routes>
                <Route path="/" element={<VendorDashboard />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="*" element={<Navigate to="/vendor/dashboard" replace />} />
            </Routes>
        </ProtectedRoute>
    );
};

export default VendorDashboardPage;