var net = require('net');

function zeroFill(n) {
  return (n < 10 ? '0' : '') + n;
};

function now() {
  var date = new Date();
  return date.getFullYear() + '-'
    + zeroFill(date.getMonth() + 1) + '-'
    + zeroFill(date.getDate()) + ' '
    + zeroFill(date.getHours()) + ':'
    + zeroFill(date.getMinutes());
}

var server = net.createServer(function (socket) {
  socket.end(now()+'\n');
});
server.listen(process.argv[2]);