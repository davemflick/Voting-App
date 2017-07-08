import React, { Component } from 'react';

export default class Polls extends Component {
	constructor(props){
		super(props);
		this.state = {
			polls: [],
		}
	}

	componentWillReceiveProps(nextprops){
		if(this.props.polls !== nextprops.polls){
			let polls = nextprops.polls;
			this.setState({
			polls: polls
			})
		}
	}

	renderPolls(){
		if(this.state.polls.length < 1){
			return ( <div> LOADING... </div>)
		} else {
			let polls = [];
			return this.state.polls.map((poll, i)=>
					<li key={i} className="ui container segment">
						<h3>{poll.question}</h3>
						<ul>
						{ this.renderChoices(poll)}
						</ul>
						<a href={'/poll/' + poll._id}>
							<button className='ui button teal tiny'> View Poll </button>
						</a>
						<a href={'/editpoll/' + poll._id}>
							<button className='ui button red tiny'> Edit Poll </button>
						</a>
					</li>
				)
		}
	}

	renderChoices(poll){
		if(poll.choices){
			return poll.choices.map((choice, ind)=> <li key={ind}> {choice} </li>)
		}
	}

	render(){
		return(
			<div className='ui container segment pollsContainer'>
				<h1 className='pollsHeader'> Posted Polls </h1>
				<ul className='ui container segment'>
					{this.renderPolls()}
				</ul>
			</div>
		)
	}
}