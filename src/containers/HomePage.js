import React, { Component } from 'react';


class Home extends Component {

	render(){
		return(
			<div className='homePageDiv'>
				<div className="homePage">
					<h1> Fullstack Voting App </h1>
					<h5>Register a Username</h5>
					<h5>Create and edit your own polls </h5>
					<h5>Vote on other users polls or even your own </h5>
					<h5>Unlimited voting per poll </h5>
					<a href='/polls' className='ui button green goToPolls'> View Currently Posted Polls! </a>
				</div>
				<ul className='slideshow'>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			</div>
		)
	}
}

module.exports = Home