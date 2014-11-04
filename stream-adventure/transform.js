var through = require('through');
var tr = through (function (buf) {
	var str = buf.toString().toUpperCase();
	
	this.queue(str);
}, function () {
	this.queue(null);
});

process.stdin.pipe(tr).pipe(process.stdout);