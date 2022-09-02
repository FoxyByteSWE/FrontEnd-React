import React, { createContext} from 'react';
import { render, screen, fireEvent } from '../../../../../node_modules/@testing-library/react';
import Login from '../Login';
import controller from '../controller'; 
/**/
import userEvent from '../../../../../node_modules/@testing-library/user-event';
import '../../../../../node_modules/@testing-library/jest-dom';
/*import {BrowserRouter, MemoryRouter} from 'react-router-dom';*/
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
import { MemoryRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

/*it('routes to a new route', async () => {
    const history = createMemoryHistory();
    // mock push function
    history.push = jest.fn();
    const { getByText } = render(
      <MemoryRouter history={history}>
        <Link to="/sign-up">Sign Up</Link>
      </MemoryRouter>
    );

    fireEvent.click(getByText("Sign Up"));
    expect(history.push).toHaveBeenCalledWith('/sign-up');
  });
*/
/*
  it('should call handleSubmit function on submit', () => {
    /*const wrapper = shallow(<Login toggleAlert={jest.fn()} />)*/
    
    /* const wrapper = render(<Login toggleAlert={jest.fn()} />) */
     /* const { login, setUsernameLog, setPasswordLog, loginStatus } = controller(); */
    // const {user, setUser }= createContext(null);
     /* const { user, setUser } = useContext(UserContext); */
    /* const wrapper = render(<Login params={{user, setUser}}/>) 
     const spy = jest.spyOn(wrapper.instance(), 'handleSubmit')
     wrapper.instance().forceUpdate()
     wrapper.find('.btn').simulate('click')
     expect(spy).toHaveBeenCalled()
     spy.mockClear()
   })
  */
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