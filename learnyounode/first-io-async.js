var fs  = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, function (err, data) {
	if (err) {
		console.log('something terrible has happened');
	} else {
		var lines = data.toString().split('\n');
		console.log(lines.length == 0 ? 0 : lines.length - 1);
	}
});

