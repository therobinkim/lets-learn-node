'use strict';

var http = require('http');
var requestHandler = require('./requestHandler.js');

var server = http.createServer(requestHandler);
const PORT = process.env.PORT || 8000;

server.listen(PORT, function listeningOnPort() {
  console.log('Listening on port', PORT);
});
