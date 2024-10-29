const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify.js');
const rename = require('gulp-rename');
const sort= require('gulp-sort');

function concatenaCSS() {
    return gulp.src('./src/assets/**/*.css')
        .pipe(concat("estils.css"))
        .pipe(gulp.dest('\'.src/dist\''));
};
function minimitzaCSS(){

    return gulp.src('./dist/estils.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('.src/dist'));
};

function concatenaJS(){
    gulp.src('./src/assets/js/*.js')
        .pipe(sort()) // Recommendation, see below
        .pipe(concat('./src/assets/js' , 'txt', {'newLine': '\n'}))
        .pipe(gulp.dest('.src/dist'));

};

function minimitzaJS(){
    return gulp.src('src/assets/js/*.js')
        .pipe(minify()) // use minify() arglessly as a stream transformation
        .pipe(rename({ suffix: '.min' })) // change suffix of minified file
        .pipe(gulp.dest('.src/dist')); // save minified files to the 'dist' directory
};

function watchHTML(){
    gulp.watch('./scss/*.scss' , { usePolling: true} , gulp.series( compscss , compscss ));

}


exports.concatenaCSS = concatenaCSS;
exports.minimitzaCSS = minimitzaCSS;
exports.concatenaJS = concatenaJS;
exports.minimitzaJS = minimitzaJS;