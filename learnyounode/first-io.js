var fs  = require('fs');
var filePath = process.argv[2];

var fileStr = fs.readFileSync(filePath).toString();

var lines = fileStr.split('\n');

console.log(lines.length == 0 ? 0 : lines.length - 1);