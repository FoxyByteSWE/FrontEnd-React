import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer';

it("footer renders with no crash", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Footer></Footer>, div)
})