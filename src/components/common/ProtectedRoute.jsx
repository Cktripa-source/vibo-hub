import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading, isAuthenticated } = useAuth();
  const location = useLocation();

  // Show loading state while checking auth status
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user exists but doesn't have a role, redirect to role selection
  if (!user?.role) {
    return <Navigate to="/role-selection" replace />;
  }

  // If allowedRoles is specified and user's role is not in allowedRoles, redirect to their dashboard
  if (allowedRoles && !allowedRoles.includes(user.role.toLowerCase())) {
    // Redirect to appropriate dashboard based on user role
    const roleDashboardMap = {
      'vendor': '/vendor/dashboard',
      'affiliate': '/affiliate/dashboard',
      'influencer': '/influencer/dashboard'
    };

    const userDashboard = roleDashboardMap[user.role.toLowerCase()] || '/';
    return <Navigate to={userDashboard} replace />;
  }

  // If all checks pass, render the children
  return children;
};

export default ProtectedRoute;