var connection = require('../config/connection.js');

// function printQuestionMarks(targetObject) {
// 	var arr = [];

// 	for (var key in targetObject) {
// 		if (Object.hasOwnProperty.call(targetObject, key)) {
// 			arr.push(key + "=" + targetObject[key]);
// 		}
// 	}
// 	return arr.toString();
// }

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

var orm = {
	displayAll: function(table, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, table, function(err, res) {
			if (err) throw err;
			cb(res);
		});
	},
	create: function(table, cols, vals, cb) {
	
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";


		connection.query(queryString, vals, function(err, result) {
			if (err) {
				console.log("error at orm create function " + err);
			}
			cb(result);
		});
	}
};

module.exports = orm;