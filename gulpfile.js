import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import { initServer, reloadServer } from "./gulp/tasks/functions.js";
import { pug2html } from "./gulp/tasks/html.js";
import { css, cssLibs, minCss } from "./gulp/tasks/styles.js";
import { js, jsLibs, minJs } from "./gulp/tasks/scripts.js";
import { imagesMin, copyImages } from "./gulp/tasks/images.js";
import { createSprite } from "./gulp/tasks/sprite.js";
import { convertFonts, importFonts } from "./gulp/tasks/fonts.js";



global.gulp    = gulp;      // Передаю в глобальную переменную основной модуль gulp
global.path    = path;      // Передаю в глобальную переменнаю объект path с путями
global.plugins = plugins;   // Передаю в глобальную переменнаю объект всех плагинов сборки



function watcher() {
    gulp.watch( path.watch.pug,      gulp.series( pug2html, reloadServer ) );
    gulp.watch( path.watch.scss,     gulp.series( css, reloadServer ) );
    gulp.watch( path.watch.scssLibs, gulp.series( cssLibs, reloadServer ) );
    gulp.watch( path.watch.js,       gulp.series( js, reloadServer ) );
    gulp.watch( path.watch.jsLibs,   gulp.series( jsLibs, reloadServer ) );
    gulp.watch( path.watch.img,      gulp.series( gulp.parallel( copyImages ), reloadServer ) );
    gulp.watch( path.watch.sprite,   gulp.series( createSprite, pug2html, reloadServer ) );
}



export const fonts = gulp.series(convertFonts, importFonts);



export const start = gulp.series( 
    createSprite,
    gulp.parallel(pug2html, css, cssLibs, js, jsLibs, copyImages),
    // gulp.parallel(pug2html, css, cssLibs, copyImages),
    gulp.parallel(watcher) 
    // gulp.parallel(watcher, initServer) 
);

export const libs = gulp.series(jsLibs);


// export const min = gulp.parallel( 
//     minCss,
//     minJs, 
//     imagesMin 
// );