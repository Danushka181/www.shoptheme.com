"use strict";
// Load plugins
const autoprefixer = require("autoprefixer");
// const browsersync = require("browser-sync").create();
const cssnano = require("cssnano");
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");

// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    done();
}


// CSS task
function css() {
  return gulp
    .src("./assets/scss/**/*.scss")
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    // .pipe(plumber())
    .pipe(sass({ outputStyle: "compressed" }).on('error', sass.logError))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./assets/css/"))
    // .pipe(browsersync.stream());
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

// Watch files
function watchFiles() {
  gulp.watch("./assets/scss/**/*", gulp.series(css) )
  // gulp.watch("./**/*.html", gulp.series( browserSyncReload) )
}

// define complex tasks
const watch = gulp.parallel(watchFiles);

// export tasks
exports.watch = watch;