var express = require('express');

var app = express();
app.use(express.static('styles'));
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('Surver running ... ');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on("connection", function(socket) {
    connections.push(socket);
    console.log('Connected: %s sockets conencted', connections.length);

    // Disconnecte
    connections.splice(connections.indexOf(socket), 1);
    console.log('Diconnected: %s sockets conencted', connections.length);
})