const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
var ts = require('gulp-typescript');
const sass = require('gulp-sass')(require('sass'));
const minify = require("gulp-minify");
function defaultTask(cb) {
    // place code for your default task here
    cb();
}


function mincss(){
    return gulp.src('./css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css'));
}

function compscss(){
    return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

function minifyjs(cb) {
    return gulp.src(["./*.js"])
        .pipe(minify())
        .pipe(gulp.dest("./dist"));
}
function compts(){
    return gulp.src('./ts/*.ts')
        .pipe(ts({
            noImplicitAny: true,
        }))
        .pipe(gulp.dest('./js'));
}


function vigila(){

    gulp.watch('./scss/*.scss' , { usePolling: true} , gulp.series( compscss , compscss ));
    gulp.watch('./ts/*.ts' , { usePolling: true} , gulp.series( compts , minifyjs ));

}


exports.default = defaultTask
exports.mincss = mincss
exports.compilarscss = compscss
exports.minjs = minifyjs
exports.compilarts = compts

exports.dev = vigila
