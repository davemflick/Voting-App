var mongoose = require('mongoose');


var PollSchema = new mongoose.Schema({
	question: String,
	choices: {type:Array, default: []},
	answers: {type:Array, default: []},
	// author: {
	// 	id: {
	// 		type: mongoose.Schema.Types.ObjectId,
	// 		ref: "User"
	// 	},
	// 	username: String
	// },
	timestamp: {type: Date, default: Date.now}
});


module.exports = mongoose.model("Poll", PollSchema)