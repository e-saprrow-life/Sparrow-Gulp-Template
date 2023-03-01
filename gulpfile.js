// Основные компоненты сборки
import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

// Импорт задач:
import { initServer, reloadServer } from "./gulp/tasks/server.js";
import { html } from "./gulp/tasks/html.js";
import { css, minCss } from "./gulp/tasks/scss.js";
import { javascript, minJs } from "./gulp/tasks/javascript.js";
import { imagesMin, convertToWebP } from "./gulp/tasks/images.js";
import { createSprite } from "./gulp/tasks/sprite.js"

global.gulp    = gulp;      // Передаю в глобальную переменную основной модуль gulp
global.path    = path;      // Передаю в глобальную переменнаю объект path с путями
global.plugins = plugins;   // Передаю в глобальную переменнаю объект всех плагинов сборки

function watcher() {
    gulp.watch(path.watch.pug,  gulp.series(html, reloadServer));
    gulp.watch(path.watch.scss, gulp.series(css, reloadServer));
    gulp.watch(path.watch.js,   gulp.series(javascript, reloadServer));
    gulp.watch(path.watch.img,  gulp.series(gulp.parallel(imagesMin), reloadServer));
    // gulp.watch(path.watch.svgicons,     gulp.series(sprites, spriteHtmlWrite));
}

function cleanBuildFolder() {
    return plugins.folderCleaner(path.build.root)
}

// Основная задача
export const start = gulp.series(cleanBuildFolder, html, css, javascript, createSprite, gulp.parallel(imagesMin), gulp.parallel(watcher, initServer));
// export const start = gulp.series(createSprite, createPugSprite);

// Минификация css и js
export const min = gulp.parallel(minCss, minJs);