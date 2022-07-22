const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
//const multer = require ('multer');
//const path = require ('path');
const { useResolvedPath } = require("react-router");
const { Controller } = require("react-hook-form");
const bcrypt = require("bcrypt");
const saltRounds = 10;
/*
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'image')
	},
	filename: (req, file, cb) =>{
		console.log(file);
		cb(null, Date.now() + path.extname(file.originalname));
	}
});

const upload = multer({ storage: storage });
*/

app.use(cors());
app.use(express.json());

const db_restaurants = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "michelinsocial",
});

app.listen(3001, () => {
	console.log("server is running on port 3001");
  });

app.get("/restaurants", (req, res) => {
	db_restaurants.query("SELECT * FROM restaurants", (err, result) => {
	  if (err) {
		console.log(err);
	  } else {
		res.send(result);
	  }
	});
});

app.get("/top-restaurants", (req, res) => {
	db_restaurants.query("SELECT * FROM restaurants ORDER BY Ranking DESC LIMIT 3", (err, result) => {
	  if (err) {
		console.log(err);
	  } else {
		res.send(result);
	  }
	});
});

app.post('/register', (req, res) => {

	const Email = req.body.Email;
	const Username = req.body.Username;
	const Password = req.body.Password;
	bcrypt.hash(Password, saltRounds, (err, hash)=> {
			if(err) {
				console.log(err)
			}

		db_restaurants.query(
			"INSERT INTO users (Email, Username, Password) VALUES (?,?,?)", 
			[Email, Username, hash],
			(err, result) => {
				console.log(err);
			}
		);
	});
});

app.post('/login', (req, res) => {

	const Username = req.body.Username;
	const Password = req.body.Password;

	db_restaurants.query(
		"SELECT * FROM users WHERE Username = ?;", 
		Username,
		(err, result) => {
			if (err) {
				res.send({err: err})
			}
			if (result.length > 0) {
				bcrypt.compare(Password, result[0].Password, (error, response)=>{
					if(response) {
						res.send(result)
					} else {
						res.send({ message: "Wrong username or password"});
					}
				});
			} else {
				res.send({ message: "User doesn't exist"});
			}			
		}
	);
});

app.put('/update', (req, res) => {
	const Username = req.body.Username;
	const Email = req.body.Email;
	db_restaurants.query(
		"UPDATE users SET Username = ? WHERE Email = ?", 
		[Username, Email],
		(err, result) => {
			if(err) {
				res.send({err: err});
			} else {
				res.send(result);
			}		
		}
	);
});

/*
app.put('/upload', upload.single('Foto'), (req, res) => {
	const Foto = req.body.Foto;
	const Email = req.body.Email;
	db_restaurants.query(
		"UPDATE users SET Foto = ? WHERE Email = ?", 
		[Foto, Email],
		(err, result) => {
			if(err) {
				res.send({err: err});
			} else {
				res.send(result);
			}		
		}
	);
});*/

