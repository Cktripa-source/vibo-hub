import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, Share2, Users, ArrowRight, CheckCircle } from 'lucide-react';

const RoleSelection = () => {
    const navigate = useNavigate();

    const roles = [
        {
            id: 'vendor',
            title: 'Vendor',
            description: 'Sell your products and reach global customers',
            icon: Store,
            features: [
                'Upload unlimited products',
                'Advanced analytics',
                'Secure payments',
                'Inventory management'
            ],
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: 'affiliate',
            title: 'Affiliate',
            description: 'Promote products and earn commissions',
            icon: Share2,
            features: [
                'Choose from thousands of products',
                'Real-time tracking',
                'Weekly payouts',
                'Marketing tools'
            ],
            color: 'from-green-500 to-green-600'
        },
        {
            id: 'influencer',
            title: 'Influencer',
            description: 'Create campaigns and monetize your audience',
            icon: Users,
            features: [
                'Campaign management',
                'Performance analytics',
                'Brand partnerships',
                'Audience insights'
            ],
            color: 'from-purple-500 to-purple-600'
        }
    ];

    const handleRoleSelect = (roleId) => {
        navigate('/register', { state: { role: roleId } });
    };

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Choose Your Role
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Select how you want to get started with VIBO Hub
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {roles.map((role) => (
                        <div
                            key={role.id}
                            onClick={() => handleRoleSelect(role.id)}
                            className="relative group bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-2 hover:border-blue-500"
                        >
                            <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${role.color} flex items-center justify-center`}>
                                <role.icon className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">
                                {role.title}
                            </h3>
                            <p className="text-gray-400 mb-6">
                                {role.description}
                            </p>

                            <ul className="space-y-3">
                                {role.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 flex items-center text-blue-500 group-hover:text-blue-400">
                                <span className="font-medium">Get Started</span>
                                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoleSelection;