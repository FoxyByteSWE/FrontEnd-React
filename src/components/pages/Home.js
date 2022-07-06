import React from "react";
import "../../style/Homepage.css";
import RestaurantCard from "../RestaurantCard";
import { useState } from "react";
import Axios from "axios";

function Home() {
    const [restaurantInfo, setRestaurantInfo] = useState([]);

    Axios.get("http://localhost:3001/top-restaurants").then((response) => {
        setRestaurantInfo(response.data);
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