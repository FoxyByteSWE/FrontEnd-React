import { render, screen } from '@testing-library/react';
import Home from './../Home';
import React from "react";
import ReactDOM from "react-dom";

test('renders learn react link', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div);
});