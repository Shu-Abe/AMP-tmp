var gulp = require("gulp");
var sass = require("gulp-sass");
var fileInclude = require('gulp-file-include');
var cssmin = require('gulp-cssmin');
var replace = require('gulp-replace');
var notify = require('gulp-notify');
var amperize = require('gulp-amperize');
var plumber = require("gulp-plumber");

gulp.task("check", function() {
  gulp.src("./sass/style.scss")
});

gulp.task("sass", ['include'], function() {
  gulp.src("./sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(replace('!important', ''))
    .pipe(replace('@charset "UTF-8";', ''))
    .pipe(cssmin())
    .pipe(gulp.dest("./parts/style.css"))

});

gulp.task('include', function() {
  gulp.src("./before/*.html")
    .pipe(plumber())
    .pipe(amperize())
    .pipe(fileInclude())
    .pipe(gulp.dest('./after'))
    .pipe(notify('AMPファイルを作成しました！'));
});


gulp.task("default", ['include'], function() {
  gulp.watch("./before/*.scss",["check"]);
  gulp.watch("./before/*.scss",["sass"]);
  gulp.watch("./**/*.html",["include"]);
});
