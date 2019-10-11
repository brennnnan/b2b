//Setup
var http = require('http');
var path = require('path');
var express = require('express')
	, app = module.exports.app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
var server = http.createServer(app);

var io = require('socket.io').listen(server); //pass a http.Server instance
server.listen(PORT); //listen on port 
console.log('Server listening on port ' + PORT);


// returns index.html at root GET
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

// returns room.html for /room
app.get('/room', function (req, res) {
	res.sendFile(__dirname + '/room.html');
});



io.on('connection', function (socket) {
	// Use socket to communicate with this particular client only, sending it it's own id
	socket.emit('welcome', 'Welcome to the session! your id is ' + socket.id + '.');
	console.log('Welcome emitted.')
	
	socket.on('setCuePoint', function () {
	})
	
	socket.on('cue', function () {
	})
	
	socket.on('play', function () {
	})
	
	socket.on('changePlaybackSpeed', function () {
	})
	
	socket.on('fxChange', function (fxInfo) {
	})
	
	
});


http.listen(port, function () {
	console.log('listening on localhost:' + port);
});