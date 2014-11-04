var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (request, response) {
	if (request.method != 'GET')
		return response.end('Not a GET');
	
	var parsedRequest = url.parse(request.url, true);
	var date = new Date(Date.parse(parsedRequest.query.iso));

	response.writeHead(200, {'Content-Type': 'application/json'});
	
	if (parsedRequest.pathname === '/api/parsetime') {
		return response.end(JSON.stringify({"hour": date.getHours(),
											"minute": date.getMinutes(),
											"second": date.getSeconds()}));
	} else if (parsedRequest.pathname === '/api/unixtime') {
		return response.end(JSON.stringify({"unixtime": Date.parse(parsedRequest.query.iso)}))
	} else {
		return response.end('Invalid URL');
	}
});
server.listen(port);