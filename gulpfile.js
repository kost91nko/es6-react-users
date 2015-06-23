var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var http = require('http');
var st = require('st');
var bower = require('gulp-bower');

gulp.task('build', function () {
    browserify({
        entries: 'src/index.js',
        extensions: ['.js'],
        debug: true
    })
    .transform(babelify.configure({
            blacklist: ["regenerator"]
        }))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('bower', function() {
    return bower('./bower_components')
        .pipe(gulp.dest('dist/lib/'))
});

gulp.task('server', function(done) {
    var port = 8080;
    http.createServer(
        st({ path: __dirname + '/dist', index: 'index.html', cache: false })
    ).listen(port, done);
    console.log("Start listening on port: " + port);
});

gulp.task('watch', function() {
    gulp.watch("src/**/*.js", ['build']);
});

gulp.task('default', ['build', 'bower', 'server', 'watch']);