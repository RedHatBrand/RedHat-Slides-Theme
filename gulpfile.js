var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');


// Get and render all .styl files recursively
gulp.task('default', function () {
  gulp.src('./source/**/*.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(prefix())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist'));
});
