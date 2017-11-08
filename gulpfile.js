const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

// Compile Sass & Inject Into Browser
gulp.task("sass", () => gulp.src(["node_modules/materialize-css/sass/materialize.scss", "src/scss/*.scss"])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream()));

// Move JS Files to src/js
gulp.task("js", () => gulp.src(["node_modules/materialize-css/dist/js/materialize.min.js", "node_modules/jquery/dist/jquery.min.js"])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream()));

// Watch Sass & Serve
gulp.task("serve", ["sass"], () => {
    browserSync.init({ server: "./src" });

    gulp.watch(["node_modules/materialize-css/sass/materialize.scss", "src/scss/*.scss"], ["sass"]);
    gulp.watch("src/*.html").on("change", browserSync.reload);
});

// Move Fonts to src/fonts
gulp.task("fonts", () => gulp.src(["node_modules/font-awesome/fonts/*", "node_modules/materialize-css/dist/fonts/roboto/*"])
    .pipe(gulp.dest("src/fonts")));

// Move Font Awesome CSS to src/css
gulp.task("fa", () => gulp.src("node_modules/font-awesome/css/font-awesome.min.css")
    .pipe(gulp.dest("src/css")));

gulp.task("default", ["js", "serve", "fa", "fonts"]);
