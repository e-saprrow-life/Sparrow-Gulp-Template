import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";



global.gulp    = gulp;      // Передаю в глобальную переменную основной модуль gulp
global.path    = path;      // Передаю в глобальную переменнаю объект path с путями
global.plugins = plugins;   // Передаю в глобальную переменнаю объект всех плагинов сборки



import { initServer, reloadServer, cleanBuildFolder } from "./gulp/tasks/functions.js";
import { pug2html } from "./gulp/tasks/html.js";
import { styles, libsCss, minStyleCss } from "./gulp/tasks/scss.js";
import { scripts, libsJs, minScriptJs } from "./gulp/tasks/javascript.js";
import { imagesMin, copyImages } from "./gulp/tasks/images.js";
import { createSprite } from "./gulp/tasks/sprite.js";
import { convertFonts, importFonts, replaceReadyFonts  } from "./gulp/tasks/fonts.js";



function watcher() {
    gulp.watch( path.watch.pug,      gulp.series( pug2html, reloadServer ) );
    gulp.watch( path.watch.styles,   gulp.series( styles, reloadServer ) );
    gulp.watch( path.watch.libsCss,  gulp.series( libsCss, reloadServer ) );
    gulp.watch( path.watch.scripts,  gulp.series( scripts, reloadServer ) );
    gulp.watch( path.watch.libsJs,   gulp.series( libsJs, reloadServer ) );
    gulp.watch( path.watch.img,      gulp.series( gulp.parallel( copyImages ), reloadServer ) );
    gulp.watch( path.watch.sprite,   gulp.series( createSprite, pug2html, reloadServer ) );
}



export const fonts = gulp.series(convertFonts, gulp.parallel(importFonts,replaceReadyFonts ));


/* 
export const start = gulp.series( 
    cleanBuildFolder, 
    pug2html, 
    styles, 
    libsCss,
    scripts, 
    libsJs,
    createSprite, 
    replaceReadyFonts,
    gulp.parallel(copyImages), 
    gulp.parallel(watcher, initServer) 
); */
export const start = gulp.series( 
    cleanBuildFolder, 
    createSprite,
    gulp.parallel(pug2html, styles, libsCss, scripts, libsJs, copyImages, replaceReadyFonts),
    gulp.parallel(watcher, initServer) 
);



export const min = gulp.parallel( 
    minStyleCss,
    minScriptJs, 
    imagesMin 
);