var Poll = require("../models/poll");
var flash = require('connect-flash');
var middleware = {};

middleware.isLoggedIn = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash('error', 'You must be logged in to do that');
	res.redirect("/login");
}


middleware.checkPollCreator = function(req, res, next){
	console.log(Poll)
	if(req.isAuthenticated()){
		Poll.findById(req.params.id, (err, foundPoll)=>{
			if(err){
				res.redirect("back");
			} else {
				if(foundPoll.author.id.equals(req.user._id)){
					next();
				} else {
					res.redirect("back");
				}
			}
		});
	} else {
		res.redirect('back');
	}
}


module.exports = middleware;