var split = require('split');
var through = require('through');

var token = true;
process.stdin
	.pipe(split())
	.pipe(through(function (line) {
		if (token) {
			this.queue(line.toString().toLowerCase() + '\n');
			token = false;
		} else {
			this.queue(line.toString().toUpperCase() + '\n');
			token = true;
		}
	}))
	.pipe(process.stdout);
