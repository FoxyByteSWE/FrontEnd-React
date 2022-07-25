import React from 'react'
import {useState, useEffect } from "react";
import "../../style/Homepage.css";
import RestaurantCard from "../RestaurantCard";

function Home() {
    const [restaurantInfo, setRestaurantInfo] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/top-restaurants')
        .then(res => res.json())
        .then(data => setRestaurantInfo(data))
    });
        return(
            <div className="container my-5">
                <div className="home-content">
                    <div className="container-consigliati">
                        <h2 className="page-title text-center mb-4">Risitorati consigliati</h2>
                        <div className="row py-3 mt-4">

                            {
                                restaurantInfo.map((restaurant, index) => {
                                    return (   
                                        <div className="col-sm my-3" key={index}>
                                            <RestaurantCard restaurant={restaurant}/>
                                        </div>
                                    )
                                    })
                            }

                        </div>
                    </div>
                </div>
            </div>

            
        );
}

export default Home;