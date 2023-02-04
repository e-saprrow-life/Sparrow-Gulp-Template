export function javascript() {
    return gulp.src([
        path.src.js + '/**/*.js',
        '!' + path.src.js + '/**/*_*.js'
    ])
    .pipe(plugins.plumber(
        plugins.notify.onError({
            title: 'JAvaScript ERROR',
            message: "Error: <%= error.message %>" 
        })
    ))
    .pipe(plugins.fileInclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest(path.build.js))
}



export function minJs() {
    return gulp.src([ path.build.js + '/*.js', '!' + path.build.js + '/*.min.js' ])
    .pipe(plugins.uglify())
    .pipe(plugins.renamer({extname: ".min.js"}))
    .pipe(gulp.dest(path.build.js))
}