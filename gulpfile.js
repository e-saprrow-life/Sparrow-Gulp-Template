// Main Components
import gulp from "gulp";                            // Импорт основного модуля
import { path } from "./gulp/config/path.js";       // Импорт путей
import { plugins } from "./gulp/config/plugins.js"; // Импорт всех подключенных плагинов


global.gulp = gulp;         // Передаю в глобальную переменную основной модуль gulp
global.path = path;         // Передаю в глобальную переменнаю объект path с путями
global.plugins = plugins;   // Передаю в глобальную переменнаю объект всех плагинов сборки

// Настройки локального сервера
plugins.server.create()
plugins.server.init({
    server: path.build.root,
    notify: false,
    port: 3000,
})

function reloadServer() {
	plugins.server.reload()
}


// Импорт задач:
import { pug2html } from "./gulp/tasks/pug.js";








function watcher() {
    gulp.watch(path.src.pug, gulp.series(pug2html, reloadServer));
    // gulp.watch(path.watch.scss,         scss );
    // gulp.watch(path.watch.js,           js );
    // gulp.watch(path.watch.img,          images );
    // gulp.watch(path.watch.svgicons,     gulp.series(sprites, spriteHtmlWrite));
}


// Global Tasks
const start = gulp.series(
    pug2html, 
    gulp.parallel(watcher)
);

export { start }