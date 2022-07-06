import React from "react";
import {Link} from 'react-router-dom';
import "../style/RestaurantCard.css";

const RestaurantCard = ({restaurant}) => {
    const domRestaurant = restaurant.Nome.toLowerCase();
    return(
        <div className="card-favs m-auto border-0 shadow">
            <img className="card-img-top" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" alt="Card image cap" />
            <div className="card-body text-center">
                <h5 className="card-title my-3">{restaurant.Nome}</h5>
                <h6>{restaurant.Categoria}</h6>
                <p className="indirizzo-card mt-3">{restaurant.Indirizzo}</p>
                <Link to='/place-page' state= {{restaurant}} className="btn btn-primary card-btn">Check it</Link>
            </div>
        </div>
    );
};

export default RestaurantCard;