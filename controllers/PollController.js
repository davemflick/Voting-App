var Poll = require('./models/poll');

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

	findById: function(){

	},

	create: function(){

	}

	update: function(){

	},

	destroy: function(){

	}
}