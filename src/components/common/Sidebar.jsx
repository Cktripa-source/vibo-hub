import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    BarChart,
    Settings,
    Store,
    DollarSign,
    Target,
    UserCircle
} from 'lucide-react';

const Sidebar = ({ role }) => {
    const location = useLocation();

    const menuItems = {
        vendor: [
            { name: 'Dashboard', path: '/vendor/dashboard', icon: LayoutDashboard },
            { name: 'Products', path: '/vendor/products', icon: Package },
            { name: 'Orders', path: '/vendor/orders', icon: ShoppingCart },
            { name: 'Analytics', path: '/vendor/analytics', icon: BarChart },
            { name: 'Settings', path: '/vendor/settings', icon: Settings },
        ],
        affiliate: [
            { name: 'Dashboard', path: '/affiliate/dashboard', icon: LayoutDashboard },
            { name: 'Marketplace', path: '/marketplace', icon: Store },
            { name: 'Earnings', path: '/affiliate/earnings', icon: DollarSign },
            { name: 'Analytics', path: '/affiliate/analytics', icon: BarChart },
            { name: 'Settings', path: '/affiliate/settings', icon: Settings },
        ],
        influencer: [
            { name: 'Dashboard', path: '/influencer/dashboard', icon: LayoutDashboard },
            { name: 'Campaigns', path: '/influencer/campaigns', icon: Target },
            { name: 'Analytics', path: '/influencer/analytics', icon: BarChart },
            { name: 'Settings', path: '/influencer/settings', icon: Settings },
        ],
    };

    const items = menuItems[role] || [];

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white p-4 border-r border-gray-800">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">Vibo Hub</h1>
            </div>
            <nav className="space-y-2">
                {items.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path
                            ? 'bg-blue-600 text-white'
                            : 'hover:bg-gray-800'
                            }`}
                    >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
            <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                            <UserCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-medium">User Name</div>
                            <div className="text-sm text-gray-400 capitalize">{role}</div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
