var connection = require('./config/connection.js');

var orm = {
	displayAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, res) {
			if (err) throw err;
			cb(res);
		});
	},
};

module.exports = orm;