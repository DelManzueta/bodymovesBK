import { lazy } from 'react';
import { RouteConfig } from '../types/routes';

// Lazy load pages
const HomePage = lazy(() => import('../pages/HomePage'));
const ClassesPage = lazy(() => import('../pages/ClassesPage'));
// ... other imports

export const publicRoutes: RouteConfig[] = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/classes',
    component: ClassesPage
  },
  // ... other public routes
];

export const adminRoutes: RouteConfig[] = [
  {
    path: '/admin',
    component: DashboardPage,
    exact: true
  },
  // ... other admin routes
];

export const authRoutes: RouteConfig[] = [
  {
    path: '/login',
    component: LoginPage
  },
  // ... other auth routes
];