var express = require('express');
var router = express.Router();
 
router.get('/', function(req, res) {
	res.render('index');
});

router.get('/index', function(req, res) {
	res.render('index');
});

router.get('/login', function(req, res) {
	res.render('login');
});

// Example of POST
// router.post('/login', function(req, res) {
// 	console.log("Something here");
// });

router.get('/viewer', function(req, res) {
  	res.render('viewer');
});

router.get('/select', function(req, res) {
  	res.render('select');
});

// Error fallthrough
router.get('*', function(req, res) {
  	res.render('error', {message: "ERROR"});
});

module.exports = router;