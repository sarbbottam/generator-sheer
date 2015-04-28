/*
 * Copyright (c) 2015, Sarbborram Bandyopadhyay. All rights reserved.
 * Copyrights licensed under the MIT License.
 * See the accompanying LICENSE file for terms.
 */

var gulp            = require('gulp');
var postcss         = require('gulp-postcss');

gulp.task('generate-variables', function () {
  var processors = [
    require('postcss-import')()
  ];
  return gulp.src('./node_modules/sheer/src/variables/variables.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./app/templates/_src/css/variables/'));
});

gulp.task('default', ['generate-variables']);
