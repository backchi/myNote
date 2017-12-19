// gulp 모듈
var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var css = require('gulp-clean-css');
var watch = require('gulp-watch');

var controlJS = ['src/js/FileSaver.js', 'src/js/screenfull.js','src/js/util.js', 'src/js/app.js'];

// gulp task
gulp.task('connectHtml', function() {
  return gulp.src('index.html')
  .pipe(connect.reload())
  .pipe(gulp.dest(''));
});

gulp.task('scripts', function() {
    return gulp.src(controlJS)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
});

gulp.task('css', function() {
    return gulp.src('src/css/app.css')
        .pipe(css())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['build']);
});

gulp.task('build', ['css', 'scripts']);
gulp.task('default', ['build', 'watch']);
