const { query } = require('./database/connection');
const { userFavIds, deleteFavIds} = require('./favourite.js');
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
				return cb(new Error("Wrong username or password"));
			const { Username, Email, Admin } = result[0];
			userFavIds(Email, (err2, favList)=>{
				if(err2) return cb(err2);
				return cb(null, { Username, Email, Admin, favList })
			})
		}
	);
}
const update = (email, password, cb) => {
    bcrypt.hash(password, saltRounds, (err, hash)=> {
		if(!err) {
			query(
				"UPDATE users SET Password = ? WHERE Email = ?;", 
				[hash, email],
                error => {
					if(error) return  cb(new Error('Server Error in database'));
				}
			);
		}else cb(new Error('Error hashing: '+ err.message));
	});
}

const deleteuser = (email, cb) => {
	deleteFavIds(email, (err2)=>{
		if(err2) return cb(err2);
	});
	console.log(email);
	query(
		"DELETE FROM users WHERE Email = ?;", 
		[email],
		cb
	);
}

module.exports = { register, login, update , deleteuser}