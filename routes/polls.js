var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var controllers = require('../controllers');
var PollController = controllers.poll;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//Poll Index Route
router.get("/", function(req, res, next){
	PollController.find(req.query, function(err, polls){
		if(err){
			res.json({
				confirmation: "Failed",
				message: err
			});
			return
		} else {
			res.render('polls', {polls: polls})
		}
	});
});


//New Poll Route
router.get('/createpoll', function(req, res, next){
	res.render('createpoll')
})

//Create Poll Route
router.post('/', function(req, res, next){
	PollController.create(req.body, function(err, poll){
		if(err){
			res.json({
				confirmation: "Failed to create poll",
				error: err
			});
			return
		} else {
			res.redirect('/polls')
		}
	})
})

//Show Poll Route
router.get('/:id', function(req, res, next){
	var id = req.params.id;
	PollController.findById(id, function(err, poll){
		if(err){
			res.json({
				confirmation: "Failed",
				message: "Id Not Found",
				error: err
			});
			return
		} else {
			res.render('question', {poll: poll})
		}
	});
})


router.get('/:id/editpoll', function(req, res, next){
	var id = req.params.id;
	PollController.findById(id, function(err, poll){
		if(err){
			res.json({
				confirmation: "Failed",
				message: "Id Not Found",
				error: err
			});
			return
		} else {
			console.log(poll)
			res.render('editpoll', {poll: poll})
		}
	})
});

router.put("/:id", function(req, res, next){
	var id = req.params.id;

	PollController.update(id, req.body, function(err, poll){
		if(err){
			res.json({
				confirmation: "Failed",
				message: "Failed to update",
				error: err
			});
			return
		} else {
			console.log(req.body, poll)
			res.redirect('/polls/' + id)
		}
	});
});

router.delete('/:id', function(req, res, next){
	let id = req.params.id;
	PollController.destroy(id, function(err){
		if(err){
			res.json({
				confirmation: "Failed",
				message: "Failed to Delete",
				error: err
			});
			return
		} else {
			res.redirect('/polls')
		}
	})
});

module.exports = router;














