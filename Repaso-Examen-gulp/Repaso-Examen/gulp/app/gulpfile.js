var gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var w3cjs = require('gulp-w3cjs');
function mergeCSS() {
    return gulp.src(['./src/assets/css/style2.css', "./src/assets/css/style.css"])
        .pipe(concatCss("all.css"))
        .pipe(gulp.dest('./src/dist/'));

};
function minifyCSS(){
    return gulp.src('./src/dist/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./src/dist/'));

};

function validateHTML () {
    return gulp.src('src/*.html')
        .pipe(w3cjs())
        .pipe(w3cjs.reporter());
};

exports.mergeCSS = mergeCSS;
exports.minifyCSS = minifyCSS;
exports.validateHTML = validateHTML;