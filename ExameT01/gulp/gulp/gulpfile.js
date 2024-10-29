const gulp = require('gulp');
const concat    = require('gulp-concat-flatten');
const sort      = require('gulp-sort');

const cleanCSS = require('gulp-clean-css');
function minimitzaCSS() {
    return gulp.src('./assets/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist'));
};

exports.minimitzaCSS = minimitzaCSS;
