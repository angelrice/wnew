var gulp = require('gulp')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var uglify = require('gulp-uglify')
var csv2json = require('./lib/wnew_csv2json')


gulp.task('build', function (cb) {
  browserify({
    entries: ['src/main.js']
  })
  .bundle()
  .pipe(source('main.min.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('js'))
  .on('end', cb)
})

gulp.task('csv2json', () => {
  gulp.src('./example/**/*.csv')
    .pipe(csv2json())
    .pipe(gulp.dest('./dest'))
})
