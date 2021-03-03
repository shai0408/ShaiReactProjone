var http = require ('http');

http.createServer(function(req,res) {
res.whiteHead(200, {'content-type':'text/plain'});
res.end('Hellow World from Shai');
}).listen(9001);

console.log('server is running on a port over 9000!!!')