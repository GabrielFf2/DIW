var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

function concatCss() {
    return gulp.src('./Ninestars/assets/css/*.css')
        .pipe(concatCss("all.css"))
        .pipe(gulp.dest('./dist'));
};

exports.mergeCSS = concatCss;