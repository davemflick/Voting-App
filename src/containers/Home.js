import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './HomePage';
import Polls from '../components/Polls';
import CreatePoll from '../components/CreatePoll';
import EditPoll from '../components/EditPoll';
import NotFound from './NotFound';


class Home extends Component {

	render(){
		return(
			<Router>
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/polls' component={Polls} />
					<Route path='/newpoll' component={CreatePoll} />
					<Route path='/editpoll' component={EditPoll} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		)
	}
}

module.exports = Home