var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var controllers = require('../controllers');


//middleware
var middleware = require('../middleware/middleware');
var isLoggedIn = middleware.isLoggedIn;
var checkPollCreator = middleware.checkPollCreator;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Voting App'});
});

// GET for polls page
router.get('/polls', function(req, res, next) {
  res.render('index', { title: 'Voting App'});
});

// GET for single poll
router.get('/poll/:id', function(req, res, next) {
	if(req.params.id.length > 1){
		res.render('index', { title: 'Voting App'});
	}
});

// GET for newpoll page
router.get('/newpoll', isLoggedIn, function(req, res, next) {
  res.render('index', { title: 'Voting App'});
});

//GET EditPoll
router.get('/editpoll/:id', checkPollCreator, function(req, res, next){
	res.render('index')
});

//Get Register
router.get('/register', function(req, res, next){
	console.log(req.query)
	res.render('index')
});
//Get Login
router.get('/login', function(req, res, next){
	res.render('index')
});



module.exports = router;
