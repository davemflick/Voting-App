import React, { Component } from 'react';
import axios from 'axios';

export default class Polls extends Component {
	constructor(props){
		super(props);
		this.state = {
			polls: [],
		}
	}

	componentDidMount(){
		axios.get('/api/polls')
			.then((res)=>{
				let polls = res.data.polls
				this.setState({
					polls: polls
				})
			})
			.catch((err)=>{
				console.log(error)
			})
	}

	render(){
		return(
			<div className='ui container segment pollsContainer'>
				<h1 className='pollsHeader'> Posted Polls </h1>
				<ul className='ui container segment'>
				{this.state.polls.map((poll, i)=>
					<li key={i} className="ui container segment">
						<h3>{poll.question}</h3>
						<ul>
						{poll.choices.map((choice, ind)=>
							<li key={ind}> {choice} </li>
						)}
						</ul>
						<a href={'/editpoll/' + poll._id}>
							<button className='ui button red tiny'> Edit Poll </button>
						</a>
					</li>
				)}
				</ul>
			</div>
		)
	}
}