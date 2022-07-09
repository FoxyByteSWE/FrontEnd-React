const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db_restaurants = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "MichelinSocial",
});

app.listen(3001, () => {
	console.log("server is running on port 3001");
  });

app.get("/restaurants", (req, res) => {
	db_restaurants.query("SELECT * FROM Restaurants", (err, result) => {
	  if (err) {
		console.log(err);
	  } else {
		res.send(result);
	  }
	});
  });

app.get("/top-restaurants", (req, res) => {
	db_restaurants.query("SELECT * FROM Restaurants ORDER BY Ranking DESC LIMIT 3", (err, result) => {
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

	db.query(
		"INSERT INTO Users (Email, Username, Password) VALUES (?,?,?)", 
		[Email, Username, Password],
		(err, result) => {
			console.log(err);
		}
	);
})

app.post('/login', (req, res) => {

	const Username = req.body.Username;
	const Password = req.body.Password;

	db.query(
		"SELECT * FROM Users WHERE Username = ? AND Password = ?", 
		[Username, Password],
		(err, result) => {
			if (err) {
				red.send({err: err})
			}
			
			if (result.length > 0) {
				res.send(result);
			} else {
				res.send({ message: "Wrong username or password"});
			}			
		}
	);
})
