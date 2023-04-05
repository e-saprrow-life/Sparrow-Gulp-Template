export function createSprite() {
    //  '!' + path.src.sprite + '/sprite.svg'
    return gulp.src(path.src.sprite + '/source/*.svg')
    .pipe(plugins.plumber(
        plugins.notify.onError({
            title: '=== SVG ICONS ERROR ===',
            message: "Error: <%= error.message %>" 
        })
    ))
    .pipe(plugins.svgSprite({
        shape: {
            dimension: {
                maxWidth: 500,
                maxHeight: 500
            },
            spacing: {
                padding: 0
            },
            transform: [{
                "svgo": {
                    "plugins": [
                        { removeViewBox: false },
                        { removeUnusedNS: false },
                        { removeUselessStrokeAndFill: true },
                        { cleanupIDs: false },
                        { removeComments: true },
                        { removeEmptyAttrs: true },
                        { removeEmptyText: true },
                        { collapseGroups: true },
                        { removeAttrs: { attrs: '(fill|stroke|style)' } }
                    ]
                }
            }]
        },
        mode: {
            symbol: {
                dest : '',
                sprite: 'sprite.svg'
            }
        },
        svg: { 
            xmlDeclaration: false,
        }
    }))
    .pipe(gulp.dest(path.src.sprite))
}