var mysql = require('mysql');

// var connection = mysql.createConnection({
// 	port: 3306,
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'burgers_db',
// });

// connection.connect(function(err) {
// 	if (err) {
// 		console.error("ERROR CODE : " + error.stack);
// 	}
// 	console.log("You are connected as ID : " + connection.threadId);
// });

//set up for JAWSdb
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
	connection = mysql.createConnection({
		port: 3306,
		host: "s54ham9zz83czkff.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "wdlw6ic1prug27b0",
		password: "z8tyqlnf6igysygd",
		database: "xcdqwzcugclkuu0o"
	});	
};

connection.connect(function(error) {
	if (error) {
		console.log("conntion error: " +error.stack);
		return;
	}
});
module.exports = connection;


