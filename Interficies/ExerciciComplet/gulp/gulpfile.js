const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
var ts = require('gulp-typescript');
const minify = require('gulp-minify');
var gulpCopy = require('gulp-copy');

function minifyJs(){
    gulp.src(['./js/*.js'])
        .pipe(minify())
        .pipe(gulp.dest('dist'));
};
function compilTs () {
    return gulp.src('./src/*.ts')
        .pipe(ts({
            outFile: 'bundle.js'
        }))
        .pipe(gulp.dest('./js'));
};
function minifyCss (){
    return gulp.src('./css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
};

function compilScss() {
    return gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
};

function copyHTML (){
    return gulp.src('./src/*html')
        .pipe(copy('./dist'),{prefix:2})
        .pipe(gulp.dest('dist'));
}


exports.compilarSCSS = compilScss;
exports.minifyCSS = minifyCss;
exports.compilarTS = compilTs;
exports.minifyJS = minifyJs;
exports.copyhtml = copyHTML;
exports.build = gulp.parallel(gulp.series(compilScss,minifyCss),gulp.series(compilTs,minifyJs));
