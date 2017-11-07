var express = require('express');
var app = express();
var router = express.Router();
var routes = require('./routes/routes.js');
var port = process.env.PORT || 3000;
// var cookieParser = require('cookie-parser');
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
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

app.use(routes);

// Listen for connections
app.listen(port);
console.log('Listening on port ' + port);