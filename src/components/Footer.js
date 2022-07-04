import React from "react";
import "../style/Footer.css";
import { useState } from "react";
import Axios from "axios";

function Footer() {

	const [restaurantsList, setRestaurantsList] = useState([]);

	const getRestaurants = () => {
		Axios.get("http://localhost:3001/restaurants").then((response) => {
			console.log(response.data);
			setRestaurantsList(response.data);
		});
	};

    return(
        <div className="bg-dark text-center text-lg-start footer text-light">
            <div className="container p-4">
                <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">

			<button onClick={getRestaurants}>Show Restaurants</button>
			{restaurantsList.map((val, key) => {
				return (
					<h1> Nome: {val.Nome}</h1>
				);
			})};

                    <h5 className="text-uppercase">Footer text</h5>

                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                    aliquam voluptatem veniam, est atque cumque eum delectus sint!
                    </p>
                </div>
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Footer text</h5>

                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                    aliquam voluptatem veniam, est atque cumque eum delectus sint!
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
