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
		Poll.findByIdAndUpdate(id, params, {new: true},  function(err, poll){
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
