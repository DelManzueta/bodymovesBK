import { describe, it, expect, vi } from 'vitest';
import { auth } from '../../lib/auth';
import { supabase } from '../../lib/supabase';

vi.mock('../../lib/supabase', () => ({
  supabase: {
    auth: {
      signInWithOAuth: vi.fn(),
      signInWithOtp: vi.fn(),
      verifyOtp: vi.fn(),
      signOut: vi.fn()
    }
  }
}));

describe('auth', () => {
  it('signs in with provider', async () => {
    const mockData = { user: { id: '123' } };
    vi.mocked(supabase.auth.signInWithOAuth).mockResolvedValue({ data: mockData, error: null });

    const result = await auth.signInWithProvider('google');
    expect(result).toBe(mockData);
    expect(supabase.auth.signInWithOAuth).toHaveBeenCalledWith({
      provider: 'google',
      options: expect.any(Object)
    });
  });

  it('signs in with phone', async () => {
    const phone = '+1234567890';
    const mockData = { user: null };
    vi.mocked(supabase.auth.signInWithOtp).mockResolvedValue({ data: mockData, error: null });

    const result = await auth.signInWithPhone(phone);
    expect(result).toBe(mockData);
    expect(supabase.auth.signInWithOtp).toHaveBeenCalledWith({
      phone,
      options: { channel: 'sms' }
    });
  });
});