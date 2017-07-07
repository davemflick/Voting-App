var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Voting App', reactVar: "MONKEY MAN" });
});

// GET for polls page
router.get('/polls', function(req, res, next) {
  res.render('index', { title: 'Voting App', reactVar: "MONKEY MAN" });
});

// GET for newpoll page
router.get('/newpoll', function(req, res, next) {
  res.render('index', { title: 'Voting App', reactVar: "MONKEY MAN" });
});




module.exports = router;
