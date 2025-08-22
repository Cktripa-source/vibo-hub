import { apiHelpers, apiEndpoints } from './api';

export const authAPI = {
  // Login user
  login: async (email, password) => {
    try {
      const response = await apiHelpers.post(apiEndpoints.auth.login, {
        email,
        password,
      });
      console.log('API Login response:', response);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Register user
  register: async (userData) => {
    try {
      const response = await apiHelpers.post(apiEndpoints.auth.register, userData);
      console.log('API Register response:', response);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Verify token
  verifyToken: async (token) => {
    // For JWT tokens, we can decode them directly
    // In a real app, you might want to verify with the server
    try {
      // We'll just return a success response since the token will be verified in AuthContext
      return { success: true };
    } catch (error) {
      throw error;
    }
  },

  // Refresh token
  refreshToken: async () => {
    try {
      const response = await apiHelpers.post(apiEndpoints.auth.refreshToken);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Logout
  logout: async () => {
    try {
      const response = await apiHelpers.post(apiEndpoints.auth.logout);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Mock functions for development (remove when backend is ready)
  mockLogin: async (email, password) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock user data based on email
    const mockUsers = {
      'vendor@viboHub.com': {
        id: 1,
        name: 'John Vendor',
        email: 'vendor@viboHub.com',
        role: 'vendor',
        avatar: null,
        verified: true,
        createdAt: '2024-01-01T00:00:00Z',
      },
      'affiliate@viboHub.com': {
        id: 2,
        name: 'Jane Affiliate',
        email: 'affiliate@viboHub.com',
        role: 'affiliate',
        avatar: null,
        verified: true,
        createdAt: '2024-01-01T00:00:00Z',
      },
      'influencer@viboHub.com': {
        id: 3,
        name: 'Mike Influencer',
        email: 'influencer@viboHub.com',
        role: 'influencer',
        avatar: null,
        verified: true,
        createdAt: '2024-01-01T00:00:00Z',
      },
    };

    if (mockUsers[email] && password === 'password123') {
      return {
        success: true,
        user: mockUsers[email],
        token: 'mock_jwt_token_' + Date.now(),
      };
    } else {
      return {
        success: false,
        message: 'Invalid email or password',
      };
    }
  },

  mockRegister: async (userData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock registration success
    const mockUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      role: userData.role,
      avatar: null,
      verified: false,
      createdAt: new Date().toISOString(),
    };

    return {
      success: true,
      user: mockUser,
      token: 'mock_jwt_token_' + Date.now(),
    };
  },

  mockVerifyToken: async (token) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    if (token && token.startsWith('mock_jwt_token_')) {
      return {
        id: 1,
        name: 'John Doe',
        email: 'john@viboHub.com',
        role: 'vendor',
        avatar: null,
        verified: true,
        createdAt: '2024-01-01T00:00:00Z',
      };
    } else {
      throw new Error('Invalid token');
    }
  },
};

// Use mock functions in development
// const isDevelopment = process.env.NODE_ENV === 'development';

// if (isDevelopment) {
//   authAPI.login = authAPI.mockLogin;
//   authAPI.register = authAPI.mockRegister;
//   authAPI.verifyToken = authAPI.mockVerifyToken;
// }