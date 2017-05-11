var connection = require('../config/connection.js');

function printQuestionMarks(targetObject) {
	var arr = [];

	for (var key in targetObject) {
		if (Object.hasOwnProperty.call(targetObject, key)) {
			arr.push(key + "=" + targetObject[key]);
		}
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
		var queryString = "INSERT INTO " + table + " (" + cols.toString() + ")" + " VALUES (" + printQuestionMarks(vals.length) + ")";
		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
			if (err) throw error;
			cb(result);
		});
	}
};

module.exports = orm;