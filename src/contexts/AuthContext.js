import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/auth';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('viboHub_token');
      if (token) {
        // For JWT tokens, we can check if they're valid by decoding them
        // In a real app, you might want to verify with the server
        try {
          const decodedToken = jwtDecode(token);
          // Check if token is expired
          const currentTime = Date.now() / 1000;
          if (decodedToken.exp && decodedToken.exp < currentTime) {
            // Token is expired
            localStorage.removeItem('viboHub_token');
            throw new Error('Token expired');
          }
          
          // Check if we have a stored user object
          const storedUser = JSON.parse(localStorage.getItem('viboHub_user') || 'null');
          
          // Create user object from token or stored data
          const user = {
            id: decodedToken.sub,
            email: decodedToken.email || storedUser?.email || '',
            role: decodedToken.role || storedUser?.role || 'user',
            name: decodedToken.name || storedUser?.name || decodedToken.email || storedUser?.email || 'User',
            // Add default values for properties expected by Header component
            level: decodedToken.level || storedUser?.level || 'Bronze',
            earnings: decodedToken.earnings || storedUser?.earnings || 0,
            avatar: decodedToken.avatar || storedUser?.avatar || null,
          };
          
          setUser(user);
          setIsAuthenticated(true);
        } catch (decodeError) {
          console.error('Token decode error:', decodeError);
          localStorage.removeItem('viboHub_token');
          throw decodeError;
        }
      }
    } catch (error) {
      localStorage.removeItem('viboHub_token');
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      // Call the logout API but don't fail if it doesn't work
      // The most important thing is to clear the local token and user state
      try {
        await authAPI.logout();
      } catch (error) {
        console.warn('Logout API call failed (but continuing with local logout):', error);
      }
      
      // Always clear local storage and user state
      localStorage.removeItem('viboHub_token');
      localStorage.removeItem('viboHub_user');
      setUser(null);
      setIsAuthenticated(false);
      toast.success('Logged out successfully!');
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('Logout failed. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await authAPI.login(email, password);
      
      // Handle the JWT token response format
      // API returns { access: '...', refresh: '...' }
      if (response.access) {
        const token = response.access;
        // Decode the JWT token to get user data
        let user = {};
        try {
          const decodedToken = jwtDecode(token);
          user = {
            id: decodedToken.sub, // User ID is typically in the 'sub' field
            email: email,
            role: decodedToken.role || 'user', // Extract role if available
            name: decodedToken.name || email, // Use name if available, fallback to email
            level: decodedToken.level || 'Bronze',
            earnings: decodedToken.earnings || 0,
            avatar: decodedToken.avatar || null,
          };
        } catch (decodeError) {
          console.error('Token decode error:', decodeError);
          // Fallback to basic user object if decode fails
          user = {
            email: email,
            name: email,
            level: 'Bronze',
            earnings: 0,
            avatar: null,
          };
        }
        
        localStorage.setItem('viboHub_token', token);
        localStorage.setItem('viboHub_user', JSON.stringify(user));
        setUser(user);
        setIsAuthenticated(true);
        toast.success('Login successful!');
        return { success: true, user };
      } else {
        const errorMessage = response.message || response.data?.message || 'Login failed';
        toast.error(errorMessage);
        return { success: false, message: errorMessage };
      }
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.message || 'Login failed. Please check your credentials.';
      toast.error(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setLoading(true);
      const response = await authAPI.register(userData);
      
      // Handle different response formats
      let token, user;
      
      // Check if response has access token (JWT format)
      if (response.access) {
        token = response.access;
        // Decode the JWT token to get user data
        try {
          const decodedToken = jwtDecode(token);
          user = {
            id: decodedToken.sub, // User ID is typically in the 'sub' field
            email: userData.email,
            role: decodedToken.role || 'user', // Extract role if available
            name: decodedToken.name || userData.name || userData.email, // Use name if available
            level: decodedToken.level || 'Bronze',
            earnings: decodedToken.earnings || 0,
            avatar: decodedToken.avatar || null,
          };
        } catch (decodeError) {
          console.error('Token decode error:', decodeError);
          // Fallback to basic user object if decode fails
          user = {
            email: userData.email,
            name: userData.name || userData.email,
            level: 'Bronze',
            earnings: 0,
            avatar: null,
          };
        }
      }
      // Check if response has data with access token
      else if (response.data && response.data.access) {
        token = response.data.access;
        // Decode the JWT token to get user data
        try {
          const decodedToken = jwtDecode(token);
          user = {
            id: decodedToken.sub, // User ID is typically in the 'sub' field
            email: userData.email,
            role: decodedToken.role || 'user', // Extract role if available
            name: decodedToken.name || userData.name || userData.email, // Use name if available
            level: decodedToken.level || 'Bronze',
            earnings: decodedToken.earnings || 0,
            avatar: decodedToken.avatar || null,
          };
        } catch (decodeError) {
          console.error('Token decode error:', decodeError);
          // Fallback to basic user object if decode fails
          user = {
            email: userData.email,
            name: userData.name || userData.email,
            level: 'Bronze',
            earnings: 0,
            avatar: null,
          };
        }
      }
      // Check if response has success field with user data (old format)
      else if (response.success && response.user) {
        token = response.token || response.accessToken || response.data?.access;
        user = response.user;
        // Add missing properties if not present
        user.level = user.level || 'Bronze';
        user.earnings = user.earnings || 0;
        user.avatar = user.avatar || null;
      }
      // Check if response has data with success field
      else if (response.data && response.data.success && response.data.user) {
        token = response.data.token || response.data.accessToken || response.data.access;
        user = response.data.user;
        // Add missing properties if not present
        user.level = user.level || 'Bronze';
        user.earnings = user.earnings || 0;
        user.avatar = user.avatar || null;
      }
      // If we have a token, try to decode it
      else if (response.token || response.accessToken || response.data?.token || response.data?.accessToken) {
        token = response.token || response.accessToken || response.data?.token || response.data?.accessToken;
        // Decode the JWT token to get user data
        try {
          const decodedToken = jwtDecode(token);
          user = {
            id: decodedToken.sub, // User ID is typically in the 'sub' field
            email: userData.email,
            role: decodedToken.role || 'user', // Extract role if available
            name: decodedToken.name || userData.name || userData.email, // Use name if available
            level: decodedToken.level || 'Bronze',
            earnings: decodedToken.earnings || 0,
            avatar: decodedToken.avatar || null,
          };
        } catch (decodeError) {
          console.error('Token decode error:', decodeError);
          // Fallback to basic user object if decode fails
          user = {
            email: userData.email,
            name: userData.name || userData.email,
            level: 'Bronze',
            earnings: 0,
            avatar: null,
          };
        }
      }
      
      if (token && user) {
        localStorage.setItem('viboHub_token', token);
        localStorage.setItem('viboHub_user', JSON.stringify(user));
        setUser(user);
        setIsAuthenticated(true);
        toast.success('Registration successful!');
        return { success: true, user };
      } else {
        // Even if we don't have the expected format, if we got a response without error, consider it success
        // This handles cases where data is recorded but response format is different
        console.log('Registration response (unexpected format):', response);
        toast.success('Registration successful!');
        return { success: true, user: { name: userData.name, email: userData.email } };
      }
    } catch (error) {
      // Handle 409 Conflict error specifically
      if (error.status === 409) {
        toast.error(error.message || 'An account with this email already exists.');
        return { success: false, message: error.message };
      }
      
      console.error('Registration error:', error);
      const errorMessage = error.message || 'Registration failed. Please try again.';
      toast.error(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    register,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};