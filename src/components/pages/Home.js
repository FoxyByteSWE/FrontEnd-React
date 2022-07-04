import React from "react";
import "../../style/Homepage.css";
import RestaurantCard from "../RestaurantCard";

function Home() {
    return(
        <div className="container my-5">
            <div className="home-content">
                <div className="container-consigliati">
                    <h2 className="page-title text-center mb-4">Risitorati consigliati</h2>
                    <div class="row py-3 mt-4">
                        <div class="col-sm my-3">
                            <RestaurantCard/>
                        </div>
                        <div class="col-sm my-3">
                            <RestaurantCard/>
                        </div>
                        <div class="col-sm my-3">
                            <RestaurantCard/>
                        </div>
                    </div>
                </div>
                <div className="container-consigliati">
                    <h2 className="page-title text-center mb-4">I migliori ristoranti in zona</h2>
                    <div class="row py-3">
                        <div class="col-sm my-3">
                            <RestaurantCard/>
                        </div>
                        <div class="col-sm my-3">
                            <RestaurantCard/>
                        </div>
                        <div class="col-sm my-3">
                            <RestaurantCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default Home;