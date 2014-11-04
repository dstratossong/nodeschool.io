var mymodule = require('./modules.js');


var path = process.argv[2];
var pattern = process.argv[3];

mymodule(path, pattern, function (err, data) {
	if (err) 
		return console.error('SOME HORRIBLE THINGS HAPPENED');

	data.forEach(function (x) {
		console.log(x);
	});
});