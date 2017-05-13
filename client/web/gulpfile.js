var gulp        = require('gulp');
var util        = require('gulp-util');
const shell     = require('gulp-shell');
const _         = require('underscore');
const mkdirp    = require('mkdirp');

var dependencies = [
    // Example: '@angular/**/*.js',
];

var modules = [
    // Example: 'iconv-lite/**/*',
];

const folders = [
    'public/src/js',
    'public/src/css',
];


gulp.task("modules", function () {
    return gulp.src(modules, {cwd: "node_modules/**"})
        .pipe(gulp.dest("./public/node_modules/"));
});

gulp.task("libs", function () {
    return gulp.src(dependencies, {cwd: "node_modules/**"})
        .pipe(gulp.dest("./public/libs/"));
});

gulp.task("make-folders", function () {
    _.each(folders, function (file) {
        mkdirp.sync(file, function (err) {
            if (err) console.error(err)
            else console.log("File created: " + file)
        });
    })
})

gulp.task("bundle", ["make-folders"], function () {
    return gulp.src('./lib/main.js', {read: false})
        .pipe(shell(['mkdirp ./public/src/js/']))
        .pipe(shell(['browserify ./lib/main.js --outfile=./public/src/js/bundle.js']))
});

gulp.task("styles", function () {
    const stylus = require('gulp-stylus');
    return gulp.src('./src/sources/css/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./public/src/css/'));
});

gulp.task("templates", function () {
    return gulp.src('./src/sources/templates/*.html')
        .pipe(gulp.dest('./public/'));
});

gulp.task("views", ["styles", "templates"]);
gulp.task("build", ["views", "bundle"]);

gulp.task("watch", ["views"], function () {
    gulp.watch("./lib/**/*", ["bundle"]);
    gulp.watch("./sources/**/*", ["views"])
});
