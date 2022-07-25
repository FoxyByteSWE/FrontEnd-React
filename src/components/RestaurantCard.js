import React from "react";
import {Link} from 'react-router-dom';
import "../style/RestaurantCard.css";

const RestaurantCard = ({restaurant}) => {
    const path = ((restaurant.Nome).toLowerCase()).replaceAll(' ','-'); 
    return(
        <div to={`/place-page/${path}`} state= {{restaurant}} className="card-favs m-auto border-0 shadow">
            <img className="card-img-top" src={restaurant.Immagine} alt="Card image cap" />
            <div className="card-body text-center">
                <h5 className="card-title my-3">{restaurant.Nome}</h5>
                <h6>{restaurant.Categoria}</h6>
                <p className="indirizzo-card mt-3">{restaurant.Indirizzo}</p>
                <Link to={`/place-page/${path}`} state= {{restaurant}} className="btn btn-primary card-btn">Check it</Link>
            </div>
        </div>
    );
};

export default RestaurantCard;