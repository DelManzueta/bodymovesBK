import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useMembers } from '../../hooks/useMembers';
import { mockSupabase } from '../mocks/supabase';

describe('useMembers', () => {
  const mockMembers = [
    {
      id: '1',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      memberships: [{ type: 'premium' }]
    }
  ];

  beforeEach(() => {
    mockSupabase.from().select().mockResolvedValue({
      data: mockMembers,
      error: null
    });
  });

  it('fetches and formats members data', async () => {
    const { result } = renderHook(() => useMembers());

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.members).toEqual([
      {
        ...mockMembers[0],
        membership_type: 'premium'
      }
    ]);
    expect(result.current.error).toBeNull();
  });

  it('handles errors gracefully', async () => {
    const error = new Error('Failed to fetch');
    mockSupabase.from().select().mockRejectedValue(error);

    const { result } = renderHook(() => useMembers());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBe(error);
    expect(result.current.members).toEqual([]);
  });
});