var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
	burger.all(function(data) {
		
		//this is the object that handles the handlebars argument in the .handlebars files.
		var hbsObject = { burger: data };
		console.log(hbsObject);
		//we can see here that it renders the "index" file where handlebars (hbsObject) match with key values. 
		res.render("index", hbsObject);
	});
});

router.post("/api/", function(request, response) {
	var burgerName = request.body.name;
	

	burger.create(["burger_name"], [request.body.burger_name], function(data) {
			response.redirect('/');
		});
});




module.exports = router;