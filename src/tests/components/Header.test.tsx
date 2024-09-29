import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { afterEach, describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import Header from '../../components/layout/Header/Header';

vi.mock('../../components/ui/HeaderNav/HeaderNav', () => ({
  default: () => <nav>HeaderNav</nav>,
}));

describe('Header', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('render header logo', () => {
    render(
      <BrowserRouter>
        <Header />;
      </BrowserRouter>
    );

    const logo = screen.getByText(/Goods4you/i);

    expect(logo).toBeInTheDocument();
  });

  it('render headernav if token exists', () => {
    localStorage.setItem('token', 'test');
    render(
      <BrowserRouter>
        <Header />;
      </BrowserRouter>
    );

    const headerNav = screen.getByText(/HeaderNav/i);

    expect(headerNav).toBeInTheDocument();
  });

  it('should not render HeaderNav if token is null', () => {
    render(
      <BrowserRouter>
        <Header />;
      </BrowserRouter>
    );

    const headerNav = screen.queryByText(/HeaderNav/i);

    expect(headerNav).not.toBeInTheDocument();
  });
});
