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


// export async function createPugSprite() {
//     let sprite = plugins.fs.existsSync(path.src.sprite  + '/sprite.svg');
//     let pugFile = plugins.fs.existsSync(path.src.root + '/pug/common/_sprite.pug');
//     console.log('Start')
//     if (!sprite || !pugFile) return false;
//     console.log('sprite & pugFile - is ok')
//     let spriteContent = plugins.fs.readFileSync(path.src.sprite  + '/sprite.svg', "utf8");
    
//     if (spriteContent) {
//         plugins.fs.writeFile(path.src.root + '/pug/common/_sprite.pug', '', cb);
//         plugins.fs.appendFile(path.src.root + '/pug/common/_sprite.pug', createBodySvgFile(spriteContent), cb);
//     } else {
//         plugins.fs.writeFile(path.src.root + '/pug/common/_sprite.pug', '', cb);
//     }
// }

// function createBodySvgFile(svg) {
//     // return '<!-- SVG SPRITES PACK -->\n<div class="svg-sprites-pack">\n \t' + svg + '\n</div>'
//     return `//- SVG SPRITES PACK\n.svg-sprites-pack\n \t \t${svg}`
// }

// function cb(i) {
//     console.log(i)
// }