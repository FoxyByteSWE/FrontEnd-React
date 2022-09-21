import { render, screen } from '@testing-library/react';
import Userpage from './../Userpage';
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';

describe('User Page', () => { 

  test('renders the user page', () => {
    const userPage = render(
    <Router>
        <Userpage />
    </Router>
    );
  const title = userPage.getByText(/Your Page/i);
  expect(title).toBeInTheDocument;
  });

  test('Name input should be empty', ()=> {
    const userPage = render(
        <Router>
            <Userpage />
        </Router>
        );
    const usernameInput = screen.getByPlaceholderText(/name/i);
    expect(usernameInput.value).toBe("");
  });

  test('renders favourite section', () => {
    const userPage = render(
    <Router>
        <Userpage />
    </Router>
    );
  const title = userPage.getByText(/Your Favourites/i);
  expect(title).toBeInTheDocument;
  });

})