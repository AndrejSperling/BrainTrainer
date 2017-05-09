var argv = require('yargs').argv;
var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

var dependencies = [
    // Example: '@angular/**/*.js',
];

var modules = [
    // Example: 'iconv-lite/**/*',
];

gulp.task("modules", function () {
    return gulp.src(modules, {cwd: "node_modules/**"})
        .pipe(gulp.dest("./build/node_modules/"));
});

gulp.task("libs", function () {
    return gulp.src(dependencies, {cwd: "node_modules/**"})
        .pipe(gulp.dest("./build/libs/"));
});

gulp.task('styles', function () {
    var stylus = require('gulp-stylus');
    return gulp.src('./src/sources/css/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./build/src/css/'));
});

gulp.task('images', function () {
    return gulp.src('./src/sources/img/**/*').pipe(gulp.dest('./build/src/img/'));
});

gulp.task('templates', function () {
    return gulp.src('./src/sources/templates/**/*').pipe(gulp.dest('./build/'));
});

gulp.task('ts-app', function () {
    var ts = require('gulp-typescript');
    var project = ts.createProject('tsconfig-app.json');
    return gulp.src("./src/app/**/*.ts")
        .pipe(project())
        .pipe(gulpif(argv.minify, uglify()))
        .pipe(gulp.dest('./build/app/'));
});

gulp.task('ts-app-bundle-mkdir', ['ts-app'], function () {
    const shell = require('gulp-shell')
    return gulp.src('*.js', {read: false})
        .pipe(shell([
            'mkdirp ./build/dist/'
        ]))
});

gulp.task('ts-app-bundle', ['ts-app', 'ts-app-bundle-mkdir'], function () {
    const shell = require('gulp-shell')
    return gulp.src('*.js', {read: false})
        .pipe(shell(['browserify ./build/app/main.js --outfile=./build/dist/bundle.js']))

    // shell(['browserify ./build/app/main.js | uglifyjs > ./build/dist/bundle.js']

});

gulp.task('ts-electron', function () {
    var ts = require('gulp-typescript');
    var project = ts.createProject('tsconfig-electron.json');
    return gulp.src("./src/electron/**/*.ts")
        .pipe(project())
        .pipe(gulpif(argv.minify, uglify()))
        .pipe(gulp.dest('./build/electron'));
});

gulp.task('ts', ['ts-app', 'ts-electron', 'ts-app-bundle']);

gulp.task('build', ['templates', 'images', 'styles', 'ts', 'libs', 'modules']);

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/app/**/*', ['ts-app', 'ts-app-bundle']);
    gulp.watch('./src/electron/**/*', ['ts-electron']);
    gulp.watch('./src/sources/img/**/*', ['images']);
    gulp.watch('./src/sources/css/**/*', ['styles']);
    gulp.watch('./src/sources/templates/**/*', ['templates']);
});
