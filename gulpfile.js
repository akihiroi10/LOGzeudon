var gulp = require("gulp");
var less = require("gulp-less");
var autoprefixer = require("gulp-autoprefixer");
var clean = require("gulp-clean-css");

// ベンダープレフィックス自動化
gulp.task("less", function() {
    gulp.src("boilerplate.less")
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(clean())
        .pipe(gulp.dest("."));
});

// ファイルの監視
gulp.task("default", function() {
    gulp.watch(["less/*.less","boilerplate.less"],["less"]);
});
