import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/common/Sidebar';
import { 
  User, 
  Shield, 
  Bell, 
  CreditCard, 
  Palette, 
  Globe, 
  Save, 
  Upload,
  Eye,
  EyeOff
} from 'lucide-react';

const VendorSettingsPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  
  // Form states
  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: '',
    website: '',
    avatar: null
  });
  
  const [securityForm, setSecurityForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [notificationForm, setNotificationForm] = useState({
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true
  });
  
  const [paymentForm, setPaymentForm] = useState({
    accountType: 'paypal',
    accountEmail: '',
    bankAccount: '',
    routingNumber: '',
    accountNumber: ''
  });
  
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSecurityChange = (e) => {
    const { name, value } = e.target;
    setSecurityForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationForm(prev => ({ ...prev, [name]: checked }));
  };
  
  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSaveProfile = (e) => {
    e.preventDefault();
    // Save profile logic would go here
    console.log('Saving profile:', profileForm);
  };
  
  const handleSaveSecurity = (e) => {
    e.preventDefault();
    // Save security logic would go here
    console.log('Saving security:', securityForm);
  };
  
  const handleSaveNotifications = (e) => {
    e.preventDefault();
    // Save notifications logic would go here
    console.log('Saving notifications:', notificationForm);
  };
  
  const handleSavePayment = (e) => {
    e.preventDefault();
    // Save payment logic would go here
    console.log('Saving payment:', paymentForm);
  };
  
  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'payment', name: 'Payment', icon: CreditCard }
  ];
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role={user?.role?.toLowerCase() || "vendor"} />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center py-4 px-6 text-sm font-medium border-b-2 ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      {tab.name}
                    </button>
                  );
                })}
              </nav>
            </div>
            
            {/* Tab Content */}
            <div className="p-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <form onSubmit={handleSaveProfile}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
                      <p className="text-gray-600">Update your profile details</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={profileForm.name}
                          onChange={handleProfileChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={profileForm.email}
                          onChange={handleProfileChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                          Bio
                        </label>
                        <textarea
                          name="bio"
                          id="bio"
                          rows={3}
                          value={profileForm.bio}
                          onChange={handleProfileChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                          Website
                        </label>
                        <input
                          type="url"
                          name="website"
                          id="website"
                          value={profileForm.website}
                          onChange={handleProfileChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              )}
              
              {/* Security Tab */}
              {activeTab === 'security' && (
                <form onSubmit={handleSaveSecurity}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">Security Settings</h2>
                      <p className="text-gray-600">Manage your password and security preferences</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                          Current Password
                        </label>
                        <div className="relative mt-1">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="currentPassword"
                            id="currentPassword"
                            value={securityForm.currentPassword}
                            onChange={handleSecurityChange}
                            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Eye className="h-5 w-5 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                          New Password
                        </label>
                        <input
                          type="password"
                          name="newPassword"
                          id="newPassword"
                          value={securityForm.newPassword}
                          onChange={handleSecurityChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          value={securityForm.confirmPassword}
                          onChange={handleSecurityChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Update Password
                      </button>
                    </div>
                  </div>
                </form>
              )}
              
              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <form onSubmit={handleSaveNotifications}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">Notification Preferences</h2>
                      <p className="text-gray-600">Choose how you want to be notified</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                          <p className="text-sm text-gray-500">Receive notifications via email</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="emailNotifications"
                            checked={notificationForm.emailNotifications}
                            onChange={handleNotificationChange}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">SMS Notifications</h3>
                          <p className="text-sm text-gray-500">Receive notifications via SMS</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="smsNotifications"
                            checked={notificationForm.smsNotifications}
                            onChange={handleNotificationChange}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">Marketing Emails</h3>
                          <p className="text-sm text-gray-500">Receive marketing and promotional emails</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="marketingEmails"
                            checked={notificationForm.marketingEmails}
                            onChange={handleNotificationChange}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </form>
              )}
              
              {/* Payment Tab */}
              {activeTab === 'payment' && (
                <form onSubmit={handleSavePayment}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">Payment Information</h2>
                      <p className="text-gray-600">Manage your payment methods and preferences</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">
                          Account Type
                        </label>
                        <select
                          id="accountType"
                          name="accountType"
                          value={paymentForm.accountType}
                          onChange={handlePaymentChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="paypal">PayPal</option>
                          <option value="bank">Bank Transfer</option>
                          <option value="stripe">Stripe</option>
                        </select>
                      </div>
                      
                      {paymentForm.accountType === 'paypal' && (
                        <div>
                          <label htmlFor="accountEmail" className="block text-sm font-medium text-gray-700">
                            PayPal Email
                          </label>
                          <input
                            type="email"
                            name="accountEmail"
                            id="accountEmail"
                            value={paymentForm.accountEmail}
                            onChange={handlePaymentChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      )}
                      
                      {paymentForm.accountType === 'bank' && (
                        <>
                          <div>
                            <label htmlFor="bankAccount" className="block text-sm font-medium text-gray-700">
                              Bank Account Number
                            </label>
                            <input
                              type="text"
                              name="bankAccount"
                              id="bankAccount"
                              value={paymentForm.bankAccount}
                              onChange={handlePaymentChange}
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                          
                          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                              <label htmlFor="routingNumber" className="block text-sm font-medium text-gray-700">
                                Routing Number
                              </label>
                              <input
                                type="text"
                                name="routingNumber"
                                id="routingNumber"
                                value={paymentForm.routingNumber}
                                onChange={handlePaymentChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                                Account Number
                              </label>
                              <input
                                type="text"
                                name="accountNumber"
                                id="accountNumber"
                                value={paymentForm.accountNumber}
                                onChange={handlePaymentChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save Payment Info
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VendorSettingsPage;