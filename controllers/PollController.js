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
		let preAns = params.hiddenData.split(',');
		let previousAnswers = []
		for(var i=0; i<preAns.length; i+=2){
			previousAnswers.push([preAns[i], +preAns[i+1]]);
		}
		//console.log(previousAnswers.length, params.answers.length)
		function checkCurrents(){
			previousAnswers.forEach((ans, i)=>{
				if(ans[0] !== params.answers[i]){
					previousAnswers.splice(i,1,[params.answers[i], 0])
				}
			});
		}
		if(Array.isArray(params.answers)){
			if(previousAnswers.length === params.answers.length){
				checkCurrents();
			} else if(previousAnswers.length < params.answers.length){
				checkCurrents();
				for(var i=previousAnswers.length; i< params.answers.length; i++){
					previousAnswers.push([params.answers[i], 0]);
				}
			} else if(previousAnswers.length > params.answers.length ){
				params.answers.forEach((ans, i)=>{
					if(i <= previousAnswers.length){
						if(previousAnswers[i][0] !== ans){
						previousAnswers[i] = [ans, 0];
						}
					} else {
						previousAnswers[i] = [ans, 0];
					}
				})
				previousAnswers.splice(params.answers.length)
			}
		} else {previousAnswers = [params.answers, 0]}
		params.answers = previousAnswers;
		
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

