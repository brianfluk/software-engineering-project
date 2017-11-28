var express = require('express');
var app = express();
var router = express.Router();
var routes = require('./routes/routes.js');
var port = process.env.PORT || 3000;
var cookieParser = require('cookie-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

// // route middleware that will happen on every request, just an example
// router.use(function(req, res, next) {

//     // log each request to the console
//     console.log("Middleware: " + req.method, req.url);
//     // continue doing what we were doing and go to the route
//     next(); 
// });

app.use(cookieParser());
app.use(routes);

var clientList = [];

// Real time stuff down here
io.on('connection', function(socket){

	var clientID = socket.id;
	var clientName = clientID;
	var clientIp = socket.request.connection.remoteAddress;
	var roomID;
	clientList.push(socket);

	// if (clientID in clientList){
	// 	console.log('Connection from ' + clientIp);
	// } else {
	// 	console.log('New connection from ' + clientIp);
	// 	console.log("Added " + clientID + " to list of clients");
	// }
	
	console.log('Connection from ' + clientIp);
	
	console.log("Total clients: " + clientList.length);

	socket.on('room', function(room) {
        socket.join(room);
        roomID = room;
        console.log("Joined room: " + roomID)
    });

	socket.on('name', function(name){
		io.emit('name', name);
		clientName= name;
		console.log(clientID + " changed name to " + name);
	});

	socket.on('chat message', function(msg){
		io.to(roomID).emit('chat message', clientName + ": " + msg);
		//io.emit('chat message', clientName + ": " + msg);
		console.log(clientName + " said " + msg);
	});

	socket.on('disconnect', function(){
		var i = clientList.indexOf(socket);
		clientList.splice(i,1);
		console.log(clientName + ' disconnected');
		// console.log("Removed " + clientName + " from list of clients");
		console.log("Total clients: " + clientList.length);
 	});
});

// Listen for connections
// app.listen(port);
// console.log('Listening on port ' + port);
http.listen(3000, function(){
  console.log('listening on *:3000');
});