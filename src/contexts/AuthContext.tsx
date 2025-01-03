import React, { createContext, useContext, useState } from 'react';
import { AuthState, User, LoginCredentials } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: false
  });

  const login = async (credentials: LoginCredentials) => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      // Implement actual login logic here
      console.log('Logging in with:', credentials);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const logout = async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    try {
      // Implement actual logout logic here
      setState({ user: null, isAuthenticated: false, isLoading: false });
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};