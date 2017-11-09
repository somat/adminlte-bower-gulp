var gulp = require('gulp');
var merge = require('merge-stream');
var concat = require('gulp-concat');

/**
  Copy asset [css, js, Image]
  * jquery
  * font-awesome
  * bootstrap
  * admin-lte
**/
gulp.task('copy-assets', function() {
  // jquery
  var jquery = gulp.src('./bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./public/js'));

  // font-awesome
  var fafonts = gulp.src('./bower_components/font-awesome/fonts/**')
        .pipe(gulp.dest('./public/fonts'));
  var fajs = gulp.src('./bower_components/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest('./public/css'));

  // bootstrap
  var bsjs = gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('./public/js'));
  var bscss = gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('./public/css'));
  var bstemplate = gulp.src('./bower_components/bootstrap/dist/css/bootstrap-theme.min.css')
        .pipe(gulp.dest('./public/css'));
  var bsfonts = gulp.src('./bower_components/bootstrap/dist/fonts/**')
        .pipe(gulp.dest('./public/fonts'));
  var bsmap = gulp.src('./bower_components/bootstrap/dist/css/bootstrap-theme.min.css.map')
        .pipe(gulp.dest('./public/css'));

  // admin-lte
  var lteimg = gulp.src('./bower_components/admin-lte/dist/img/**')
        .pipe(gulp.dest('./public/img'));
  var ltejs = gulp.src('./bower_components/admin-lte/dist/js/app.min.js')
        .pipe(gulp.dest('./public/js'));
  var ltecss = gulp.src('./bower_components/admin-lte/dist/css/AdminLTE.min.css')
        .pipe(gulp.dest('./public/css'));

  return merge(jquery, fafonts, fajs,
    bsjs, bscss, bstemplate, bsfonts, bsmap,
    lteimg, ltejs, ltecss);

});

gulp.task('default', ['copy-assets'], function() {});
