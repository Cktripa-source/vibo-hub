import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Sidebar from '../common/Sidebar';
import { Target, Users, Heart, DollarSign } from 'lucide-react';

const InfluencerDashboard = () => {
    const { user } = useAuth();

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar role="influencer" />
            <main className="flex-1 ml-64 bg-gray-100">
                <div className="p-8">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-800">Welcome back, {user?.name || 'Influencer'}!</h1>
                        <p className="text-gray-600">Here's your campaign performance overview.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-medium text-gray-500">Active Campaigns</h3>
                                <Target className="w-6 h-6 text-blue-500" />
                            </div>
                            <p className="text-2xl font-semibold text-gray-800 mt-2">8</p>
                            <p className="text-sm text-green-600 mt-2">↑ 2 new this month</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-medium text-gray-500">Total Reach</h3>
                                <Users className="w-6 h-6 text-green-500" />
                            </div>
                            <p className="text-2xl font-semibold text-gray-800 mt-2">24.5K</p>
                            <p className="text-sm text-green-600 mt-2">↑ 15% from last month</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-medium text-gray-500">Engagement Rate</h3>
                                <Heart className="w-6 h-6 text-purple-500" />
                            </div>
                            <p className="text-2xl font-semibold text-gray-800 mt-2">4.8%</p>
                            <p className="text-sm text-green-600 mt-2">↑ 0.8% from last month</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-medium text-gray-500">Total Earnings</h3>
                                <DollarSign className="w-6 h-6 text-orange-500" />
                            </div>
                            <p className="text-2xl font-semibold text-gray-800 mt-2">$5,246</p>
                            <p className="text-sm text-green-600 mt-2">↑ 22% from last month</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Campaign Performance</h2>
                                <div className="h-72 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
                                    <p className="text-gray-500">Performance chart will be displayed here</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">Active Campaigns</h2>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center p-4 bg-gray-50 rounded-lg">
                                        <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4"></div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-800">Campaign #{i}</h4>
                                            <p className="text-sm text-gray-500">Reach: 2.4K • Engagement: 4.2%</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default InfluencerDashboard;