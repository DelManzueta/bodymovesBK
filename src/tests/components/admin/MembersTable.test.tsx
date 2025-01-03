import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MembersTable } from '../../../components/admin/members/MembersTable';
import { mockSupabase } from '../../mocks/supabase';

describe('MembersTable', () => {
  const mockMembers = [
    {
      id: '1',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      membership_type: 'premium'
    }
  ];

  it('renders members data correctly', async () => {
    mockSupabase.from().select().mockResolvedValue({
      data: mockMembers,
      error: null
    });

    render(<MembersTable />);

    // Should show loader initially
    expect(screen.getByText('Body')).toBeInTheDocument();

    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('+1234567890')).toBeInTheDocument();
    expect(screen.getByText('premium')).toBeInTheDocument();
  });

  it('handles error state', async () => {
    mockSupabase.from().select().mockRejectedValue(new Error('Failed to fetch'));

    render(<MembersTable />);

    await waitFor(() => {
      expect(screen.getByText('Error loading members')).toBeInTheDocument();
    });
  });
});