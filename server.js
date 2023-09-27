//setting up constants and http, fs modules
var http = require('http');
const port = 8000;
var fs = require('fs');

//using createServer to create a node server that will use the index.html file
fs.readFile('./index.html', function(error, html) {
    if (error) throw error;
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
  }).listen(port)
});