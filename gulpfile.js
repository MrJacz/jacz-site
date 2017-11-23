const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
gulp.task("sass", () => gulp.src(["node_modules/materialize-css/sass/materialize.scss", "src/scss/*.scss"]).pipe(sass()).pipe(gulp.dest("src/css")).pipe(browserSync.stream()));
gulp.task("js", () => gulp.src(["node_modules/materialize-css/dist/js/materialize.min.js", "node_modules/jquery/dist/jquery.min.js", "node_modules/jquery.easing/jquery.easing.min.js"]).pipe(gulp.dest("src/js")).pipe(browserSync.stream()));
gulp.task("serve", ["sass"], () => {
    browserSync.init({ server: "./src" });
    gulp.watch(["node_modules/materialize-css/sass/materialize.scss", "src/scss/*.scss"], ["sass"]);
    gulp.watch("src/js/*.js", ["js"]).on("change", browserSync.reload);
    gulp.watch("src/*.html").on("change", browserSync.reload);
});
gulp.task("fonts", () => gulp.src(["node_modules/font-awesome/fonts/*", "node_modules/materialize-css/dist/fonts/roboto/*"]).pipe(gulp.dest("src/fonts")));
gulp.task("fa", () => gulp.src("node_modules/font-awesome/css/font-awesome.min.css").pipe(gulp.dest("src/css")));
gulp.task("default", ["js", "serve", "fa", "fonts"]);
