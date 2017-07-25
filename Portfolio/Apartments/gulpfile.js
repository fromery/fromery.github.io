const gulp = require('gulp');
const cssMin = require('gulp-cssmin');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');


gulp.task('sass', function () {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('cssMin', function () {
    gulp.src('./src/css/**/*.css')
        .pipe(cssMin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build'))
});

gulp.task('img', function () {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
});

gulp.task('scripts', ['JSclean'], function () {
    return gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./src/css/**/*.css', ['cssMin']);
    gulp.watch('./src/js/**/*.js', ['scripts']);
});

gulp.task('clean', function () {
    return del.sync('build');
});

gulp.task('JSclean', function () {
    return del.sync('build/all.js');
});

gulp.task('default', ['img', 'sass', 'cssMin', 'scripts', 'watch']);

gulp.task('build', ['clean', 'img', 'sass', 'cssMin', 'scripts', 'watch'], function () {


    var buildFonts = gulp.src('src/**/*.ttf')
        .pipe(gulp.dest('build'));

    /*var buildHtml = gulp.src('src/!*.html')
     .pipe(gulp.dest('dist'));
     */
});
