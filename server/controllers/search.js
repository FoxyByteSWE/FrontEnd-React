const { search } = require('../model').search;

const getSearch = (req, res) => {
	const { s } = req.query;
	if (s && s.length>0) {
		search(s, (err, restList) => {
		if (err)
			return res.status(500).send({ error: true, message: err.message });
		return res.send(restList) 
		})
	} else
	return res.status(500).send({ error: true, message: "missing parameters" });
	
}

module.exports = {
	getSearch
}; 