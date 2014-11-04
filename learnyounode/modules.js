function endsWith (str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

var fs  = require('fs');
module.exports = f;


function f (dir, ext, callback) {
	fs.readdir(dir, function (err, data) {
		if (err)
			return callback(err);

		return callback(null, data.filter(function (x) {
			return endsWith(x, '.' + ext);
		}));
	});
}