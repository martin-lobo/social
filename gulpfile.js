"use strict";

var gulp = require('gulp');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


var config = {
	paths: {
		js: ['app/main.js'],
		jsOut: 'public/static/js/'
	}
};


gulp.task('default', ['js']);

gulp.task('js', function () {
	browserify(config.paths.js)
	.transform(reactify)
	.bundle()
	.on('error', console.error.bind(console))
	.pipe(source('bundle.js'))
	.pipe(gulp.dest( config.paths.jsOut ));
});
