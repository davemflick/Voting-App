import React, { Component } from 'react';
import Polls from './Polls';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const HomePage = () => <h1><Link to="/polls">Click Me</Link></h1>
const About = () => <h1>About Us</h1>

class Home extends Component {

	render(){
		return(
			<Router>
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/polls' component={Polls} />
				</Switch>
			</Router>
		)
	}
}

module.exports = Home