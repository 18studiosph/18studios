import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pkg from '../../package.json';

gulp.task('images', function() {
	gulp.src('./images/**')
		.pipe(imagemin())
        .pipe(gulp.dest('./css/images'));
});
