import React from "react";
import "../../style/Homepage.css";
import Search from "../Search";

function Home() {
    return(
        <div className="container my-5 py-5 ">
            <div className="home-content">
                <h1 className="page-title text-center">Guida Michelin @ social</h1>
                <div className="search-home">
                <p className="text-center home-text pb-3">
                    Find all your favourite restaurants and descover new places!
                </p>
                    <Search/>
                </div>
            </div>
        </div>

        
    );
}

export default Home;