import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders common footer links and copyright text', () => {
    render(<Footer />);

    expect(screen.getByText('Help Centre')).toBeInTheDocument();
    expect(screen.getByText('Privacy')).toBeInTheDocument();
    expect(screen.getByText('1997-2026 Netflix, Inc.')).toBeInTheDocument();
  });
});
