/** Обработка основного файла скриптов
 * - обработка импорта файлов
 * - выгрузка
 */
export function js() {
    return gulp.src(path.src.js + '/script.js')
        .pipe(plugins.plumber(
            plugins.notify.onError({
                title: '=== JavaScript ERROR ===',
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(jsFileImport())
        .pipe(gulp.dest(path.build.js))
}



/** Обработка файла библиотек
 * - обработка импорта файлов
 * - минификация
 * - переименование
 * - выгрузка
 */
export function jsLibs() {
    return gulp.src(path.src.js + '/libs.js')
        .pipe(jsFileImport())
        .pipe(plugins.uglify({
            mangle: false,
            output: {
                comments: false // Оставить комменты
            }
        }))
        .pipe(plugins.renamer({ extname: ".min.js" }))
        .pipe(gulp.dest(path.build.js))
}



/** Минификация основного файла скриптов
 * - минификация
 * - переименование
 * - выгрузка
 */
export function minJs() {
    return gulp.src(path.build.js + '/script.js')
        .pipe(plugins.uglify())
        .pipe(plugins.renamer({ extname: ".min.js" }))
        .pipe(gulp.dest(path.build.js))
}



/** Дополнительная функция. Позволяет импортировать другие файлы js в основной. 
 * Работает только с основным файлом. 
 * Импорт внутри импортируемого файла работать не будет. */
import through2 from "through2";

function jsFileImport(file) {
    return through2.obj(function(file, encoding, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        // Путь к файлу в котором импортируются доп файлы относительно корня проекта
        let sourceFilePaht = plugins.path.relative(process.cwd(), file.dirname);

        // Регулярные выражения
        const includeRegex = /import\(\s*['"](.+?)['"]\s*\)/g;          // Для директивы @import('path')
        const excludeRegex1 = /\/\/\s*import\(\s*['"](.+?)['"]\s*\)\s*/g;  // Для директивы // @import('path')
        const excludeRegex2 = /\/\*\s*import\s*\(\s*['"](.+?)['"]\s*\)\s*\*\/\s*/g;  // Для директивы /* @import('path') */

        // Сохраняю содержимое файла как строку
        const contents = file.contents.toString();

        /**
         * Ищу в файле директиву import() и если она не закоментированная вставляю 
         * содержимое указаноого файла в конечный файл
         */
        const replacedContents = contents
        .replace(excludeRegex1, '')
        .replace(excludeRegex2, '')
        .replace(includeRegex, (match, includePath) => {
            let soursePath = plugins.path.resolve(sourceFilePaht, includePath); // получаю путь относительно файла libs.js
            return plugins.fs.readFileSync(soursePath, 'utf8');
        });

        file.contents = Buffer.from(replacedContents);
        this.push(file);
        cb(null, file);
    })
}