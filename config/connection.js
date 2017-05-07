var mysql = require('mysql');

var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'burgers_db',
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("You are connected as ID : " + connection.threadId);
});

module.exports = connection;