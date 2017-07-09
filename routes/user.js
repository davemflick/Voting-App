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
			console.log(err);
			res.render("register");
		} else {
			passport.authenticate("local")(req, res, ()=>{
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
	res.redirect("/");
});

module.exports = router;