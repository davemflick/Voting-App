import React, { Component } from 'react';
import axios from 'axios';


class EditPoll extends Component {
	constructor(props){
		super(props);
		this.state = {
			numOptions: 0,
			currentPoll: {},
			choices: [],
			initialState: true,
		}
		this.increaseOpts = this.increaseOpts.bind(this);
		this.decreaseOpts = this.decreaseOpts.bind(this);
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
		let numOpts;
		if(Array.isArray(currPoll.choices)){
			numOpts = currPoll.choices.length
		} else {
			numOpts = 0;
			currPoll.choices = [];
		}
		let nextState = {
			numOptions: numOpts,
			currentPoll: currPoll,
			choices: currPoll.choices,
			initialState: false,
		}
		return nextState
	}

	//Created Choices for form based on number of current options.
	createOptions(){
		if(this.state.initialState){
			return (<div>LOADING...</div>)
		} else if(!this.state.initialState && this.state.numOptions === 0){
			return (
				<div> Currently No Options </div>
			)
		} else {
			let opts = [];
			let choices = this.state.choices;
			for(let i=0; i<this.state.numOptions; i++){
				let choiceCount = i+1
				let choice = choices[i];
				opts.push(
				<div key={'opt' + i} className='field'>
					<div className='option'>
						<label>{'Choice '+ choiceCount + ':'} </label>
						<input type='text' name='option' defaultValue={choice} />
					</div>
				</div>
				);
			}
			return opts
		}
	}

	createQuestion(){
		if(this.state.initialState){
			return (<div></div>)
		} else {
			return(<div className='item field'>
						<label>Question</label>
						<input type='text' name='question' defaultValue={this.state.currentPoll.question} />
						<input className='hiddenInputData' type='none' name='hiddenData' defaultValue={this.state.currentPoll.answers} />
					</div>
				)
		}
	}

	//Only show remove option if there are more than two options
	showRemoveButton(){
		if(this.state.numOptions > 2){
			return(
			<div className='removeOption'>
				<button className='removeOpBtn ui button red' type='button' onClick={this.decreaseOpts}> Remove Option </button>
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

	//Remove last option
	decreaseOpts(){
		let numOpts = this.state.numOptions;
		numOpts--;
		this.setState({
			numOptions: numOpts
		})
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
					{this.showRemoveButton()}
				</form>
			</div>
		)
		
	}
}


module.exports = EditPoll


