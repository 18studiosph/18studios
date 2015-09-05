import gulp from 'gulp';
import eslint from 'gulp-eslint';
import pkg from '../../package.json';

gulp.task('eslint', function() {
	gulp.src("./js/*.js")
		.pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
        console.log("lint");
});