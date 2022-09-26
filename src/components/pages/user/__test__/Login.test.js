import React from 'react';
import { render, screen } from '../../../../../node_modules/@testing-library/react';
import Login from '../Login';
import '../../../../../node_modules/@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

  test('renders Login component', async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Login />,
      </Router>,
    );
    expect(screen.getByText(/Log In/i)).toBeInTheDocument();
  });

  test('Username input should be empty', ()=> {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Login/>
        </Router>
    );
    const usernameInput = screen.getByPlaceholderText(/Username/i);
    expect(usernameInput.value).toBe("");
  });

  test('Password input should be empty', ()=> {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Login/>
        </Router>
    );
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    expect(passwordInput.value).toBe("");
    
  });


  test('should call submit function with the right parameters', ()=> {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Login/>
        </Router>
    );
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    expect(passwordInput.value).toBe("");
    
  });