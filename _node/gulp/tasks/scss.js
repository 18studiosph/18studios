import gulp from 'gulp';
import sass from 'gulp-sass';
import prefix from 'gulp-autoprefixer';
import cssmin from 'gulp-minify-css'
import pkg from '../../package.json';

gulp.task('sass', function() {
	gulp.src('../_sass/*.scss')
		.pipe(sass())
		.pipe(prefix())
		.pipe(cssmin())
		.pipe(gulp.dest('../css'))
});

gulp.task('watch', function () {
   gulp.watch('../_sass/*.scss', ['sass']);
});