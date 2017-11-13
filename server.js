var http = require('http');
var server = http.createServer(handler);
server.listen(3000,function(){
  console.log('"Server is listenting on port 3000.Ready to accept requests"');
});
var message = 'I\'m so happy to be part of the Node Girls workshop!';
function handler(request,response){
  response.writeHead(200,{"Content-Type": "text/html"});
  response.write(message);
  response.end();
}
