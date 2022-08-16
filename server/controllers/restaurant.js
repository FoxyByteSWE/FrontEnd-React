const { restaurantsList, topRetaurantsList } = require('../model').restaurant;

const getRestaurants = (_, res) => {	
	topRetaurantsList((err, result) => {
		if(err){
			console.log(err);
			return res.status(500).send({error: true, message: err.message})
		}
		res.send(result)
	})
}
const getTopRetaurants = (_, res) => {
	restaurantsList((err, result) => {
		if(err)
			return res.status(500).send({error: true, message: err.message})
		res.send(result)
	})
}

module.exports = {
	getRestaurants,
	getTopRetaurants
}; 