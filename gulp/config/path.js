import * as nodePath from 'path';

const root_folder = nodePath.basename(nodePath.resolve());
const src_folder = './app'; 
const build_folder = './build';

export const path = {
    scr: {
        root: src_folder + '/',
        pug: src_folder + '/pug',
    },
    build: {
        root: build_folder + '/',
        pug: build_folder + '/'
    },
    watch: {
        pug: src_folder + '/pug'
    }
}