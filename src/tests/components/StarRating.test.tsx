import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StarRating from '../../components/ui/StarRating/StarRating';
import { describe, it, expect } from 'vitest';

describe('StarRating', () => {
  it('renders the correct number of stars', () => {
    render(<StarRating rating={3} />);

    const stars = screen.getAllByRole('listitem');
    expect(stars.length).toBe(5);
  });

  it('renders max rating', () => {
    render(<StarRating rating={5} />);

    const filledStars = screen.getAllByTestId('filled-star');
    expect(filledStars.length).toBe(5);
  });

  it('renders min rating', () => {
    render(<StarRating rating={1} />);

    const filledStars = screen.getAllByTestId('filled-star');
    expect(filledStars.length).toBe(1);

    const emptyStars = screen.getAllByTestId('empty-star');
    expect(emptyStars.length).toBe(4);
  });

  it('rounds the rating correctly', () => {
    render(<StarRating rating={4.7} />);

    const filledStars = screen.getAllByTestId('filled-star');

    expect(filledStars.length).toBe(5);
  });
});
