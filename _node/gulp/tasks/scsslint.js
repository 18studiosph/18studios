import gulp from 'gulp';
import scsslint from 'gulp-scss-lint';
import pkg from '../../package.json';

gulp.task('scsslint', () => {

    return gulp.src([ `./${pkg.folders.sass}/**/*.scss` ])
        .pipe(scsslint());

});
