var gulp = require('gulp');
var stylus = require('gulp-stylus');
var minifyCSS = require('gulp-minify-css');

// Get and render all .styl files recursively
gulp.task('default', function () {
  gulp.src('./source/**/*.styl')
    .pipe(stylus())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist'));
});
