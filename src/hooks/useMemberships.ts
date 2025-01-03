import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

type Membership = Database['public']['Tables']['memberships']['Row'] & {
  member_name?: string;
};

export const useMemberships = () => {
  const [memberships, setMemberships] = useState<Membership[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMemberships = async () => {
      try {
        const { data, error } = await supabase
          .from('memberships')
          .select(`
            *,
            user:users(first_name, last_name)
          `)
          .order('created_at', { ascending: false });

        if (error) throw error;

        setMemberships(data.map(membership => ({
          ...membership,
          member_name: membership.user 
            ? `${membership.user.first_name} ${membership.user.last_name}`
            : 'Unknown Member'
        })));
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMemberships();
  }, []);

  return { memberships, isLoading, error };
};