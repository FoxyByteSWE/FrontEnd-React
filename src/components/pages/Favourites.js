import React from "react";
import RestaurantCard from "../RestaurantCard";
import "../../style/Favourites.css";
function Favourites() {

    return(
        <div className="container my-5" >
            <h2 className="text-center mb-3">Your Favourites reasturants</h2>
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
            <div class="row">
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
    );
}

export default Favourites;