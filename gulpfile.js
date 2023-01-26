// Main Components
import gulp from "gulp";                            // Импорт основного модуля
import { path } from "./gulp/config/path.js";       // Импорт путей
import { plugins } from "./gulp/config/plugins.js"; // Импорт всех подключенных плагинов


global.gulp = gulp;         // Передаю в глобальную переменную основной модуль gulp
global.path = path;         // Передаю в глобальную переменнаю объект path с путями
global.plugins = plugins;   // Передаю в глобальную переменнаю объект всех плагинов сборки


// Tasks import:
import { pug2html } from "./gulp/tasks/pug.js";
import { formatHtml } from "./gulp/tasks/format-html.js";



// Global Tasks
// const start = gulp.series(pug2html, formatHtml);
const start = gulp.series(pug2html);
export { start }