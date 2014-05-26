var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var svgmin = require('gulp-svgmin');

// Get and render all .styl files recursively
gulp.task('default', function () {
  //gulp.src('./source/**/*.styl')
  gulp.src('./source/index.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(prefix())
    //.pipe(minifyCSS())
    .pipe(gulp.dest('./dist'));
});


gulp.task('svg', function() {
    return gulp.src('.source/svg/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('./dist'));
});
