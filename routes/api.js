var express = require('express');
var router = express.Router();
var Suggestion = require('../schemas/Suggestion');

router.get('/', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({ a: 1 }, null, 3));
});

router.post('/suggestions', function(req, res, next) {
	
	console.log(req.user);
	
	var googleId = req.user.id;
	
	var suggestion = new Suggestion({
		googleId: googleId,
		author: "Kefala",
		text: "Facha"
	});

	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({ a: 1 }, null, 3));
});

router.get('/suggestions', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	var suggestions = [];
	Suggestion.find({}, function (err, data) {
		if (err) res.send(500);
		suggestions = data;
		res.send(JSON.stringify(suggestions, null, 3));
	});
});

router.get('/user/name', function(req, res, next) {
	
	console.log(req.user);
	
	var name = req.user.displayName;
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({ name: name }, null, 3));
});

module.exports = router;
