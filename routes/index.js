var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
	clientID: GOOGLE_CLIENT_ID,
	clientSecret: GOOGLE_CLIENT_SECRET,
	callbackURL: "http://www.example.com/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
	User.findOrCreate({ googleId: profile.id }, function (err, user) {
		return done(err, user);
	});
}
));

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('Login/login', {});
});

app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
	res.redirect('/');
});

module.exports = router;
