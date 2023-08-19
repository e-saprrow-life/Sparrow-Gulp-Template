/** Копирование изображений из рабочей папки в итоговую. 
 * - чистит папку ./build/img
 * - перемещает изображения из ./app/img в ./build/img
 */
export function img() {
    plugins.cleaner(path.build.img + '/**/*.*')
    return gulp.src([`${path.src.img}/**/*.*`, `!${path.src.img}/sprite-source/*.svg`])
    .pipe(plugins.plumber(
        plugins.notify.onError({
            title: '=== Images ERROR ===',
            message: "Error: <%= error.message %>" 
        })
    ))
    // .pipe(plugins.cleaner(path.build.img + '/**/*.*'))
    .pipe(gulp.dest(path.build.img))
}



/** Копирование изображений из рабочей папки в итоговую. 
 * - чистит папку ./build/img
 * - ужимает изображения
 * - помещает изображения в ./build/img
 */
export function imagesMin() {
    plugins.cleaner(path.build.img + '/**/*.*')
    return gulp.src([`${path.src.img}/**/*.*`, `!${path.src.img}/sprite-source/*.svg`])
    .pipe(plugins.plumber(
        plugins.notify.onError({
            title: '=== Images Min ERROR ===',
            message: "Error: <%= error.message %>" 
        })
    ))
    .pipe(plugins.imagemin({
            progressive: true,
            svgoPlugins: [{ 
                removeViewBox: false 
            }],
            interLaced: true,
            optimizationLevel: 4 // 0 - 7 
        })
    )
    .pipe(gulp.dest(path.build.img))
}