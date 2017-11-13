var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer(handler);

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
      response.end(file);


    });

  }else if (endpoint === '/node') {
    response.writeHead(200);
    response.end('Node is fun');
  }

  else if (endpoint === '/girls') {
      response.writeHead(200);
      response.end('Hey girls');
    }else {
    const extensionType = {
      html: 'text/html',
      css: 'text/css',
      js: 'application/javascript',
      ico: 'image/x-icon',

    };
    var extension = endpoint.split('.')[1];
    var filePath = path.join(__dirname,'/public',endpoint);
    fs.readFile(filePath, function(error,file){
      if(error){
        response.end('error');
      }
      response.writeHead(200,'Content-Type: ' + extensionType[extension]);
      response.end(file);
    });
  }


}
server.listen(3000,function(){
  console.log('"Server is listenting on port 3000.Ready to accept requests"');
});
