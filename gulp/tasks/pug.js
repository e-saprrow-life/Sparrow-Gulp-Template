export function pug2html() {
	return gulp.src(path.scr.pug + '/*.pug')
		.pipe(plugins.plumber({
			errorHandler: function(err) {
				notify.onError({
					title: "Ошибка в PUG",
					message: "<%= error.message %>"
				})(err);
			}
		}))
		.pipe(plugins.pug({
            pretty: true
        }))
		.pipe(gulp.dest(path.build.pug))
}