var gulp = require('gulp');

var server = require('gulp-server-livereload');
var sass = require('gulp-ruby-sass');
 
gulp.task('sass', () =>
    sass('src/main.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('result'))
);

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
    	 livereload: true,
      defaultFile: 'index.html'
    }));
});



