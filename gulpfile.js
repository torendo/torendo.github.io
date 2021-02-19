const gulp = require('gulp');
var concat = require('gulp-concat');

function css (isDev) {
  var sheets = [
    './node_modules/materialize-css/dist/css/materialize.css',
    './src/main.css'
  ];
  if (isDev) {
    sheets.push('./src/print-test.css');
  }
  return gulp.src(sheets)
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./'));
}

function html () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./'));
}

var build = gulp.parallel(
  css.bind(null, false),
  html
);

exports.build = build;

var buildDev = gulp.parallel(
  css.bind(null, true),
  html
);

exports.buildDev = buildDev;