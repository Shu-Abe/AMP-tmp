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
  gulp.src("./before/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(replace('!important', ''))
    .pipe(cssmin())
    .pipe(replace('@charset "UTF-8";', ''))    .pipe(gulp.dest("./parts"))

});

gulp.task('include', function() {
  gulp.src("./before/*.html")
    .pipe(plumber())
    .pipe(replace(/.*\<script[\s\S]*?\<\/script\>/g, ''))
    .pipe(replace(/<!--[\s\S]*?-->/g, ''))
    .pipe(amperize())
    .pipe(fileInclude())
    .pipe(gulp.dest('./after'))
});


gulp.task("default", ['include'], function() {
  gulp.watch("./before/*.scss",["check"]);
  gulp.watch("./before/*.scss",["sass"]);
  gulp.watch("./**/*.html",["include"]);
});
