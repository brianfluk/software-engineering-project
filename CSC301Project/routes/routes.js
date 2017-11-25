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
	console.log('At index');
});

router.get('/index', function(req, res) {
	res.render('index');
	console.log('At index');
});

router.get('/login', function(req, res) {
	res.render('login');
	console.log('At login');
});

router.get('/navbar', function(req, res) {
	res.render('navbar');
	console.log('At navbar');
});



// Example of POST
// router.post('/login', function(req, res) {
// 	console.log("Something here");
// });

router.get('/viewer', function(req, res) {
  	res.render('viewer');
  	console.log('At viewer');
});

router.get('/chatpage', function(req, res) {

	// Get all posts


	console.log('At chatpage with lectureid = ', req.query.id);
	// This is hardcoded for now
	res.render('chatpage', { pdf: "A2.pdf"});
});

// Fills up the select page with lectures
router.get('/select', function(req, res) {

	const getLectures = 'SELECT * FROM "lecture"';
	var lectures = [];

	pool.query(getLectures, (err, querryRes) => {
		if (err) {
			throw err
		}
		lectures = querryRes.rows;
		res.render('select', { lectures: lectures});
		console.log('At select page');
	});

});


/* handle POST from select page, add new lecture to db if needed then render lecture page */
router.post('/select', function(req, res) {

	// This first pert is for creating new lectures
	//console.log([req.body['Lecture Name'], req.body["Lecture ID"], req.body["Lecture Type"]]);
	var operation = req.body["operation"];
	if (operation == "New Lecture") {
		name = req.body['Lecture Name'];
		name = name.replace(/\s/g, '');
		values = [name, "default.pdf"];

		const insertNewLecture = 'INSERT INTO "lecture" (name, pdf) VALUES ($1, $2)';

		pool.query(insertNewLecture, values, (err, querryRes) => {
		    if (err) {
		        throw err
		    }
		    console.log("Inserted " + values + " into 'lecture'");
		    res.redirect('select');
		});

		//res.render('chatpage', { x: values[0]});
	}
	else if (operation == "Delete Lecture"){
		const value = [req.body['Lecture ID']];
		console.log("Lecture ID= " + value);

		const deleteLecture = 'DELETE FROM "lecture" WHERE id = ($1)';

		pool.query(deleteLecture, value, (err, querryRes) => {
		    if (err) {
		        throw err
		    }
		    console.log("Deleted " + req.body['Lecture ID'] + " in 'lecture'");
		    res.redirect('select');
		});
	//	res.render('select', { lectures: lectures});


	} else {
		// Redirecting to the correct lecture chat page
		console.log("redirecting to "  + '/chatpage/' + "?id=" + req.body["Lecture ID"]);
	//	res.render('chatpage', { x: req.body["Lecture Name"]});
		res.redirect('/chatpage' + "/?id=" + req.body["Lecture ID"]);
	}

});



// intructorpage NEEDS TO BE INTEGRATED TO DB!!!!!
// Fills up the instructorpage with lectures
router.get('/instructorpage', function(req, res) {

	const getLectures = 'SELECT * FROM "lecture"';
	var lectures = [];

	pool.query(getLectures, (err, querryRes) => {
		if (err) {
			throw err
		}
		lectures = querryRes.rows;
		res.render('instructorpage', { lectures: lectures});
		console.log('At instructor page');
	});

});


/* handle POST from instructorpage, add new lecture to db if needed then render lecture page */
router.post('/instructorpage', function(req, res) {

	// This first part is for creating new lectures
	//console.log([req.body['Lecture Name'], req.body["Lecture ID"], req.body["Lecture Type"]]);
	var operation = req.body["operation"];
	if (operation == "New Lecture") {
		name = req.body['Lecture Name'];
		name = name.replace(/\s/g, '');
		values = [name, "default.pdf"];

		const insertNewLecture = 'INSERT INTO "lecture" (name, pdf) VALUES ($1, $2)';

		pool.query(insertNewLecture, values, (err, querryRes) => {
			if (err) {
				throw err
			}
			console.log("Inserted " + values + " into 'lecture'");
			res.redirect('instructorpage');
		});

		//res.render('chatpage', { x: values[0]});
	}
	else if (operation == "Delete Lecture"){
		const value = [req.body['Lecture ID']];
		console.log("Lecture ID= " + value);

		const deleteLecture = 'DELETE FROM "lecture" WHERE id = ($1)';

		pool.query(deleteLecture, value, (err, querryRes) => {
			if (err) {
				throw err
			}
			console.log("Deleted " + req.body['Lecture ID'] + " in 'lecture'");
			res.redirect('instructorpage');
		});
	//	res.render('select', { lectures: lectures});


	} else {
		// Redirecting to the correct lecture chat page
		console.log("redirecting to "  + '/chatpage/' + "?id=" + req.body["Lecture ID"]);
	//	res.render('chatpage', { x: req.body["Lecture Name"]});
		res.redirect('/chatpage' + "/?id=" + req.body["Lecture ID"]);
	}

});

//coursepage
router.get('/coursepage', function(req, res) {
  const getCourses = 'SELECT * FROM "course" ORDER BY name, term';
	var courses = [];

	pool.query(getCourses, (err, querryRes) => {
		if (err) {
			throw err
		}
		courses = querryRes.rows;
		res.render('coursepage', { courses: courses});
		console.log('At coursepage');
	});
});

/* handle POST from coursepage, add new course to db if needed then render course page */
router.post('/coursepage', function(req, res) {
  // This first part is for creating new lectures
	//console.log([req.body['Lecture Name'], req.body["Lecture ID"], req.body["Lecture Type"]]);
	var operation = req.body["operation"];
	if (operation == "New Course") {
		name = req.body['Course Name'];
		name = name.replace(/\s/g, '');
    // Currently default to having this year as term, TODO can be added later
		values = [name, "2017F"];

		const insertNewCourse = 'INSERT INTO "course" (name, term) VALUES ($1, $2)';

		pool.query(insertNewCourse, values, (err, querryRes) => {
			if (err) {
				throw err
			}
			console.log("Inserted " + values + " into 'course'");
			res.redirect('instructorpage');
		});

		//res.render('chatpage', { x: values[0]});
	}
	else if (operation == "Delete Course"){
		const value = [req.body['Course ID']];
		console.log("Course ID= " + value);

		const deleteLecture = 'DELETE FROM "course" WHERE id = ($1)';

		pool.query(deleteLecture, value, (err, querryRes) => {
			if (err) {
				throw err
			}
			console.log("Deleted " + req.body['Course ID'] + " in 'course'");
			res.redirect('instructorpage');
		});
	//	res.render('select', { lectures: lectures});


	} else {
		// Redirecting to the correct lecture chat page
		console.log("redirecting to "  + '/chatpage/' + "?id=" + req.body["Lecture ID"]);
	//	res.render('chatpage', { x: req.body["Lecture Name"]});
		res.redirect('/chatpage' + "/?id=" + req.body["Lecture ID"]);
	}

});
// Error fallthrough
router.get('*', function(req, res) {
  	res.render('error', {message: "404 Page Not Found", status: 404});
});

module.exports = router;
