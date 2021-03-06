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
		} else if( mins === 1){
			return ' 1 minute ago';
		}else if( mins >= 2 && mins < 60){
			return ' ' + mins + ' minutes ago';
		} else if( hours === 1 ){
			return ' 1 hour ago'
		} else if( hours > 1 && hours < 24){
			return ' ' + hours + ' hours ago'
		} else if ( days === 1){
			return ' yesterday';
		} else {
			return ' '  + days + ' days ago';
		}
	}

	findSumOfAnswers(poll){
		let sum = 0;
		poll.answers.forEach(ans=> sum += +ans[1]);
		return sum;
	}

	renderPolls(){
		if(this.state.initialState){
			return ( <div> LOADING... </div>)
		} else {
			let polls = [];
			return this.state.polls.map((poll, i)=>
					<li key={i} className="ui container segment singlePoll">
						<h2 className='questionTitle'>{poll.question}</h2>
						<h5 className='totalVotes'>{'Total Votes: '}<span>{this.findSumOfAnswers(poll)}</span></h5>
						<a href={'/poll/' + poll._id} className='ui button teal vP'> View Poll!</a>
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
				<h1 className='pollsHeader'> Pick A Poll And Vote! </h1>
				<ul className='pollList'>
					{this.renderPolls()}
				</ul>
			</div>
		)
	}
}