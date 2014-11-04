
var arguments = process.argv;

var sum = 0;

for (var i = 2; i < arguments.length; i++)
	sum += +arguments[i];

console.log(sum);

