var concat = require('concat-stream')

process.stdin
	.pipe(concat(function (body) {
		process.stdout.write(body.toString().split("").reverse().join(""));
	}));
	// .pipe(concat(function (body) {
	// 	this.queue(body.toString().split("").reverse().join(""));
	// }))
	// .pipe(process.stdout);

