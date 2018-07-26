var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./css/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./css/min'))
});
gulp.task('watch', function(){
     gulp.watch('./css/scss/*.scss', ['sass'])
});
