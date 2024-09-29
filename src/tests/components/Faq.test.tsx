import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FaqItem from '../../components/ui/FaqItem/FaqItem';
import { describe, expect, it } from 'vitest';

const mockFaq = {
  id: 1,
  question: 'Test question',
  answer: 'Test answer',
};

describe('FaqItem', () => {
  it('render only question', () => {
    render(<FaqItem {...mockFaq} />);

    const questionElement = screen.getByRole('heading', {
      name: /Test question/i,
    });

    expect(questionElement).toBeInTheDocument();
  });

  it('check the answer is hidden before question click', () => {
    render(<FaqItem {...mockFaq} />);
    const answerElement = screen.queryByText(/Test answer/i)!;

    expect(answerElement.className).toMatch(/answerClose/);
  });

  it('check the answer is open after question click', () => {
    render(<FaqItem {...mockFaq} />);
    const toggleButton = screen.getByRole('button');
    const answerElement = screen.queryByText(/Test answer/i)!;

    fireEvent.click(toggleButton);

    expect(answerElement).toBeInTheDocument();
    expect(answerElement.className).toMatch(/answerOpen/);
  });
});
