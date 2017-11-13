var express = require('express');
var router = express.Router();

// DB Connection
const { Pool } = require('pg');
const pool = new Pool({
    user: 'sifzmyuecoakeq',
    host: 'ec2-54-243-43-72.compute-1.amazonaws.com',
    database: 'd33fjn6vab0373',
    password: '0c88153d94b485498c99d77aa92b876b45a1dfb43c0b1d582de7dd04afae079d',
    port: 5432,
    ssl: true
});


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

router.get('/chatpage', function(req, res) {
	res.render('chatpage');
});

router.get('/select', function(req, res) {

	const getLectures = 'SELECT * FROM "lecture"';
	var lectures = [];

	pool.query(getLectures, (err, querryRes) => {
		if (err) {
			throw err
		}
		lectures = querryRes.rows;
		res.render('select', { lectures: lectures});
	});

});


/* handle POST from select page, add new lecture to db if needed then render lecture page */
router.post('/select', function(req, res) {
	
	var LectureType = req.body["Lecture Type"];
	if (LectureType == "New Lecture") {
		const insertNewLecture = 'INSERT INTO "lecture"(name) VALUES ($1)';
		const values = [req.body['Lecture Name']];

		pool.query(insertNewLecture, values, (err, querryRes) => {
		    if (err) {
		        throw err
		    }
		});

		res.render('lecture', { x: values[0]});
	} else {

		res.render('lecture', { x: req.body["Lecture Name"]});
	}
	
});

// Error fallthrough
router.get('*', function(req, res) {
  	res.render('error', {message: "404 Page Not Found", status: 404});
});

module.exports = router;
