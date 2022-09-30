import React from 'react'
import { useEffect } from "react";
import "./index.css";
import RestaurantCard from "../../restaurantcard/RestaurantCard";
import controller from "../../navbar/controller";


function Search() {
    const { searchRest, fetchRest, setKeyword, keyword } = controller();
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    if(keyword !== params.s) setKeyword(params.s);
    
    useEffect(()=>{
         if (keyword) fetchRest(keyword)
    },[keyword]);

        return(
            <div className="container my-5">                
                <div className="home-content">
                    <div className="container-consigliati">
                        <h2 className="page-title text-center mb-4">Search Results</h2>
                        <div className="row py-3 mt-4">
                            {
                                searchRest && searchRest.length > 0?
                                searchRest.map((restaurant, index) => {
                                    return (   
                                        <div className="col-sm my-3" key={index}>
                                            <RestaurantCard restaurant={restaurant}/>
                                        </div>
                                    )
                                    })
                                :
                                <h3>No results found!</h3>
                            }
                        </div>
                    </div>
                </div>
            </div>

            
        );
}

export default Search;