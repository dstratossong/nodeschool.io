var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter) {
	var counts = {};
	return duplexer(through(function (obj) {
		if (counts[obj.country] == null) counts[obj.country] = 1;
		else counts[obj.country]++;
	}, function () {
		counter.setCounts(counts);
	}), counter);
};