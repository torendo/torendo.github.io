const gulp = require('gulp');

module.exports.build = function () {
  return gulp.src('./node_modules/materialize-css/dist/css/materialize.css')
    .pipe(gulp.dest('./css'));
};