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
			opts.push(
			<div key={'opt' + i} className='item'>
				<div className='option'>
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
			<div>
				<h1> Create New Poll </h1>
				<form action='/api/polls' method='post'>
					<div className='item'>
						<input type='text' name='question' placeholder='Question' />
					</div>
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


module.exports = CreatePoll