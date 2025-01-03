import { describe, it, expect } from 'vitest';
import { render, screen } from '../utils/test-utils';
import Loader from '../../../components/ui/Loader';

describe('Loader', () => {
  it('renders loader with correct text', () => {
    render(<Loader />);
    
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Moves')).toBeInTheDocument();
  });

  it('applies animation classes', () => {
    render(<Loader />);
    
    const container = screen.getByRole('presentation');
    expect(container).toHaveClass('fixed', 'inset-0', 'bg-ivory', 'z-50');
  });
});