const { query } = require('./database/connection');
const { userFavIds } = require('./favourite.js');
const bcrypt = require("bcrypt");
const saltRounds = 10;

const register = (email, username, password, cb) => {
	bcrypt.hash(password, saltRounds, (err, hash)=> {
		if(!err) {
			query(
				"INSERT INTO users (Email, Username, Password) VALUES (?,?,?)", 
				[email, username, hash],
                error => {
					if(error) return  cb(new Error('Server Error in database'));
					query(
						"SELECT * FROM users WHERE Email = ?;", 
						email,
						(err2, result) => {
							if (err2) return cb(err2);
							if (result.length === 0) return cb(new Error('Server Error in database'));
							const { Username, Email, Admin } = result[0];
							return cb(null, { Username, Email, Admin })
						}
					);
				}
			);
		}else cb(new Error('Error hashing: '+err.message));
	});
}
const login = (username, password, cb) => {
    query(
		"SELECT * FROM users WHERE Username = ?;", 
		username,
		(err, result) => {
			if (err) return cb(err);
			if (result.length === 0 || !bcrypt.compareSync(password, result[0].Password))
				return cb(new Error("Wrong username or password" + error.message));
			const { Username, Email, Admin } = result[0];
			userFavIds(Email, (err2, favList)=>{
				if(err2) return cb(err2);
				return cb(null, { Username, Email, Admin, favList })
			})
		}
	);
}
const update = (username, email, cb) => {
    query(
		"UPDATE users SET Username = ? WHERE Email = ?", 
		[username, email],
		cb
	);
}
module.exports = { register, login, update }