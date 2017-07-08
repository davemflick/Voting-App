import React, { Component } from 'react';
import axios from 'axios';



class EditPoll extends Component {
	constructor(props){
		super(props);
		this.state = {
			numOptions: 0,
			currentPoll: {}
		}
		this.increaseOpts = this.increaseOpts.bind(this);
	}

	componentWillReceiveProps(nextprops){
			if(this.props.polls !== nextprops.polls){
				this.setState(this.updateState(nextprops))
			}
	}

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

	createOptions(){
		if(this.state.numOptions < 1){
			return (<div>LOADING...</div>)
		} else {
			let opts = [];
			for(let i=0; i<this.state.numOptions; i++){
				opts.push(
				<div key={'opt' + i} className='item'>
					<div className='option'>
						<input type='text' name='option' defaultValue={this.state.currentPoll.choices[i]} />
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
			return(<div className='item'>
						<input type='text' name='question' defaultValue={this.state.currentPoll.question} />
					</div>
				)
		}
	}

	increaseOpts(){
		let numOpts = this.state.numOptions;
		numOpts++;
		this.setState({
			numOptions: numOpts
		})
	}

	render(){
		return(
			<div>
				<h1> Edit Poll </h1>
				<form action={'/api/polls/' + this.state.currentPoll._id + '?_method=PUT'} method='post'>
					{this.createQuestion()}
					{this.createOptions()}
					<div className='addOption'>
						<button className='addOpBtn' type='button' onClick={this.increaseOpts}> + </button>
					</div>
					<div className='item'>
						<input type='submit' />
					</div>
				</form>
			</div>
		)
		
	}
}


module.exports = EditPoll


