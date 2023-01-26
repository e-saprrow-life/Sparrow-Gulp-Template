export function pug2html() {
	return gulp.src(path.src.pug + '/*.pug')
		.pipe(plugins.plumber({
			errorHandler: function(err) {
				notify.onError({
					title: "Ошибка в PUG",
					message: "<%= error.message %>"
				})(err);
			}
		}))
		.pipe(plugins.pug())
        .pipe(plugins.htmlBeautify({
            "indent_size": 4
        }))
        .pipe(gulp.dest(path.src.root))
		.pipe(gulp.dest(path.build.root))
}