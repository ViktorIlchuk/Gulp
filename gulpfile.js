const gulp = require('gulp');
const sass = require('gulp-sass')

// gulp.task('name-task', function() {
//     gulp.src(source-files)
//     .pipe(gulpPlagin())
//     .ppipe(gulp.dest('destination-directory'));
// })

gulp.task('sass', function(
) {
    gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
})