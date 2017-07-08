import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import HomePage from './HomePage';
import Polls from '../components/Polls';
import CreatePoll from '../components/CreatePoll';
import EditPoll from '../components/EditPoll';
import NotFound from './NotFound';


class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			polls: [],
		}
	}

	componentWillMount(){
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
			<Router>
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/polls' render={(props)=><Polls polls={this.state.polls} />} />
					<Route path='/newpoll' component={CreatePoll} />
					<Route path='/editpoll' render={(props)=><EditPoll polls={this.state.polls} />} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		)
	}
}

module.exports = Home