import * as nodePath from 'path';
const root_folder = nodePath.basename(nodePath.resolve());


const src_folder = './app'; 
const build_folder = './build';


export const path = {
    src: {
        root: src_folder + '/',
        pug: src_folder + '/pug',
        scss: src_folder + '/scss',
        js: src_folder + '/js',
    },
    build: {
        root: build_folder + '/',
        css: build_folder + '/css',
        js: build_folder + '/js',
    },
    watch: {
        pug: src_folder + '/pug/**/*.pug',
        scss: src_folder + '/scss/**/*.scss'
    }
}