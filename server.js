var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("<h1> Hello ANZ </h1> <br/><h2> Cloud Build in action.......</h2> <br/> 
               <b> Remember to append -sha256-1 to the container(deployment) name like hello-cloudbuild-demo-app-sha256-1 </b>
  <br/> updated on 23-05-2022");
}
var www = http.createServer(handleRequest);
www.listen(8080);
