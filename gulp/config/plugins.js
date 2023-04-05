// Импорт модулей
import fs from "fs";
import path from "path";
import {deleteAsync} from 'del';
import browserSync from "browser-sync"; 
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import renamer from "gulp-rename";
import fileInclude from "gulp-file-include";    // https://openbase.com/js/gulp-file-include/documentation  https://www.npmjs.com/package/gulp-file-include
import pug from "gulp-pug";                     // https://gist.github.com/neretin-trike/53aff5afb76153f050c958b82abd9228
import htmlBeautify from "gulp-html-beautify";  // https://www.npmjs.com/package/gulp-html-beautify
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import shortHand from 'gulp-shorthand';
import autoprefixer from 'gulp-autoprefixer';
import groupMedia from 'gulp-group-css-media-queries';
import cleanCss from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import webpConverter from 'gulp-webp';
import svgSprite from 'gulp-svg-sprite';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';


export const plugins = {
    fs: fs,
    path: path,
    folderCleaner: deleteAsync,
    server: browserSync,
    plumber: plumber,
    notify: notify,
    renamer: renamer,
    fileInclude: fileInclude,
    pug: pug,
    htmlBeautify: htmlBeautify,
    scss: sass,
    shortHand: shortHand,
    autoprefixer: autoprefixer,
    groupMedia: groupMedia,
    cleanCss: cleanCss,
    uglify: uglify,
    imagemin: imagemin,
    webpConverter: webpConverter,
    svgSprite: svgSprite,
    fonter: fonter,
    ttf2woff2: ttf2woff2,
}