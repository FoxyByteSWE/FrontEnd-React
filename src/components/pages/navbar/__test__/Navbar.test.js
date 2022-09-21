import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './../Navbar';
import React from "react";
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, MemoryRouter, Link} from "react-router-dom";

test('renders navbar', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Router>
                        <Navbar />
                    q</Router>, div);
});

describe('Renders all the elements in the navbar', () => {
    test('renders test logo', ()=> {
        render(
            <Router>
                <Navbar/>
            </Router>
        );
        const logo = screen.getByAltText("Logo");
        expect(logo).toBeInTheDocument;
    });

    test('renders search bar', ()=> {
        render(
            <Router>
                <Navbar/>
            </Router>
        );
        const searchbar = screen.getAllByTestId("search-bar-test");
        expect(searchbar).toBeInTheDocument;
    });

    test('renders 2 list items', ()=> {
        render(
            <Router>
                <Navbar/>
            </Router>
        );
        const listItems = screen.getAllByRole("listitem");
        expect(listItems).toHaveLength(2);
    });

    test('renders login and sign-up links if user is not logged in', ()=> {
        render(
            <Router>
                <Navbar/>
            </Router>
        );
        const login = screen.getByTestId("login-link");
        const signup = screen.getByTestId("signup-link");
        expect(login).toBeInTheDocument;
        expect(signup).toBeInTheDocument;
    });

    test('does not render userpage and logout links if user is not logged in', ()=> {
        render(
            <Router>
                <Navbar/>
            </Router>
        );
        const user = screen.queryByTestId("user-link");
        const logout = screen.queryByTestId("logout-link");
        expect(user).not.toBeInTheDocument;
        expect(logout).not.toBeInTheDocument;
    });
/*
    test('renders userpage and logout links if user is logged in', ()=> {
        render(
            <Router>
                <Navbar loginStatus={true}/>
            </Router>
        );
        const user = screen.queryByTestId("user-link");
        const logout = screen.queryByTestId("logout-link");
        expect(user).toBeInTheDocument;
        expect(logout).toBeInTheDocument;
    });
    */
/*
    test('does not render userpage and logout links if user is logged in', ()=> {
    });
*/
});

test('Search input should be empty', ()=> {
    render(
        <Router>
            <Navbar/>
        </Router>
    );
    const searchInput = screen.getByPlaceholderText(/Search places/i);
    expect(searchInput.value).toBe("");
    
  });
/*
describe('Links on the navbar brings to the right location', () => {
    test('Logo brings to homepage', ()=> {
      //const logo = screen.queryByTestId("Logo");
      //expect(logo.toHaveAttribute('to')).toBe('/');
      const component = renderer.create(
        <StaticRouter location="someLocation">
          <Link to="/" />
        </StaticRouter>
      );
    
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    })
});*/