const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const connect = require('gulp-connect');
var rename = require('gulp-rename');

gulp.task('sass', function(done) {
  gulp
    .src(['./src/scss/*.scss'])
    .pipe(
      sass({
        includePaths: ['./src/scss'],
        outputStyle: 'expanded'
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest('./srv/css'));
    done()
});

gulp.task('js', function(done){
  gulp.src(['./src/js/*.js']).pipe(gulp.dest('./srv/js/'));
  gulp.src('./node_modules/es6-scroll-to/lib/index.js').pipe(rename('es6-scroll-to.js')).pipe(gulp.dest('./srv/js/'));
  done()
});

gulp.task('html', function (done) {
  gulp.src('./src/*.html').pipe(gulp.dest('./srv/'));
  done()
});

gulp.task('connect:open', function() {
  const open = require('open');
  return open('http://localhost:1337');
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
  gulp.watch('./src/*.html', gulp.series('html'));
  gulp.watch('./src/js/*.js', gulp.series('js'));
  gulp.watch('./src/scss/*.scss', gulp.series('sass'));
  gulp.watch('./src/**/*', gulp.series('livereload'));
});

gulp.task('default', gulp.series('sass', 'js', 'html', 'connect', 'connect:open', 'watch'));
