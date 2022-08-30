import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import { isTSAnyKeyword } from '@babel/types';

it("error page renders with no crash", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <ErrorPage></ErrorPage>
            </BrowserRouter>
        </React.StrictMode>
    , div)
})