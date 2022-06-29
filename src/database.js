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

con.query("SELECT * FROM Restaurants", function (err, result, fields) {
	if (err) throw err;
	console.log(result);
});
