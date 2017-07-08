import React, { Component } from 'react';
import axios from 'axios';



class EditPoll extends Component {
	constructor(props){
		super(props);
		this.state = {
			numOptions: 0,
			currentPoll: {},
		}
		this.increaseOpts = this.increaseOpts.bind(this);
		this.removeOption = this.removeOption.bind(this);
	}

	//Take in props, after initial render, then re-render with poll property
	componentWillReceiveProps(nextprops){
			if(this.props.polls !== nextprops.polls){
				this.setState(this.updateState(nextprops))
			}
	}
	//This searches through all polls to match currently selected poll.
	updateState(nextprops){
		let polls = nextprops.polls;
		let currPoll = {};
		polls.forEach(poll=>{
			if(window.location.href.indexOf(poll._id) > -1){
				currPoll = poll;
			}
		});
		
		let nextState = {
			numOptions: currPoll.choices.length,
			currentPoll: currPoll
		}
		return nextState
	}

	//Created Choices for form based on number of current options.
	createOptions(){
		if(this.state.numOptions < 1){
			return (<div>LOADING...</div>)
		} else {
			let opts = [];
			for(let i=0; i<this.state.numOptions; i++){
				let choiceCount = i+1
				opts.push(
				<div key={'opt' + i} className='field'>
					<div className='option'>
						<label>{'Choice '+ choiceCount + ':'} </label>
						<input type='text' name='option' defaultValue={this.state.currentPoll.choices[i]} />
						<div className='removeBtnDiv'>
							<button type='button' className={i  + ' ui button red mini'} onClick={this.removeOption}> Remove </button>
						</div>
					</div>
				</div>
				);
			}
			return opts
		}
	}

	createQuestion(){
		if(this.state.numOptions < 1){
			return (<div></div>)
		} else {
			return(<div className='item field'>
						<label>Question</label>
						<input type='text' name='question' defaultValue={this.state.currentPoll.question} />
					</div>
				)
		}
	}

	//Add an option input
	increaseOpts(){
		let numOpts = this.state.numOptions;
		numOpts++;
		this.setState({
			numOptions: numOpts
		})
	}

	//Remove option input
	removeOption(e){
		let ind = e.target.className
		let poll = this.state.currentPoll
		poll.choices.splice(ind,1);
		poll.answers.splice(ind,1);
		this.setState({
			numOptions: poll.choices.length,
			currentPoll: poll,
		});
	}

	render(){
		return(
			<div className='ui segment container'>
				<h1> Edit Poll </h1>
				<form action={'/api/polls/' + this.state.currentPoll._id + '?_method=PUT'}
					 method='post'
					 className='ui form'>
					{this.createQuestion()}
					{this.createOptions()}
					<div className='item submitBtn'>
						<input type='submit' className='ui button green' />
					</div>
					<div className='addOption'>
						<button className='addOpBtn ui button teal' type='button' onClick={this.increaseOpts}> Add Option </button>
					</div>
				</form>
			</div>
		)
		
	}
}


module.exports = EditPoll


