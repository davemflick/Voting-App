var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");


//handle sign-up logic 
router.post("/register", (req,res)=>{
	var username = req.body.username
	var email = req.body.email
	var newUser = new User({username: username, email: email});
	User.register(newUser, req.body.password, (err, user)=>{
		if(err){
			req.flash('error', 'Something went wrong, try again');
			res.redirect('/register');
		} else {
			passport.authenticate("local")(req, res, ()=>{
				req.flash('success', 'Thank you for registering ' + user.username)
				res.redirect("/polls");
			});
		}
	});
});

//handle login logic ---> uses middleware
router.post("/login",
	passport.authenticate("local", {
		successRedirect: "/polls",
		failureRedirect:"/login"
	}),(req,res)=>{});

router.get("/logout", (req, res)=>{
	req.logout();
	req.flash('success', 'Log Out Succesfull')
	res.redirect("/");
});

module.exports = router;