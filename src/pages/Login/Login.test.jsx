import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { login, signup } from '../../firebase';

jest.mock('../../firebase', () => ({
  login: jest.fn(() => Promise.resolve()),
  signup: jest.fn(() => Promise.resolve()),
}));

describe('Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('signs in with the entered email and password', async () => {
    const user = userEvent.setup();

    render(<Login />);

    await user.type(screen.getByPlaceholderText('Email'), 'viewer@example.com');
    await user.type(screen.getByPlaceholderText('Password'), 'password123');
    await user.click(screen.getByRole('button', { name: 'Sign In' }));

    expect(login).toHaveBeenCalledWith('viewer@example.com', 'password123');
    expect(signup).not.toHaveBeenCalled();
  });

  it('switches to sign up and submits name, email, and password', async () => {
    const user = userEvent.setup();

    render(<Login />);

    await user.click(screen.getByText('Sign Up Now'));
    await user.type(screen.getByPlaceholderText('Your name'), 'Saul');
    await user.type(screen.getByPlaceholderText('Email'), 'saul@example.com');
    await user.type(screen.getByPlaceholderText('Password'), 'password123');
    await user.click(screen.getByRole('button', { name: 'Sign Up' }));

    expect(signup).toHaveBeenCalledWith('Saul', 'saul@example.com', 'password123');
    expect(login).not.toHaveBeenCalled();
  });
});
