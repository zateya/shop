'use strict';

var gulp = require('gulp');
var sourcemap = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var minify = require('gulp-csso');
var rename = require('gulp-rename');
var svgstore = require("gulp-svgstore");
var del = require('del');
var server = require('browser-sync').create();
var ghpages = require('gh-pages');

gulp.task('clean', function () {
  return del('dist');
});

gulp.task('copy', function() {
  return gulp.src([
      'src/fonts/**/*.{woff,woff2}',
      'src/images/**',
      'src/js/**',
      'src/*.ico'
    ], {
      base: 'src'
    })
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
  return gulp.src('src/styles/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('../maps'))
    .pipe(gulp.dest('dist/css'))
    .pipe(server.stream());
});

gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(server.stream());
});

gulp.task('js', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(server.stream());
});

gulp.task('sprite', function () {
  return gulp.src('src/images/sprite/*.svg')
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest('dist/images'))
  .pipe(server.stream());
});

gulp.task('serve', function () {
  server.init({
    server: 'dist/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('src/styles/**/*.{scss,sass}', gulp.series('css'));
  gulp.watch('src/*.html', gulp.series('html'));
  gulp.watch('src/js/**/*.js', gulp.series('js'));
});

gulp.task('build', gulp.series('clean', 'copy', 'css', 'sprite','html'));
gulp.task('start', gulp.series('build', 'serve'));

ghpages.publish('build');
