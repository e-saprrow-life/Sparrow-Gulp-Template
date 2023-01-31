// Main Components
import gulp from "gulp";                            // Импорт основного модуля
import { path } from "./gulp/config/path.js";       // Импорт путей
import { plugins } from "./gulp/config/plugins.js"; // Импорт всех подключенных плагинов
// Импорт задач:
import { initServer, reloadServer } from "./gulp/tasks/server.js";
import { html } from "./gulp/tasks/pug.js";
import { css, minCss } from "./gulp/tasks/scss.js";
import { javascript, minJs } from "./gulp/tasks/javascript.js";


global.gulp = gulp;         // Передаю в глобальную переменную основной модуль gulp
global.path = path;         // Передаю в глобальную переменнаю объект path с путями
global.plugins = plugins;   // Передаю в глобальную переменнаю объект всех плагинов сборки


function watcher() {
    gulp.watch(path.src.pug, gulp.series(html, reloadServer));
    gulp.watch(path.watch.scss, gulp.series(css, reloadServer));
    gulp.watch(path.watch.js,   gulp.series(javascript, reloadServer));
    // gulp.watch(path.watch.img,          images );
    // gulp.watch(path.watch.svgicons,     gulp.series(sprites, spriteHtmlWrite));
}


function cleanBuildFolder() {
    return plugins.folderCleaner(path.build.root)
}



// Основная задача
export const start = gulp.series(
    cleanBuildFolder, 
    html, 
    css,
    javascript,
    gulp.parallel(watcher, initServer)
);



// Минификация css и js
export const min = gulp.parallel(
    minCss,
    minJs
);