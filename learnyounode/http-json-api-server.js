var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  if(req.method === 'GET') {
    var parsedUrl = url.parse(req.url, true);

    if(!parsedUrl.query && !parsedUrl.query.iso) {
      return res.end();
    }

    var date = new Date(parsedUrl.query.iso);
    var time = {};

    res.writeHead(200, {'Content-Type': 'application/json'});

    if(parsedUrl.pathname === '/api/parsetime') {
      time.hour = date.getHours();
      time.minute = date.getMinutes();
      time.second = date.getSeconds();
      res.write(JSON.stringify(time));
    } else if(parsedUrl.pathname === '/api/unixtime') {
      time.unixtime = date.getTime();
      res.write(JSON.stringify(time));
    }
    res.end();
  }
});

server.listen(process.argv[2])