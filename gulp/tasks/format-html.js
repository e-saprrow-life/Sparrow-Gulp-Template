export function formatHtml() {
    return gulp.src(path.build.root + '**/*.html')
    .pipe(plugins.formatHTML())
    .pipe(gulp.dest(path.build.root + '/new'))
}