import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { Input, Checkbox } from '../ui/form';
import { GradientButton } from '../ui/buttons';
import { useAuth } from '../../contexts/AuthContext';
import type { LoginCredentials } from '../../types/auth';

const LoginForm = () => {
  const { login, isLoading } = useAuth();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Partial<LoginCredentials>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    try {
      await login(credentials);
    } catch (error) {
      setErrors({
        email: 'Invalid email or password'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        icon={Mail}
        label="Email"
        placeholder="your@email.com"
        value={credentials.email}
        onChange={e => setCredentials(prev => ({ ...prev, email: e.target.value }))}
        error={errors.email}
        required
      />

      <Input
        type="password"
        icon={Lock}
        label="Password"
        placeholder="••••••••"
        value={credentials.password}
        onChange={e => setCredentials(prev => ({ ...prev, password: e.target.value }))}
        error={errors.password}
        required
      />

      <div className="flex items-center justify-between">
        <Checkbox label="Remember me" />
        <Link 
          to="/forgot-password" 
          className="text-sm text-primary hover:text-primary/80"
        >
          Forgot password?
        </Link>
      </div>

      <GradientButton 
        type="submit" 
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </GradientButton>
    </form>
  );
};

export default LoginForm;