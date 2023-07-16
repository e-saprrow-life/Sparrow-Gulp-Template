/** Конвертирует pug файлы в html
 * - Обработка и конвертация pug в html
 * - настройка нормальных отступов
 * - выгрузка
 */
export function pug2html() {
	return gulp.src([`${path.src.root}/**/*.pug`, `!${path.src.pug}/**/*.pug`])
	// return gulp.src(path.src.root + '/**/*.pug')
    .pipe(plugins.plumber(
        plugins.notify.onError({
            title: '=== PUG ERROR ===',
            message: "Error: <%= error.message %>" 
        })
    ))
    .pipe(plugins.pug())
    .pipe(plugins.htmlBeautify({
        "indent_size": 4
    }))
    .pipe(gulp.dest(path.build.root))
}