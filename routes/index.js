var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('../config/google.js');

passport.use(new GoogleStrategy({
	clientID: config.googleClientId,
	clientSecret: config.googleClientSecret,
	callbackURL: "http://social-arqatek.com:3000/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
	console.log("afas");
	return done(null, profile);
}
));


/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.user);
	res.render('Login/login', {});
});

router.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/fail' }), function(req, res) {
	console.log(req.user);
	res.redirect('/');
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = router;
