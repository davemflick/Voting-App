var Poll = require('../models/poll');

module.exports = {
	find: function(params, callback){
		Poll.find(params, function(err, polls){
			if(err){
				callback(err, null)
				return
			}
			callback(null, polls)
		});
	},

	findById: function(id, callback){
		Poll.findById(id, function(err, poll){
			if(err){
				callback(err, null)
				return
			}
			callback(null, poll)
		});
	},

	create: function(params, callback){
		params.choices = params.option
		params.answers = params.option
		answers = [];
		params.answers.forEach(a=>answers.push([a, 0]));
		params.answers = answers
		Poll.create(params, function(err, poll){
			if(err){
				callback(err, null)
				return
			}
			callback(null, poll)
		});
	},

	update: function(id, params, callback){
		params.choices = params.option
		params.answers = params.option
		answers = [];
		params.answers.forEach(a=>answers.push([a, 0]));
		params.answers = answers
		Poll.findByIdAndUpdate(id, params, {new: true},  function(err, poll){
			if(err){
				callback(err, null);
				return 
			}
			callback(null, poll)
		})
	},

	updatePollAnswers: function(id, params, callback){
		params = params.pick
		params = JSON.parse(params)
		params.answers[params.pickIndex][1] +=1
		Poll.findByIdAndUpdate(id, params,  function(err, poll){
			if(err){
				callback(err, null);
				return 
			}
			callback(null, poll)
		})
	},

	destroy: function(id, callback){
		Poll.findByIdAndRemove(id, function(err){
			if(err){
				callback(err, null)
				return
			}
			callback(null, null)
		})
	},
}

