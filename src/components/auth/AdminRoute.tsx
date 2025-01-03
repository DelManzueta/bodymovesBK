import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useAdmin } from '../../hooks/useAdmin';
import { Loader } from '../ui/Loader';

interface AdminRouteProps {
  children: React.ReactNode;
}

export const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { user, isLoading } = useAuth();
  const { isAdmin, isLoading: isAdminLoading } = useAdmin();

  if (isLoading || isAdminLoading) {
    return <Loader />;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};