import React from "react";
import "../../style/Homepage.css";
import { FiSearch } from 'react-icons/fi';


function Home() {
    return(
        <div className="container my-5 py-5 ">
            <div className="home-content">
                <h1 className="page-title text-center">Guida Michelin @ social</h1>
                <div className="search-home">
                <p>
                    Find all your favourite restaurants and descover new places!
                </p>
                <form className="d-flex mt-4" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                    <button className="search-btn-home" type="submit"><FiSearch size="25"/></button>
                </form>
                </div>
            </div>
        </div>

        
    );
}

export default Home;