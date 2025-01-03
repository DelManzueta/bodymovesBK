import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../utils/test-utils';
import { AuthButtons } from '../../../components/auth/AuthButtons';
import { auth } from '../../../lib/auth';

vi.mock('../../../lib/auth', () => ({
  auth: {
    signInWithProvider: vi.fn(),
    signInWithPhone: vi.fn()
  }
}));

describe('AuthButtons', () => {
  it('renders all provider buttons', () => {
    render(<AuthButtons />);
    
    expect(screen.getByText('Continue with Apple')).toBeInTheDocument();
    expect(screen.getByText('Continue with Google')).toBeInTheDocument();
    expect(screen.getByText('Continue with Phone')).toBeInTheDocument();
  });

  it('calls signInWithProvider when clicking OAuth buttons', async () => {
    render(<AuthButtons />);
    
    await fireEvent.click(screen.getByText('Continue with Google'));
    expect(auth.signInWithProvider).toHaveBeenCalledWith('google');
  });
});