import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AdminRoute } from './components/auth/AdminRoute';
import Navbar from './components/navigation/Navbar';
import Footer from './components/footer/Footer';
import Loader from './components/ui/Loader';
import HomePage from './pages/HomePage';
import ClassesPage from './pages/ClassesPage';
import SchedulePage from './pages/SchedulePage';
import AboutPage from './pages/AboutPage';
import KidsPage from './pages/KidsPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/auth/LoginPage';
import PricingPage from './pages/pricing/PricingPage';
import ContactPage from './pages/contact/ContactPage';
import TermsPage from './pages/terms/TermsPage';
import PrivacyPage from './pages/privacy/PrivacyPage';

// Admin Pages
import DashboardPage from './pages/admin/DashboardPage';
import MembersPage from './pages/admin/MembersPage';
import ClassesAdminPage from './pages/admin/ClassesAdminPage';
import MembershipsPage from './pages/admin/MembershipsPage';
import ReportsPage from './pages/admin/ReportsPage';
import SettingsPage from './pages/admin/SettingsPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-ivory flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/classes" element={<ClassesPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/kids" element={<KidsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminRoute><DashboardPage /></AdminRoute>} />
              <Route path="/admin/members" element={<AdminRoute><MembersPage /></AdminRoute>} />
              <Route path="/admin/classes" element={<AdminRoute><ClassesAdminPage /></AdminRoute>} />
              <Route path="/admin/memberships" element={<AdminRoute><MembershipsPage /></AdminRoute>} />
              <Route path="/admin/reports" element={<AdminRoute><ReportsPage /></AdminRoute>} />
              <Route path="/admin/settings" element={<AdminRoute><SettingsPage /></AdminRoute>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;