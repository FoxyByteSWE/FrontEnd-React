import React from 'react';
import { render, screen } from '../node_modules/@testing-library/react';
import App from './App' 
import '../node_modules/@testing-library/jest-dom'

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