// reads and returns metadata for all the modules
// useful for built tools, etc.
var fs = require('fs');
var packages = require('../package.json').packages;


module.exports = function () {
    var dir = __dirname + '/..';
    var packs = packages.map(function (file) {
        var folder = dir + '/' + file + '/';
        return {
            bareName: file,
            name: 'amp-' + file,
            code: read(folder, file + '.js'),
            pack: JSON.parse(read(folder, 'package.json')),
            readme: read(folder, 'README.md'),
            test: read(folder, 'test.js'),
            folder: folder,
            doc: read(folder, 'doc.md')
        };
    });

    packs.sort(function (p1, p2) {
        var name1 = p1.name;
        var name2 = p2.name;
        return name1.localeCompare(name2);
    });

    return packs;
}

function read(folder, file) {
    var filePath = folder + file;

    if (!fs.existsSync(filePath)) {
        return '';
    }
    return fs.readFileSync(filePath, 'utf8');
}