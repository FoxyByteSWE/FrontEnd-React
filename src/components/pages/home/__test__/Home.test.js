import Home from './../Home';
import React from "react";
import ReactDOM from "react-dom";

test('renders the home', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div);
});
