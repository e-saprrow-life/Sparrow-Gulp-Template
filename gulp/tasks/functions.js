export function initServer() {
    plugins.server.create()
    plugins.server.init({
        server: path.build.root,
        notify: false,
        port: 3000,
    })
}

export function reloadServer(cb) {
	plugins.server.reload();
    cb();
}

export function cleanBuildFolder() {
    return plugins.folderCleaner(path.build.root)
}