let gulp = require('gulp')
let browserSync = require('browser-sync').create();
let sass = require('gulp-sass')

gulp.task('browser-sync', () => {
    browserSync.init({
        server:{
            baseDir: './'
        }
    })
})


gulp.task('sass', () => {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'))
})

gulp.task('default', ['browser-sync', 'sass'], (done) => {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload)
    gulp.watch('css/**/*.css').on('change', browserSync.reload)
})