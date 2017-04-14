var gulp = require('gulp');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var sass = require('gulp-sass');

gulp.task('default', function(callback) {
	runSequence(
	'clean',
	'sass',
	callback);
});

gulp.task('dev', function(callback) {
	runSequence(
		'clean',
		'sass',
		'watch',
		callback);
});

gulp.task('clean', function() {
	return gulp.src('./build/*')
		.pipe(clean({ force: true }));
});

gulp.task('sass', function() {
	return gulp.src('./src/sass/*.scss')
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
	return gulp.watch(['./src/sass/*.scss'], ['sass']);
});