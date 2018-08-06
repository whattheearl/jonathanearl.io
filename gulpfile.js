const gulp = require('gulp')
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')
// const babel = require('gulp-babel');
const browserify = require('browserify')
const fs = require('fs')

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
        .pipe(gulp.dest('dist'))
})

gulp.task('browserify', () => {
    browserify({
      entries: 'src/js/index.js',
      debug: true
    })
    .bundle()
    .pipe(fs.createWriteStream('./dist/index.js'));
});

gulp.task('default', ['browser-sync', 'sass', 'browserify'], (done) => {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload)
    gulp.watch('css/**/*.css').on('change', browserSync.reload)
})
