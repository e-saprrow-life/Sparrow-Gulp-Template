import * as nodePath from 'path';
const root_folder = nodePath.basename(nodePath.resolve());


const src_folder = './app'; 
const build_folder = './build';


export const path = {
    src: {
        root: src_folder + '/',
        pug: src_folder + '/pug',
        scss: src_folder + '/scss',
    },
    build: {
        root: build_folder + '/',
        css: build_folder + '/css',
    },
    watch: {
        pug: src_folder + '/pug/**/*.pug',
        scss: src_folder + '/scss/**/*.scss'
    }
}