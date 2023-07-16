export function css() {
    return gulp.src(path.src.scss + '/style.scss')
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



export function cssLibs() {
    return gulp.src(path.src.scss + '/libs.scss')
    .pipe(plugins.scss())
    .pipe(plugins.cleanCss())
    .pipe(plugins.renamer({extname: ".min.css"}))
    .pipe(gulp.dest(path.build.css))
}



export function minCss() {
    return gulp.src(path.build.css + '/style.css')
    .pipe(plugins.cleanCss())
    .pipe(plugins.renamer({extname: ".min.css"}))
    .pipe(gulp.dest(path.build.css))
}