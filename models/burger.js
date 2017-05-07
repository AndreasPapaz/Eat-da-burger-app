var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.displayAll("burger", function(res) {
			cd(res);
		});
	}
};

module.exports = burger;