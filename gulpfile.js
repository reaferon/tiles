var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');
var notify = require("gulp-notify");
var sass = require('gulp-sass');

gulp.task('default', function() {

});

gulp.task('css', function () {
    gulp.src([
        'dist/scss/index.scss'
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(concatCss('styles.css'))
        //.pipe(minifyCSS(''))
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest(''))
        .pipe(notify({
            "title": "CSS",
            "message": "Styles was saved",
            "sound": "Pop", // Basso, Blow, Bottle, Frog, Funk, Glass, Hero, Morse, Ping, Pop, Purr, Sosumi, Submarine, Tink
            "onLast": true,
            "wait": true
        }));
});

var watcherCss = gulp.watch([
    'dist/scss/*',
    'dist/scss/bulma-0.8.0/*',

], ['css']);
//var watcherCss = gulp.watch('frontend/dist/css/*', gulp.series('default'));
watcherCss.on('change', function(event) { console.log('css changed');});