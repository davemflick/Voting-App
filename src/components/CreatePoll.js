import React, { Component } from 'react';
import axios from 'axios';


class CreatePoll extends Component {
	constructor(props){
		super(props);
		this.state = {
			numOptions: 2,
		};
		this.increaseOpts = this.increaseOpts.bind(this);
	}

	createOptions(){
		let opts = [];

		for(let i=0; i<this.state.numOptions; i++){
			let count = i+1
			opts.push(
			<div key={'opt' + i} className='field'>
				<div className='option'>
					<label> {'Choice '+ count + ': '} </label>
					<input type='text' name='option' placeholder='Option' />
				</div>
			</div>
			);
		}
		return opts
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
			<div className='createEditDiv'>
				<div className='ui container segment'>
					<h1> Create New Poll </h1>
					<form action='/api/polls' method='post' className='ui form'>
						<div className='field'>
							<label> Question </label>
							<input type='text' name='question' placeholder='Question' />
						</div>
						{this.createOptions()}
						<div className='item submitBtn'>
							<input type='submit' className='ui button green' />
						</div>
						<div className='addOption'>
							<button className='addOpBtn ui button teal' type='button' onClick={this.increaseOpts}> Add Option </button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}


module.exports = CreatePoll