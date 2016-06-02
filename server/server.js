var http = require('http');
var url = require("url");

function iniciar(route,handle){
function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Petición para " + pathname + " recibida.");
    route(handle,pathname,response);
    //response.writeHead(200, {"Content-Type": "text/html"});
    //response.write(route(handle,pathname));
    //response.end();
}
http.createServer(onRequest).listen(process.env.PORT, process.env.IP);
}

exports.iniciar = iniciar;