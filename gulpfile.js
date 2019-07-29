var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
});

gulp.task('default', function() {
    gulp.watch('assets/scss/*.scss',gulp.series('sass'));
});

gulp.task('bs', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});