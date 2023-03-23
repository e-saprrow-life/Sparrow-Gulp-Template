export function convertFonts() {
    return gulp.src(path.src.fonts + '/**/*.ttf')
    .pipe(plugins.plumber(
        plugins.notify.onError({
            title: 'Fonts Convertation ERROR',
            message: "Error: <%= error.message %>" 
        })
    ))
    .pipe(gulp.dest(path.build.fonts))
    .pipe(plugins.fonter({
        formats: ['woff', 'eot']
    }))
    .pipe(gulp.dest(path.build.fonts))    
    .pipe(gulp.src(path.src.fonts + '/**/*.ttf'))
    .pipe(plugins.ttf2woff2())
    .pipe(gulp.dest(path.build.fonts))    
}


export function cleanFontsFolder() {
    return plugins.folderCleaner(path.build.fonts)
}

export async function importFonts() {
    let fontsFilePath = path.src.scss + "/common/_fonts.scss";
    if (plugins.fs.existsSync(fontsFilePath)) {
        console.log('Файл ' + fontsFilePath + " существует. Продолжаю.");
        let files = getFiles(path.src.fonts)
        for (let i in files) {
            let fontPath =  files[i].split('.')[0];
            plugins.fs.writeFile(fontsFilePath, '', cb);
            plugins.fs.appendFile(fontsFilePath, `@include font-face("${getFontFamily(files[i])}", "../fonts/${fontPath}", ${getFontWeight(files[i])}, ${getFontStyle(files[i])});\n`, cb);

        }
    } else {
        console.log('Файл ' + fontsFilePath + " не существует")
    }
}


function cb() {}


function getFiles(dir, files = [], subdir) {
    const entries = plugins.fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullpath = plugins.path.join(dir, entry.name);
        if (entry.isDirectory()) {
           getFiles(fullpath, files, entry.name);
        } else if (subdir) {
           files.push(subdir + '/' + entry.name);
        } else {
           files.push(entry.name);
        }
    }
    return files;
}

// Возвращает font-family
function getFontFamily(entry) {
    let fileName = entry.split('/')[1] ? entry.split('/')[1] : entry;
    if (fileName.split('-')[1]) {
        return fileName.split('-')[0]
    } else if (fileName.split('.')[0]) {
        return fileName.split('.')[0]
    }
}


// Возвращает font-weight
function getFontWeight(entry) {
    let fontWeight = entry.split('-')[1] ? entry.split('-')[1] : entry;
    if (fontWeight.toLowerCase().indexOf('thin') !== -1) {
        return 100;
    } else if (fontWeight.toLowerCase().indexOf('extralight') !== -1) {
        return 200;
    } else if (fontWeight.toLowerCase().indexOf('light') !== -1 && fontWeight.toLowerCase().indexOf('extralight') === -1) {
        return 300;
    } else if (fontWeight.toLowerCase().indexOf('medium') !== -1) {
        return 500;
    } else if (fontWeight.toLowerCase().indexOf('semibold') !== -1) {
        return 600;
    } else if (fontWeight.toLowerCase().indexOf('bold') !== -1 && fontWeight.toLowerCase().indexOf('semibold') === -1 && fontWeight.toLowerCase().indexOf('extrabold') === -1) {
        return 700;
    } else if (fontWeight.toLowerCase().indexOf('extrabold') !== -1 || fontWeight.toLowerCase().indexOf('heavy') !== -1) {
        return 800;
    } else if (fontWeight.toLowerCase().indexOf('black') !== -1) {
        return 900;
    } else {
        return 400;
    }
}

// Возвращает font-style
function getFontStyle(entry) {
    if (entry.toLowerCase().indexOf('italic') !== -1) {
        return 'italic';
    } else {
        return 'normal'
    }
}