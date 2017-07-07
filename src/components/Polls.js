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
			<div>
				<a href="/newpoll"><button className="ui button orange">Create New Poll</button></a>
				<ul>
				{this.state.polls.map((poll, i)=>
					<li key={i} className="ui container segment">
						<h3>{poll.question}</h3>
						<ul>
						{poll.choices.map((choice, ind)=>
							<li key={ind}> {choice} </li>
						)}
						</ul>
					</li>
				)}
				</ul>
			</div>
		)
	}
}