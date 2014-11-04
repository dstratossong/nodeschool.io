var http = require('http');

var url = process.argv[2];

var str = "";

http.get(url, function (response) {
	response.setEncoding("utf8");

	response.on("error", console.error);

	response.on("data", function (data) {
		str += data;
	});

	response.on("end", function () {
		console.log(str.length);
		console.log(str);
	});
});