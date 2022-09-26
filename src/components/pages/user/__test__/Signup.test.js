import React from 'react';
import { render, screen, fireEvent } from '../../../../../node_modules/@testing-library/react';
import Signup from '../Signup'; 
import '../../../../../node_modules/@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

test('renders Signup component', async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Signup />
      </Router>
    );
    expect(screen.getByTestId('title').textContent).toMatch('Sign Up');
  });

  test('Username input should be empty', ()=> {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Signup/>
        </Router>
    );
    const usernameInput = screen.getByPlaceholderText(/Username/i);
    expect(usernameInput.value).toBe("");
  });

  test('Email input should be empty', ()=> {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Signup/>
        </Router>
    );
    const usernameInput = screen.getByPlaceholderText(/E-mail/i);
    expect(usernameInput.value).toBe("");
  });

  test('Password input should be empty', ()=> {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Signup/>
        </Router>
    );
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    expect(passwordInput.value).toBe("");
    
  });