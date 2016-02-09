var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var text = buf.toString();
var tokens = text.split('\n');
console.log(tokens.length - 1);
