var http = require('http');
var fs = require('fs');
var server = http.createServer(handler);
server.listen(3000,function(){
  console.log('"Server is listenting on port 3000.Ready to accept requests"');
});
var message = 'I\'m so happy to be part of the Node Girls workshop!';

function handler(request,response){
  var endpoint = request.url;
  var method = request.method;

  if (endpoint === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile(__dirname + "/public/index.html", function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      respond.end(file);

    });

  }



  switch (endpoint) {
    case '/node':
    response.writeHead(200);
    response.end('Node is fun');

      break;
      case '/girls':
      response.writeHead(200);
      response.end('Hey girls');
      break;

    default:
    response.writeHead(404);
    response.end('that/s not a page!');
    return;
  }


}
