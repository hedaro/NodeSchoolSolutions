var http = require('http');

var server = http.createServer(function (req, res) {
  if(req.method === 'POST') {
    req.on('data', function (data) {
      res.write(data.toString().toUpperCase());
    });
    req.on('end', function() {
      res.end();
    });
  }
});

server.listen(process.argv[2]);