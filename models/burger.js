var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.displayAll("burger", function(data) {
			cb(data);
		});
	},
	create: function(cols, vals, cb) {
		orm.create("burger", cols, vals, function(data) {
			cb(data);
		});
	}
};

module.exports = burger;