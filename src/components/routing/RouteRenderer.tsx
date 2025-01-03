import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from '../../types/routes';
import { Loader } from '../ui/Loader';
import { AdminRoute } from '../auth/AdminRoute';

interface RouteRendererProps {
  routes: RouteConfig[];
  requiresAuth?: boolean;
}

export const RouteRenderer: React.FC<RouteRendererProps> = ({ 
  routes,
  requiresAuth 
}) => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map(({ path, component: Component, exact, roles }) => (
          <Route
            key={path}
            path={path}
            element={
              requiresAuth ? (
                <AdminRoute roles={roles}>
                  <Component />
                </AdminRoute>
              ) : (
                <Component />
              )
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};