var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];

var str = ["", "", ""];

var queue = [0, 0, 0];

function request (n) {
	http.get(urls[n], function (response) {
		response.setEncoding("utf8");
		response.on("error", console.error);
		response.on("data", function (data) {
			str[n] += data;
		});
		response.on("end", function () {
			finish_request(n);
		});
	});
}

function finish_request (n) {
	queue[n] = 1;
	if (queue[0] == 1
	 && queue[1] == 1
	 && queue[2] == 1) {
		print_response();
	}
}

function print_response () {
	for (var i = 0; i < 3; i ++) {
		console.log(str[i]);
	}
}

request(0);
request(1);
request(2);