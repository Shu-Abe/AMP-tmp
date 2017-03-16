var gulp = require("gulp");
var sass = require("gulp-sass");
var fileInclude = require('gulp-file-include');
var cssmin = require('gulp-cssmin');
var replace = require('gulp-replace');
var notify = require('gulp-notify');
var amperize = require('amperize');

gulp.task("check", function() {
  gulp.src("./sass/style.scss")
});

gulp.task("sass", ['include'], function() {
  gulp.src("./sass/style.scss")
    .pipe(sass())
    .pipe(replace('!important', ''))
    .pipe(cssmin())
    .pipe(gulp.dest("./css"))

});

gulp.task('include', function() {
  gulp.src("./app/*.html")
    .pipe(replace('/<(.*)>.*<\/\1>/', ''))
    .pipe(fileInclude())
    .pipe(gulp.dest('./amp'))
    .pipe(notify('AMPファイルを作成しました！'));
});

gulp.task("default", ['include'], function() {
  gulp.watch("./sass/*.scss",["check"]);
  gulp.watch("./sass/*.scss",["sass"]);
  gulp.watch("./**/*.html",["include"]);
});
