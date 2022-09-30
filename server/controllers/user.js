const { register, login, update, deleteuser } = require('../model').user;
const tokenHandler = require('./middlewares/token');

const postRegister = (req, res) => {
	const { username, email, password } = req.body;
	register(email, username, password, (err, result) => {
		if (err)
			return res.status(500).send({ error: true, message: err.message })
		const { Username, Email, Admin } = result;
		const token = tokenHandler.createToken({ Email, Admin });
		res.cookie('token', token);
		res.cookie('user', { Username, Email, Admin });
		res.send({ Username, Email, Admin })
	})
}
const postLogin = (req, res) => {
	const { username, password } = req.body;
	login(username, password, (err, result) => {
		if (err)
			return res.status(500).send({ error: true, message: err.message })
		const { Username, Email, Admin, favList } = result;
		const token = tokenHandler.createToken({ Email, Admin });
		res.cookie('token', token);
		res.cookie('user', { Username, Email, Admin });
		res.send({ Username, Email, Admin, favList })
	});
}

const putUpdate = (req, res) => {
	const { email, password } = req.body;
	console.log(email);
	update(email, password, (err, result) => {
		if (err)
			return res.status(500).send({ error: true, message: err.message })
		res.send(result);
	});
}

const deleteUser = (req, res) => {
	const email = req.params.userId;
	deleteuser(email, (err) => {
		if (err)
			return res.status(500).send({ error: true, message: err.message })
		return res.status(200).send("success");
	});
}

module.exports = {
	postRegister,
	postLogin,
	putUpdate,
	deleteUser
};