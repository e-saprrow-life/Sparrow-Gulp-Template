/**
 * == Файл импотра и подключения плагинов ==
 */
import pug from "gulp-pug";
import plumber from "gulp-plumber";
import formatHtml from "gulp-format-html";



// Объект со всеми плагинами
export const plugins = {
    pug: pug,
    plumber: plumber,
    formatHtml: formatHtml
}