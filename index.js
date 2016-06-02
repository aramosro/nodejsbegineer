var server = require("./server/server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;


server.iniciar(router.route,handle);