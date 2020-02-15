var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(3000, function(){
    console.log('Surver running ... ');
});

app.use(express.static('statics'));

var io = socket(server);
/* users = [];
connections = [];


io.sockets.on("connection", function(socket) {
    // Connected
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    // Disconnect
    socket.on('disconnect', function(data){
        connections.splice(connections.indexOf(socket), 1);
        console.log('Diconnected: %s socket diconnected', connections.length);
    });
}); */

io.on("connection", function(socket){
       // Add Task 
        socket.on('to do list', function(data){
        io.sockets.emit('to do list', data);
    });
});
