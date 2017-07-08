import React, {Component} from 'react';


export default class ShowPoll extends Component {
	constructor(props){
		super(props);
		this.state = {
			poll: this.props.poll
		};
	}

	showAnswers(){
		console.log(this.state.poll.answers)
	}

	createPoll(){
		let poll = this.state.poll;
		if(Array.isArray(poll.choices)){
			console.log(poll.answers)
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

	render(){
		return(
			<div className='ui container segment showPage'>
				<div className='ui container segment showQuestion'>
					<h1> {this.state.poll.question} </h1>
					<form action={'/api/polls/' + this.state.poll._id + '/answer?_method=PUT'} method='post' className='ui form'>
						{this.createPoll()}
						<input type='submit' className='ui button blue mini' />
					</form>
					<form action={"/api/polls/" + this.state.poll._id + '?_method=DELETE'} method='post'>
						<input type='submit' value='Delete This Poll' className='ui button red invert deletePoll' />
					</form>
					<button type='button'
							className='ui button red invert'
							onClick={this.showAnswers.bind(this)}> Console </button>
				</div>
				<div className='ui container segment showResults'>
					<div> Results </div>
				</div>
			</div>
		)
	}
}