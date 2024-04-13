const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));      
const minify = require('gulp-minify');

gulp.task('sass', function() {
    return gulp.src('./src/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('compress', function() {
    gulp.src('./src/js/*.js')
      .pipe(minify())
      .pipe(gulp.dest('./dist/js'))
  });
        
gulp.task('watch', function(){
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/js/**/*.js', gulp.series('compress'));
});

gulp.task('default', gulp.series('watch', 'sass', 'compress'));