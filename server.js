var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

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