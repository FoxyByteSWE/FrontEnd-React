import { render, screen, fireEvent } from '@testing-library/react';
import Search from './../Search';
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
/*
describe('Search', ()=>{
    test('searching', ()=>{
        const setSearch = jest.fn((value)=>{});
        const { queryByPlaceholderText } = render(<Search setSearch={setSearch}/>)
        const searchInput = queryByPlaceholderText('Search...')
        fireEvent.change(searchInput, { target: {value:'test'}})
        espect(searchInput.value).toBe('test')
    });
}
)
*/
describe('Search', ()=>{
    test('render search resuslts', async ()=>{
        render(
            <Router>
                <Search />
            </Router>);
        expect(screen.getByText('Search Results')).toBeInTheDocument();
    } );
    /*******************************************************/ 
    test('render no results', async ()=>{
        render(
            <Router>
                <Search/>
            </Router>
        );
        expect(screen.getByText('No results found!')).toBeInTheDocument();
    });
/*************************************************************/
    test('test class render-1', async ()=>{
        const { container } = render(
            <Router>
                <Search/>
            </Router>
        );
        expect(container.querySelector(".home-content")).toBeInTheDocument();      
    });
/***************************************************************/
    test('test class render-2', async ()=>{
        const { container } = render(
            <Router>
                <Search/>
            </Router>
        );
        expect(container.querySelector(".container-consigliati")).toBeInTheDocument();   
    });
/****************************************************************/

})