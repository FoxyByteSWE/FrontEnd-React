import React from 'react'
import { useEffect } from "react";
import "./index.css";
import RestaurantCard from "../../RestaurantCard";
import modelView from "./modelView"

function Home() {
    const { restaurantInfo, fetchResInfo } = modelView();
    useEffect(()=>{
        fetchResInfo();
    },[]);

        return(
            <div className="container my-5">                
                <div className="home-content">
                    <div className="container-consigliati">
                        <h2 className="page-title text-center mb-4">Ristoranti consigliati</h2>
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