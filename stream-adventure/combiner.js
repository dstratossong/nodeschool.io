var combine = require('stream-combiner');
var through = require ('through');
var split = require('split');
var zlib = require('zlib');

module.exports = function () {
	var genres = [];
	var genreObj;
	return combine(
		split(),
		through(function (buf) {
			if (buf.length > 0)
				this.queue(JSON.parse(buf));
		}),
		through(function (obj) {
			if (obj.type === 'book') {
				genreObj.books.push(obj.name);
			} else {
				if (genreObj)
					genres.push(genreObj);
				genreObj = {"name": obj.name, "books": []};
			}
		}, function () {
			var f = this.queue;
			genres.forEach(function (obj) {
				f(JSON.stringify(obj) + '\n');
			});
			this.queue(null);
		}), 
		zlib.createGzip());
}