var gulp = require('gulp');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var sass = require('gulp-sass');

/*
* gulp 명령어를 통해 실행
* [1]build 디렉토리 하위 내용 삭제
* [2]sass컴파일
* */
gulp.task('default', function(callback) {
	runSequence(
	'clean',
	'sass',
	callback);
});

/*
 * gulp dev 명령어를 통해 실행
 * [1]build 디렉토리 하위 내용 삭제
 * [2]sass컴파일
 * [3]watch (scss파일을 수정할때마다 sass를 컴파일함)
 * */
gulp.task('dev', function(callback) {
	runSequence(
		'clean',
		'sass',
		'watch',
		callback);
});

/*
* build 디렉토리 하위 내용 삭제
* */
gulp.task('clean', function() {
	return gulp.src('./build/*')
		.pipe(clean({ force: true }));
});

/*
 * sass 컴파일. build디렉토리로 css파일을 생성해줌
 * */
gulp.task('sass', function() {
	return gulp.src('./src/sass/*.scss')
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(gulp.dest('./build'));
});

/*
 * scss파일을 수정할때마다 컴파일함.
 * */
gulp.task('watch', function() {
	return gulp.watch(['./src/sass/*.scss'], ['sass']);
});