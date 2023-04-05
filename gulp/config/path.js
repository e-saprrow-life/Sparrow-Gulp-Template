/* import * as nodePath from 'path';
const root_folder = nodePath.basename(nodePath.resolve()); */


const src_folder = './app'; 
const build_folder = './build';


export const path = {
    src: {
        root: src_folder + '/',
        scss: src_folder + '/scss',
        js: src_folder + '/js',
        img: src_folder + '/img',
        sprite: src_folder + '/sprite',
        fonts: src_folder + '/fonts'
    },
    build: {
        root: build_folder + '/',
        css: build_folder + '/css',
        js: build_folder + '/js',
        img: build_folder + '/img',
        sprite: src_folder + '/img/sprite',
        fonts: build_folder + '/fonts'
    },
    watch: {
        pug: src_folder + '/**/*.pug',
        styles: [src_folder + '/scss/**/*.scss', '!' + src_folder + '/scss/libs.scss'],
        libsCss: src_folder + '/scss/libs.scss',
        scripts: [src_folder + '/js/**/*.js', '!' + src_folder + '/js/libs.js'],
        libsJs: src_folder + '/js/libs.js',
        img: src_folder + '/img/**/*.*',
        sprite: src_folder + '/sprite/source/*.*'
    }
}