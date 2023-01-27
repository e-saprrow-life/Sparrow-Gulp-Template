// Импорт модулей
import browserSync from "browser-sync"; 
import plumber from "gulp-plumber";
import notify from "gulp-notify";


import pug from "gulp-pug"; // https://gist.github.com/neretin-trike/53aff5afb76153f050c958b82abd9228
import htmlBeautify from "gulp-html-beautify"; // https://www.npmjs.com/package/gulp-html-beautify

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import shortHand from 'gulp-shorthand';
import autoprefixer from 'gulp-autoprefixer';
import groupMedia from 'gulp-group-css-media-queries';



// Создаю глобальный объект с модулями
export const plugins = {
    server: browserSync,
    plumber: plumber,
    notify: notify,
    pug: pug,
    htmlBeautify: htmlBeautify,
    scss: sass,
    shortHand: shortHand,
    autoprefixer: autoprefixer,
    groupMedia: groupMedia
}