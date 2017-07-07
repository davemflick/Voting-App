import React, { Component } from 'react';
import Polls from './Polls';
import axios from 'axios';

export default class Home extends Component {
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
				<h1>Voting App</h1>
				<ul>
					<Polls polls={this.state.polls} />
				</ul>
			</div>
		)
	}
}