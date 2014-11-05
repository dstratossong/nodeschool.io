var tar = require('tar');
var zlib = require('zlib');
var crypto = require('crypto');
var through = require('through');

var parser = tar.Parse();
var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);
var gunzip = zlib.createGunzip();

function onEntry (entry) {
	if (entry.type !== 'File') {
	 	return;
	}

	function write (buf) {
		this.queue(' ' + entry.path + '\n');
	}

	var hash = crypto.createHash('md5', { encoding : 'hex' });

	entry
		.pipe(hash)
		.pipe(through(null, write))
		.pipe(process.stdout);
}

parser.on('entry', onEntry);

process.stdin
	.pipe(decipher)
	.pipe(gunzip)
	.pipe(parser);