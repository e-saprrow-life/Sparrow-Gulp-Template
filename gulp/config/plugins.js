import pug from "gulp-pug"; // https://gist.github.com/neretin-trike/53aff5afb76153f050c958b82abd9228
import plumber from "gulp-plumber";
import htmlBeautify from "gulp-html-beautify"; // https://www.npmjs.com/package/gulp-html-beautify



// Объект со всеми плагинами
export const plugins = {
    pug: pug,
    plumber: plumber,
    htmlBeautify: htmlBeautify
}