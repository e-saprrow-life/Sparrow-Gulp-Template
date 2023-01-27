export function css() {
    return gulp.src(path.src.scss + '/**/*.scss')
    .pipe(plugins.plumber(
        plugins.notify.onError({
            title: 'SCSS ERROR',
            message: "Error: <%= error.message %>" 
        })
    ))
    .pipe(plugins.scss())
    .pipe(plugins.autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 3 versions"], // Поддержка трех последних версий
        cascade: true
    }))
    .pipe(plugins.shortHand())
    .pipe(plugins.groupMedia())
    .pipe(gulp.dest(path.build.css))
}