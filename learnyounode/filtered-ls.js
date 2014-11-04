function endsWith (str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

var fs  = require('fs');
var path = process.argv[2];
var pattern = process.argv[3];

fs.readdir(path, function (err, data) {
	if (err) {
		console.log('something terrible has happened');
	} else {
		for (var i = 0; i < data.length; i++) {
			if (endsWith(data[i], '.' + pattern)) {
				console.log(data[i]);
			}
		}
	}
});

