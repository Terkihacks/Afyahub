import { useState } from 'react';
import { loginEmployee } from '../services/AuthService';
import { loginTypes } from '../types/appTypes';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: loginTypes) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginEmployee(credentials);
      
      if (response.token) {
        // Store JWT token
        localStorage.setItem('token', response.token);
        // Store user data
        localStorage.setItem('employee', JSON.stringify(response.user));
        setLoading(false);
        return response;
      }
      throw new Error('Login failed');
    } catch (err) {
      setError('Invalid credentials');
      setLoading(false);
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('employee');
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  const getUser = () => {
    const user = localStorage.getItem('employee');
    return user ? JSON.parse(user) : null;
  };

  return {
    login,
    logout,
    isAuthenticated,
    getUser,
    loading,
    error
  };
};