import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import HomePage from './HomePage';
import Polls from '../components/Polls';
import ShowPoll from '../components/ShowPoll';
import CreatePoll from '../components/CreatePoll';
import EditPoll from '../components/EditPoll';
import Register from '../components/Register';
import Login from '../components/Login';
import NotFound from './NotFound';


class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			polls: [],
			username: '',
			flash: ''
		}
	}

	componentDidMount(){
		axios.get('/api/polls')
			.then((res)=>{
				let polls = res.data.polls
				let user = res.data.username
				this.setState({
					polls: polls,
					username: user,
				})
			})
			.catch((err)=>{
				console.log(err)
			})
	}

	createPathsForAllPolls(){
		let polls = this.state.polls;
		let paths = [];
		polls.forEach(poll=>{
			paths.push(
				<Route 
					key={poll._id}
					path={'/poll/' + poll._id} 
					render={(props)=><ShowPoll poll={poll} user={this.state.username} />} />
			)
		});
		return paths
	}

	loadPaths(){
		if(this.state.polls.length > 0){
			let paths = this.createPathsForAllPolls()
			return paths
		}
	}

	render(){
		return(
			<Router>
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/polls' render={(props)=><Polls polls={this.state.polls} user={this.state.username} />} />
					{this.loadPaths()}
					<Route path='/newpoll' component={CreatePoll} />
					<Route path='/editpoll' render={(props)=><EditPoll polls={this.state.polls} />} />
					<Route path='/register' component={Register} />
					<Route path='/login' component={Login} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		)
	}
}

module.exports = Home