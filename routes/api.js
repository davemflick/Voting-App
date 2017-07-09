var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var controllers = require('../controllers');

//middleware
var middleware = require('../middleware/middleware');
var isLoggedIn = middleware.isLoggedIn;
var checkPollCreator = middleware.checkPollCreator;


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//Poll Index Route
router.get("/:resource", function(req, res, next){
	var resource = req.params.resource;
	var controller = controllers[resource];
	 let currentUser = 'noUser';
	  if(req.user){
	  	currentUser = req.user.username;
	  }
	  console.log(currentUser)
	controller.find(req.query, function(err, results){
		if(err){
			res.json({
				confirmation: "Failed",
				message: err
			});
			return
		} else {
			if(resource === 'polls'){
				res.json({polls: results, username: currentUser})
			}else{
				res.render(resource, {results: results})
			}
		}
	});
});


//New Poll Route
router.get('/:resource/createpoll', function(req, res, next){
	var resource = req.params.resource;
	var controller = controllers[resource];
	if(resource === 'polls'){
		res.render('createpoll')
	} else {
		res.json({
			status: "Failed to find valid /:resource parameter",
		})
	}
	
})

//Create Poll Route
router.post('/:resource', isLoggedIn, function(req, res, next){
	var resource = req.params.resource;
	var controller = controllers[resource];
	let author = {
		id:  req.user._id,
		username: req.user.username
	}
	req.body.author = author;
	controller.create(req.body, function(err, poll){
		if(err){
			res.json({
				confirmation: "Failed to create poll",
				error: err
			});
			return
		} else {
			res.redirect('/'+ resource)
		}
	})
})

//Show Poll Route
router.get('/:resource/:id', function(req, res, next){
	var id = req.params.id;
	var resource = req.params.resource;
	var controller = controllers[resource];
	controller.findById(id, function(err, result){
		if(err){
			res.json({
				confirmation: "Failed",
				message: "Id Not Found",
				error: err
			});
			return
		} else {
			if(resource == 'polls'){
				res.render('question', {poll: result})
			} else {
				res.render( resource , {result: result})
			}
			
		}
	});
})


router.get('/:resource/:id/editpoll', function(req, res, next){
	var id = req.params.id;
	var resource = req.params.resource;
	var controller = controllers[resource];
	controller.findById(id, function(err, result){
		if(err){
			res.json({
				confirmation: "Failed",
				message: "Id Not Found",
				error: err
			});
			return
		} else {
			if(resource === 'polls'){
				res.render('editpoll', {poll: result})
			} else {
				res.render('edit'+ resource, {result: result})
			}
		}
	})
});
//UPDATE EDITED POLL QUESTION
router.put("/:resource/:id", function(req, res, next){
	var id = req.params.id;
	var resource = req.params.resource;
	var controller = controllers[resource];
	controller.update(id, req.body, function(err, result){
		if(err){
			res.json({
				confirmation: "Failed",
				message: "Failed to update",
				error: err
			});
			return
		} else {
			res.redirect('/' + resource)
		}
	});
});
//UPDATE to add answer to poll
router.put("/:resource/:id/answer", isLoggedIn, function(req, res, next){
	var id = req.params.id;
	var resource = req.params.resource;
	var controller = controllers[resource];
	controller.updatePollAnswers(id, req.body, function(err, result){
		if(err){
			res.json({
				confirmation: "Failed",
				message: "Failed to update",
				error: err
			});
			return
		} else {
			res.redirect('back')
		}
	});
});

router.delete('/:resource/:id', function(req, res, next){
	let id = req.params.id;
	var resource = req.params.resource;
	var controller = controllers[resource];
	controller.destroy(id, function(err){
		if(err){
			res.json({
				confirmation: "Failed",
				message: "Failed to Delete",
				error: err
			});
			return
		} else {
			res.redirect('/' + resource)
		}
	})
});

module.exports = router;














