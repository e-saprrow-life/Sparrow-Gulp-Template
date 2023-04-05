export function copyImages() {
    plugins.folderCleaner(path.build.img)
    return gulp.src(path.src.img + '/**/*.*')
    .pipe(plugins.plumber(
        plugins.notify.onError({
            title: '=== Copy Images ERROR ===',
            message: "Error: <%= error.message %>" 
        })
    ))
    .pipe(gulp.dest(path.build.img))
}



export function imagesMin() {
    // plugins.folderCleaner(path.build.img)
    return gulp.src(path.src.img + '/**/*.*')
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