var express = require('express');
var router = express.Router();
var Suggestion = require('../schemas/Suggestion');

router.get('/', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({ a: 1 }, null, 3));
});

router.post('/suggestions', function(req, res, next) {
	
	console.log(req.body.suggestion);
	if (!req.body.suggestion) res.send(500);
	
	
	var suggestion = new Suggestion({
		author: req.user.displayName,
		text: req.body.suggestion,
		created_at: new Date()
	});

	suggestion.save(function (err) {
		if (err) {
			console.log(err);
			res.send(500);
		} else {
			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({}, null, 3));
		}
	});	
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
