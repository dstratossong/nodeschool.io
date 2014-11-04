var net = require('net');
var port = process.argv[2];

var server = net.createServer (function (socket) {
	var date = new Date();
	var year = date.getFullYear();
	var month = ('0' + (date.getMonth() + 1)).slice(-2);
	var day = ('0' + date.getDate()).slice(-2);
	var hour = ('00' + date.getHours()).slice(-2);
	var min = ('00' + date.getMinutes()).slice(-2);
	socket.write(year + '-' + month + '-' + day + ' ' + hour + ':' + min + '\n');
	socket.end();
});
server.listen(port);