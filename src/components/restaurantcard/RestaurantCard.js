import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { UserContext } from "../UserContext";
import { API } from '../../config';
import "../../style/RestaurantCard.css";

const RestaurantCard = ({restaurant}) => {
    const {user, setUser} = useContext(UserContext);
    const addToFav = (id)=> async () => {
        if (user && user.Email) {
            const response = await fetch(API + '/fav', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                user_id: user.Email,
                place_id: id,
            }) // body data type must match "Content-Type" header
        });

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            return alert(message);
        }
        const result = await response.json();
        const newUser = {
            ...user,
            favList: result
        };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
    }
    }
    const removeFav = (id)=> async () => {
        if (user && user.Email) {
            const response = await fetch(API + '/fav', {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                user_id: user.Email,
                place_id: id,
            }) // body data type must match "Content-Type" header
        });

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            return alert(message);
        }
        const result = await response.json();
        const newUser = {
            ...user,
            favList: result
        };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        }
    }
    const path = restaurant.Nome.toString().replace(/ /g,'-').toLowerCase();
    return(
        <div to={`/place-page/${path}`} state= {{restaurant}} className="card-favs m-auto border-0 shadow">
            {
                user &&
                <div className="card-icon">
                {
                    user && user.favList && user.favList.filter(fav=> fav.place_id === restaurant.Codice_pk).length > 0?
                    <AiFillHeart size={40} className="fav-icon icon-red" onClick={removeFav(restaurant.Codice_pk)}/>
                    :
                    <AiFillHeart size={40} className="fav-icon" onClick={addToFav(restaurant.Codice_pk)}/>
                    
                }
                </div>
            }
            <img className="card-img-top" src={restaurant.Immagine} crossOrigin="*" alt="Card image cap" data-testid="img-locale-rc"/>
            <div className="card-body text-center">
                <h5 className="card-title my-3" data-testid="nome-locale-rc">{restaurant.Nome}</h5>
                <h6 data-testid="categoria-locale-rc">{restaurant.Categoria}</h6>
                <p className="indirizzo-card mt-3" data-testid="indirizzo-locale-rc">{restaurant.Indirizzo}</p>
                <Link to={`/place-page/${path}`} state= {{restaurant}} className="btn btn-primary card-btn">Check it</Link>
            </div>
        </div>
    );
};

export default RestaurantCard;