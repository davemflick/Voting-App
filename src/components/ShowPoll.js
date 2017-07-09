import React, {Component} from 'react';


export default class ShowPoll extends Component {
	constructor(props){
		super(props);
		this.state = {
			poll: this.props.poll,
		};
	}

	createPoll(){
		let poll = this.state.poll;
		if(Array.isArray(poll.choices)){
			return poll.choices.map((opts, i)=>{
				poll.pickIndex = i;
				return (
					<div key={`${opts}-${i}`} className='field' >
						<div className='radio checkbox'>
							<input type='radio' name='pick' value={JSON.stringify(poll)}/>
							<lable className='choiceOpt'>{opts}</lable>
						</div>
					</div>
				)
			})
		}
	}

	createResults(){
		let answers = this.state.poll.answers;
		let sum = 0
		answers.forEach(ans=> sum += ans[1]);
		return (
			<div>
				<h3>{'Total votes: '+sum}</h3>
				{this.determinePercentResults(answers, sum)}
			</div>
			)
	}

	determinePercentResults(answers, sum){
		return answers.map((ans, i)=>{
				return	<h4 key={ans + i} className='answerResult'> {`${ans[0]}: ${((ans[1]/sum)*100).toFixed(2)}%`} </h4>
			})
	}

	render(){
		return(
			<div className='ui container segment showPage'>
				<div className='ui container segment showQuestion'>
					<h2> {this.state.poll.question} </h2>
					<form action={'/api/polls/' + this.state.poll._id + '/answer?_method=PUT'} method='post' className='ui form'>
						{this.createPoll()}
						<input type='submit' className='ui button blue mini' />
					</form>
					<form action={"/api/polls/" + this.state.poll._id + '?_method=DELETE'} method='post'>
						<input type='submit' value='Delete This Poll' className='ui button red invert deletePoll' />
					</form>
					<a href={'/editpoll/' + this.state.poll._id}>
						<button className='ui button red tiny'> Edit Poll </button>
					</a>
				</div>
				<div className='ui container segment showResults'>
					<h2> Results </h2>
					{this.createResults()}
				</div>
			</div>
		)
	}
}