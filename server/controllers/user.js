const { register, login, update } = require('../model').user;
const tokenHandler = require('./middlewares/token');

const postRegister = (req, res) => {
	console.log('hi');
	const { username, email, password } = req.body;
	register(email, username, password, (err, result) => {
		if (err)
			return res.status(500).send({ error: true, message: err.message })
		const { Username, Email, Admin } = result;
		const token = tokenHandler.createToken({ Email, Admin });
		res.cookie('token', token);
		res.send({ Username, Email, Admin })
	})
}
const postLogin = (req, res) => {
	const { username, password } = req.body;
	login(username, password, (err, result) => {
		if (err)
			return res.status(500).send({ error: true, message: err.message })
		const { Username, Email, Admin } = result;
		const token = tokenHandler.createToken({ Email, Admin });
		res.cookie('token', token);
		res.send({ Username, Email, Admin })
	});
}

const putUpdate = (req, res) => {
	const { Username, Password } = req.body;
	update(Username, Email, (err, result) => {
		if (err)
			return res.status(500).send({ error: true, message: err.message })
		res.send(result);
	});
}

module.exports = {
	postRegister,
	postLogin,
	putUpdate
}; 