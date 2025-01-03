import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { AdminRoute } from '../../../components/auth/AdminRoute';
import { AuthProvider } from '../../../contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <AuthProvider>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </AuthProvider>
  );
};

describe('AdminRoute', () => {
  it('shows loader while checking auth status', () => {
    renderWithProviders(
      <AdminRoute>
        <div>Admin Content</div>
      </AdminRoute>
    );

    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Moves')).toBeInTheDocument();
  });

  it('redirects to login when user is not authenticated', async () => {
    const { container } = renderWithProviders(
      <AdminRoute>
        <div>Admin Content</div>
      </AdminRoute>
    );

    await waitFor(() => {
      expect(container).not.toHaveTextContent('Admin Content');
    });
  });
});