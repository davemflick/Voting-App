import React, { Component } from 'react';
import axios from 'axios';


class EditPoll extends Component {
	constructor(props){
		super(props);
		this.state = {
			numOptions: 2,
			thispoll: {}
		}
		this.increaseOpts = this.increaseOpts.bind(this);
	}

	componentDidMount(){
			axios.get('/api/polls/')
			.then((res)=>{
				let polls = res.data.polls
				let id = this.props.location.pathname.substring(10);
				let thisPoll;
				polls.forEach(poll=>{
					if(poll._id === id){
						thisPoll = poll;
					}
				});
				this.setState({
					numOptions: thisPoll.choices.length,
					thispoll: thisPoll,
					stateUpdate: true
				});
			})
			.catch((err)=>{
				console.log(error)
			})
	}




	createOptions(){
		let opts = [];
		for(let i=0; i<this.state.numOptions; i++){
			opts.push(
			<div key={'opt' + i} className='item'>
				<div className='option'>
					<input type='text' name='option' defaultValue={'Option'} />
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
				<h1> Edit Poll </h1>
				<form action='/api/polls' method='post'>
					<div className='item'>
						<input type='text' name='question' defaultValue={'Question'} />
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


module.exports = EditPoll


