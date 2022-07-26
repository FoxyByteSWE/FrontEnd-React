const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { useResolvedPath } = require("react-router");
const { Controller } = require("react-hook-form");
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const saltRounds = 10;

//const multer = require ('multer');
//const path = require ('path');
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

app.use(express.json());
app.use(cors({
	origin: ["http://localhost:3000", "http://localhost:3000/login", "http://localhost:3000/user-page"],
	methods: ["GET", "POST", "PUT"],
	credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
	key: "userId",
	secret: "subscribe",
	resave: false,
	saveUninitialized: false,
	cookie: {
		expires: 3600 * 1000,
	}
}));


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

app.get("/login", (req, res) => {
	if(req.session.user) {
		res.send({loggedIn: true, user: req.session.user})
	} else {
		res.send({loggedIn: false})
	}
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
						req.session.user = result;
						console.log(req.session.user);
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

