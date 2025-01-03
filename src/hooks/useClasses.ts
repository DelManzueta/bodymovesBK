import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

type Class = Database['public']['Tables']['classes']['Row'] & {
  instructor_name?: string;
  active?: boolean;
};

export const useClasses = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const { data, error } = await supabase
          .from('classes')
          .select(`
            *,
            instructor:users(first_name, last_name)
          `)
          .order('created_at', { ascending: false });

        if (error) throw error;

        setClasses(data.map(cls => ({
          ...cls,
          instructor_name: cls.instructor 
            ? `${cls.instructor.first_name} ${cls.instructor.last_name}`
            : 'Unassigned',
          active: true // You might want to add this as a column in your database
        })));
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClasses();
  }, []);

  return { classes, isLoading, error };
};