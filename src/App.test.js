import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/@testing-library/jest-dom';

describe('App tests', () => {
  test('renders learn react link', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);

    //render(<App />);
    //const linkElement = screen.getByText(/learn react/i);
    //expect(linkElement).toBeInTheDocument();
  });

  test('render test logo', ()=> {
    render(<App/>);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument;
  })

  test('Home.js_1_ristoranti_is_present' , ()=>{
    render(<App />);
    expect(screen.getByText(/^Ristoranti consigliati$/i)).toBeInTheDocument();
  })

  test('Login.js_1_is_present' , ()=>{
    render(<App />);
    expect(screen.getByText(/^Login$/i)).toBeInTheDocument();
  })

  test('Signup.js_1_ristoranti_is_present' , ()=>{
    render(<App />);
    expect(screen.getByText(/^signup$/i)).toBeInTheDocument();
  })
})

