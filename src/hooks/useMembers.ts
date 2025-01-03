import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

type Member = Database['public']['Tables']['users']['Row'] & {
  membership_type?: string;
};

export const useMembers = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const { data, error } = await supabase
          .from('users')
          .select(`
            *,
            memberships (
              type
            )
          `)
          .order('created_at', { ascending: false });

        if (error) throw error;

        setMembers(data.map(user => ({
          ...user,
          membership_type: user.memberships?.[0]?.type
        })));
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return { members, isLoading, error };
};