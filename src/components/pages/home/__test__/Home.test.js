import { render, screen } from '@testing-library/react';
//import shallow from '@testing-library/jest-dom';
import Home from './../Home';
import React from "react";
import ReactDOM from "react-dom";
import RestaurantCard from '../../../restaurantcard/RestaurantCard';

test('renders the home', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div);
});


test('restaurant card is rendered in home page', () => {
    const { getByText } = render(<Home />);
    expect(getByText("Check it")).toBeInTheDocument();
});