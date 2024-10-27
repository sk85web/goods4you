import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AuthForm from '../../components/ui/AuthForm/AuthForm';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('AuthForm button state', () => {
  it('should render the "Sign in" button', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AuthForm />
        </Provider>
      </BrowserRouter>
    );

    const button = screen.getByRole('button', { name: /sign in/i });
    expect(button).toBeInTheDocument();
  });

  it('should render disabled "Sign in" button', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AuthForm />
        </Provider>
      </BrowserRouter>
    );

    const loginInput = screen.getByPlaceholderText(/login/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const button = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(loginInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: '' } });

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('should render enabled "Sign in" button', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AuthForm />
        </Provider>
      </BrowserRouter>
    );

    const loginInput = screen.getByPlaceholderText(/login/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const button = screen.getByRole('button', { name: /sign in/i });

    fireEvent.change(loginInput, { target: { value: 'testUser' } });
    fireEvent.change(passwordInput, { target: { value: 'testPass' } });

    expect(button).toBeEnabled();
  });
});
