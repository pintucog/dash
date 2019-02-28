var express = require('express');
var server = express();
server.use(express.static(__dirname + '\\static'));

var port = process.env.PORT || 8082;
server.listen(port);
console.log('Use port ' + port + ' to connect to this server');

exports = module.exports = server;