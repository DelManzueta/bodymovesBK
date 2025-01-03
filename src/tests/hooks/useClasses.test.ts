import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useClasses } from '../../hooks/useClasses';
import { mockSupabase } from '../mocks/supabase';

describe('useClasses', () => {
  const mockClasses = [
    {
      id: '1',
      name: 'Barre Fusion',
      duration: '45 minutes',
      capacity: 20,
      instructor: {
        first_name: 'Sarah',
        last_name: 'Johnson'
      }
    }
  ];

  beforeEach(() => {
    mockSupabase.from().select().mockResolvedValue({
      data: mockClasses,
      error: null
    });
  });

  it('fetches and formats classes data', async () => {
    const { result } = renderHook(() => useClasses());

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.classes[0]).toEqual({
      ...mockClasses[0],
      instructor_name: 'Sarah Johnson',
      active: true
    });
    expect(result.current.error).toBeNull();
  });

  it('handles errors gracefully', async () => {
    const error = new Error('Failed to fetch');
    mockSupabase.from().select().mockRejectedValue(error);

    const { result } = renderHook(() => useClasses());

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBe(error);
    expect(result.current.classes).toEqual([]);
  });
});