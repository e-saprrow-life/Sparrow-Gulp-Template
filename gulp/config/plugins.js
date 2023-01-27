// Импорт модулей
import browserSync from "browser-sync"; 
import pug from "gulp-pug"; // https://gist.github.com/neretin-trike/53aff5afb76153f050c958b82abd9228
import plumber from "gulp-plumber";
import htmlBeautify from "gulp-html-beautify"; // https://www.npmjs.com/package/gulp-html-beautify


// Создаю глобальный объект с модулями
export const plugins = {
    server: browserSync,
    plumber: plumber,
    pug: pug,
    htmlBeautify: htmlBeautify
}