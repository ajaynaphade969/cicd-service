var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("<h1> Deployed Version is v2.0. Cloud Build in action.......</h1> <br/> test");
}
var www = http.createServer(handleRequest);
www.listen(8080);
