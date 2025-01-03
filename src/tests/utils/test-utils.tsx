import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </AuthProvider>
  );
};

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };