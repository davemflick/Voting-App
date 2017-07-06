var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Index Route
router.get("/", function(req, res, next){
	res.render('index')
});

//Create Route
router.get('/createpoll', function(req, res, next){
	res.render('createpoll')
})

router.post('/createpoll', function(req, res, next){
	res.redirect('back')
})

module.exports = router;