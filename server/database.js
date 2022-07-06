const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "Restaurants",
});

app.listen(3001, () => {
	console.log("server is running on port 3001");
  });

app.get("/restaurants", (req, res) => {
	db.query("SELECT * FROM Restaurants", (err, result) => {
	  if (err) {
		console.log(err);
	  } else {
		res.send(result);
	  }
	});
  });

app.get("/top-restaurants", (req, res) => {
	db.query("SELECT * FROM Restaurants ORDER BY Ranking DESC LIMIT 3", (err, result) => {
	  if (err) {
		console.log(err);
	  } else {
		res.send(result);
	  }
	});
  });


/*
function getDataFromDB(callback) {
	var ret;

	var mysql = require('mysql');

	var con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "root",
		database: "Restaurants"
	});

	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
	});

	sql_query = "SELECT * FROM Restaurants";

	con.query(sql_query, function (err, result, fields) {
		if (err) throw err;
		restaurants = [];
		for (let i = 0; i < result.length; ++i) {
			restaurant = new Map();
			restaurant.set("Codice_pk", result[i].Codice_pk);
			restaurant.set("Nome", result[i].Nome);
			restaurant.set("Categoria", result[i].Categoria);
			restaurant.set("Indirizzo", result[i].Indirizzo);
			restaurant.set("Sito", result[i].Sito);
			restaurant.set("Telefono", result[i].Telefono);
			restaurant.set("Ranking", result[i].Ranking);
			restaurants.push(restaurant)
		}
		return callback(restaurants);
	});
}

var data = '';

getDataFromDB(function(result) {
	data = result;

	console.log(data);
});
*/
