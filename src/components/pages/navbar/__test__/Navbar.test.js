import { render, screen } from '@testing-library/react';
import Navbar from './../Navbar';
import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter as Router} from "react-router-dom";

test('renders learn react link', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Router>
                        <Navbar />
                    q</Router>, div);
});