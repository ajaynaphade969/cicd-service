var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("<h1> Deployed Version is v2.0. Cloud Build in action.......</h1> <br/> 
               <b> Remember to append -sha256-1 to the container(deployment) name like hello-cloudbuild-demo-app-sha256-1 </b>
  <br/> updated on 05-01-2022");
}
var www = http.createServer(handleRequest);
www.listen(8080);
