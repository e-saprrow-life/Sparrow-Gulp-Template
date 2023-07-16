const src_folder   = './app'; 
const build_folder = './build';

export const path = {
    src: {
        root:     src_folder + '/',
        scss:     src_folder + '/scss',
        js:       src_folder + '/js',
        img:      src_folder + '/img',
        sprite:   src_folder + '/icons',
        fonts:    src_folder + '/fonts',
        pug:    src_folder + '/pug'
    },
    build: {
        root:     build_folder + '/',
        css:      build_folder + '/css',
        js:       build_folder + '/js',
        img:      build_folder + '/img',
        sprite:   src_folder   + '/img/sprite',
        fonts:    build_folder + '/fonts'
    },
    watch: {
        pug:      src_folder + '/**/*.pug',
        scss:    [src_folder + '/scss/**/*.scss', '!' + src_folder + '/scss/libs.scss'],
        scssLibs: src_folder + '/scss/libs.scss',
        js:      [src_folder + '/js/**/*.js', '!' + src_folder + '/js/libs.js'],
        jsLibs:   src_folder + '/js/libs.js',
        img:      src_folder + '/img/**/*.*',
        sprite:   src_folder + '/img/sprite-source/*.*'
    }
}