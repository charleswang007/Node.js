var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Current date and time: " + dt.myDateTime()) + "\n";
  res.end(' Hello Santa Clara!');
}).listen(8080);