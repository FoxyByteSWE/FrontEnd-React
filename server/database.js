const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { useResolvedPath } = require("react-router");

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

	db_restaurants.query(
		"INSERT INTO users (Email, Username, Password) VALUES (?,?,?)", 
		[Email, Username, Password],
		(err, result) => {
			console.log(err);
		}
	);
});

app.post('/login', (req, res) => {

	const Username = req.body.Username;
	const Password = req.body.Password;

	db_restaurants.query(
		"SELECT * FROM users WHERE Username = ? AND Password = ?", 
		[Username, Password],
		(err, result) => {
			if (err) {
				res.send({err: err})
			}
			
			if (result.length > 0) {
				res.send(result);
			} else {
				res.send({ message: "Wrong username or password"});
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

app.put('/upload', (req, res) => {
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
});

/*
app.get('/upload', (req, res) => {
	res.render("upload");
});

app.post('/upload', (req, res) => {
	res.render("Image uploaded");
});
*/

