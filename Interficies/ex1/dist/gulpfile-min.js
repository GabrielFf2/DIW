const gulp=require("gulp"),cleanCSS=require("gulp-clean-css");var ts=require("gulp-typescript");const sass=require("gulp-sass")(require("sass")),minify=require("gulp-minify");function defaultTask(s){s()}function mincss(){return gulp.src("./css/*.css").pipe(cleanCSS({compatibility:"ie8"})).pipe(gulp.dest("./dist/css"))}function compscss(){return gulp.src("./scss/*.scss").pipe(sass().on("error",sass.logError)).pipe(gulp.dest("./css"))}function minifyjs(s){return gulp.src(["./*.js"]).pipe(minify()).pipe(gulp.dest("./dist"))}function compts(){return gulp.src("./ts/*.ts").pipe(ts({noImplicitAny:!0})).pipe(gulp.dest("./js"))}function vigila(){gulp.watch("./scss/*.scss",{usePolling:!0},gulp.series(compscss,compscss)),gulp.watch("./ts/*.ts",{usePolling:!0},gulp.series(compts,minifyjs))}exports.default=defaultTask,exports.mincss=mincss,exports.compilarscss=compscss,exports.minjs=minifyjs,exports.compilarts=compts,exports.dev=vigila;