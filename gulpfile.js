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

function reloadServer(cb) {
	plugins.server.reload();
    cb();
}


// Импорт задач:
import { html } from "./gulp/tasks/pug.js";
import { css } from "./gulp/tasks/scss.js";


function watcher() {
    gulp.watch(path.src.pug, gulp.series(html, reloadServer));
    gulp.watch(path.watch.scss, gulp.series(css, reloadServer));
    // gulp.watch(path.watch.js,           js );
    // gulp.watch(path.watch.img,          images );
    // gulp.watch(path.watch.svgicons,     gulp.series(sprites, spriteHtmlWrite));
}


// Global Tasks
const start = gulp.series(
    html, 
    css,
    gulp.parallel(watcher)
);

export { start }