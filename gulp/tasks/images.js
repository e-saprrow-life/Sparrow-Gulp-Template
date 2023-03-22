// Минификация изображений
export function imagesMin() {
    return gulp.src(path.src.img + '/**/*.*')
    .pipe(plugins.plumber(
        plugins.notify.onError({
            title: '=== Images Min ERROR ===',
            message: "Error: <%= error.message %>" 
        })
    ))
    .pipe(plugins.newer(path.build.img))
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

// Конвертация изображений в webp
export function convertToWebP() {
    return gulp.src(path.src.img + '/**/*.*')
    .pipe(plugins.plumber(
        plugins.notify.onError({
            title: '=== Convert To WebP ERROR ===',
            message: "Error: <%= error.message %>" 
        })
    ))
    .pipe(plugins.newer(path.build.img))
    .pipe(plugins.webpConverter())
    .pipe(gulp.dest(path.build.img))
}