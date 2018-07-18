const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');

gulp.task('sass', function() {
  gulp
    .src(['./src/scss/*.scss'])
    .pipe(
      sass({
        includePaths: ['./src/scss'],
        outputStyle: 'expanded'
      })
    )
    .pipe(gulp.dest('./srv/css'));
});

gulp.task('copy', function() {
  gulp.src('./src/index.html').pipe(gulp.dest('./srv/'));
});

gulp.task('connect:open', function() {
  const opn = require('opn');
  return opn('http://localhost:1337');
});

gulp.task('connect', function() {
  connect.server({
    root: 'srv',
    port: 1337,
    livereload: true
  });
});

gulp.task('livereload', function() {
  gulp.src('./srv/**/*').pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./src/*.html', ['copy']);
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch('./src/**/*', ['livereload']);
});

gulp.task('default', ['connect', 'connect:open', 'watch', 'sass', 'copy']);
