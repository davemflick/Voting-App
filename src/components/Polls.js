import React, { Component } from 'react';

export default class Polls extends Component {
	constructor(props){
		super(props);
		this.state = {
			polls: [],
			initialState: true
		}
	}

	componentWillReceiveProps(nextprops){
		if(this.props.polls !== nextprops.polls){
			let polls = nextprops.polls;
			this.setState({
			polls: polls,
			initialState: false
			})
		}
	}

	structureDate(d){
		let date = new Date(d)
		let now =  Date.now()
		let timeLapsed = now - date.getTime();
		let seconds = timeLapsed/1000;
		let mins = Math.round(seconds/60)
		let hours = Math.round(mins/60);
		let days = Math.floor(hours/24);
		if(mins < 1){
			return ' less than a minute ago';
		} else if( mins >= 1 && mins < 60){
			return ' ' + mins + ' minutes ago';
		} else if( hours < 24){
			return ' ' + hours + ' hours ago'
		} else if ( days === 1){
			return ' yesterday';
		} else {
			return ' '  + days + ' days ago';
		}
	}

	renderPolls(){
		if(this.state.initialState){
			return ( <div> LOADING... </div>)
		} else {
			let polls = [];
			return this.state.polls.map((poll, i)=>
					<li key={i} className="ui container segment">
						<h2 className='questionTitle'>{poll.question}</h2>
						<a href={'/poll/' + poll._id} className='ui button teal tiny vP'> View Poll!</a>
						<p className='createdBy'>
							Created by <em>{poll.author.username}</em>
							<span className='timeCreated'> {this.structureDate(poll.timestamp)} </span>
						</p>
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