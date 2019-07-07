'use strict';
// list of currently connected clients (users)
var clients = [];

//Setup
var http = require('http');
var path = require('path');
var express = require('express')
    , app = module.exports.app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
var server = http.createServer(app);

var connectionCount = 0;
var serverChannelCount = 1;


var io = require('socket.io').listen(server); //pass a http.Server instance
server.listen(PORT); //listen on port 
console.log('Server listening on port ' + PORT);


io.on('connection', (socket) => {

    //var index = clients.push([socket, clients.length, 0]) - 1;
    connectionCount++;
    // Notify new connections if admin is present so that only servant option is available

    var userRole = false;
    console.log((new Date()) + ' Connection accepted.');
    
    
    socket.on('login', (userInfo) => {
            userRole = name.role;
            console.log((new Date()) + ' User is present with ' + name.channels + ' channels.');
            clients[index][2] == 1;
            var obj = {
                group: -1
            }
            socket.emit('receipt', obj);
    })
    
    delivery = dl.listen( socket );
    delivery.connect();

    delivery.on('delivery.connect',function(delivery){
        delivery.send({
            name: 'sample-image.jpg',
            path : './sample-image.jpg'
        });

        delivery.on('send.success',function(file){
          console.log('File sent successfully!');
        });
    });
    
    
    socket.on('disconnect', () => {
        connectionCount--;
    });
});