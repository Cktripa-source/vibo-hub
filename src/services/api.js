import axios from 'axios';

// API base URL - update this to match your backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('viboHub_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('viboHub_token');
      window.location.href = '/login';
    }
    
    return Promise.reject({
      message: error.response?.data?.message || 'An error occurred',
      status: error.response?.status,
      data: error.response?.data,
    });
  }
);

// API endpoints
export const apiEndpoints = {
  // Authentication
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    verify: '/auth/verify',
    refreshToken: '/auth/refresh',
  },
  
  // Users
  users: {
    profile: '/users/profile',
    updateProfile: '/users/profile',
    changePassword: '/users/change-password',
    deleteAccount: '/users/delete-account',
  },
  
  // Products
  products: {
    list: '/products',
    create: '/products',
    update: (id) => `/products/${id}`,
    delete: (id) => `/products/${id}`,
    getById: (id) => `/products/${id}`,
    search: '/products/search',
    categories: '/products/categories',
    featured: '/products/featured',
  },
  
  // Vendors
  vendors: {
    dashboard: '/vendors/dashboard',
    products: '/vendors/products',
    sales: '/vendors/sales',
    analytics: '/vendors/analytics',
    payouts: '/vendors/payouts',
    settings: '/vendors/settings',
  },
  
  // Affiliates
  affiliates: {
    dashboard: '/affiliates/dashboard',
    products: '/affiliates/products',
    links: '/affiliates/links',
    commissions: '/affiliates/commissions',
    payouts: '/affiliates/payouts',
    analytics: '/affiliates/analytics',
  },
  
  // Influencers
  influencers: {
    dashboard: '/influencers/dashboard',
    campaigns: '/influencers/campaigns',
    apply: '/influencers/campaigns/apply',
    performance: '/influencers/performance',
    payouts: '/influencers/payouts',
  },
  
  // Orders
  orders: {
    list: '/orders',
    create: '/orders',
    getById: (id) => `/orders/${id}`,
    update: (id) => `/orders/${id}`,
    cancel: (id) => `/orders/${id}/cancel`,
  },
  
  // Payments
  payments: {
    createPaymentIntent: '/payments/create-intent',
    confirmPayment: '/payments/confirm',
    refund: '/payments/refund',
    webhooks: '/payments/webhooks',
  },
  
  // Admin
  admin: {
    dashboard: '/admin/dashboard',
    users: '/admin/users',
    products: '/admin/products',
    orders: '/admin/orders',
    analytics: '/admin/analytics',
    settings: '/admin/settings',
  },
  
  // Upload
  upload: {
    image: '/upload/image',
    file: '/upload/file',
    multiple: '/upload/multiple',
  },
};

// Helper functions for common API operations
export const apiHelpers = {
  // GET request
  get: async (endpoint, params = {}) => {
    return await api.get(endpoint, { params });
  },
  
  // POST request
  post: async (endpoint, data = {}) => {
    return await api.post(endpoint, data);
  },
  
  // PUT request
  put: async (endpoint, data = {}) => {
    return await api.put(endpoint, data);
  },
  
  // DELETE request
  delete: async (endpoint) => {
    return await api.delete(endpoint);
  },
  
  // File upload
  upload: async (endpoint, formData) => {
    return await api.post(endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default api;