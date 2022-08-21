const { removeFav, addFav } = require('../model').favourite;

const postFav = (req, res) => {
	const { user_id, place_id } = req.body;
	console.log({ user_id, place_id })
	if (user_id && place_id) {
		addFav(user_id, place_id, (err, favList) => {
		if (err)
			return res.status(500).send({ error: true, message: err.message });
		return res.send(favList) 
		})
	} else
	return res.status(500).send({ error: true, message: "missing parameters" });
	
}

const deleteFav = (req, res) => {
	const { user_id, place_id } = req.body;
	if (user_id && place_id) {
		removeFav(user_id, place_id, (err, favList) => {
			if (err)
				return res.status(500).send({ error: true, message: err.message });
			return res.send(favList) 
		})
	} else
	return res.status(500).send({ error: true, message: "missing parameters" });
		
}

module.exports = {
	postFav,
	deleteFav
}; 