const gulp = require('gulp');
const webpack = require('webpack-stream');
const config = require('./webpack.config.js');

gulp.task('webpack', () => {
  return gulp.src('./js/**/*.ts')
    .pipe(webpack(config), require('webpack'))
    .pipe(gulp.dest('../www/js/'));
});

// 编译less
gulp.task('less', () => {
  const less = require('gulp-less');

  return gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('../www/css'));
});

gulp.task('default', ['webpack', 'less']);

gulp.task('watch', () => {
  gulp.watch('./less/**/*.less', ['less']);
  gulp.watch('./js/**/*.js', ['webpack']);
});
