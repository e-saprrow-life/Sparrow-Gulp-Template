export function scripts() {
    return gulp.src(path.src.js + '/script.js')
    .pipe(plugins.plumber(
        plugins.notify.onError({
            title: 'JavaScript ERROR',
            message: "Error: <%= error.message %>" 
        })
    ))
    .pipe(plugins.fileInclude({
        prefix: '@',
        basepath: '@file'
    }))
    .pipe(gulp.dest(path.build.js))
}


export function libsJs() {
    return gulp.src(path.src.js + '/libs.js')
    .pipe(plugins.fileInclude({
        prefix: '@',
        basepath: '@file'
    }))
    .pipe(plugins.uglify({
        mangle: false,
        output: {
            comments: false // Оставить комменты
        }
    }))
    .pipe(plugins.renamer({extname: ".min.js"}))
    .pipe(gulp.dest(path.build.js))
}


export function minScriptJs() {
    return gulp.src(path.build.js + '/script.js')
    .pipe(plugins.uglify())
    .pipe(plugins.renamer({extname: ".min.js"}))
    .pipe(gulp.dest(path.build.js))
}