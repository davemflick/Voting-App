import React, { Component } from 'react';


class Home extends Component {

	render(){
		return(
			<div className='homePageDiv'>
				<div className="homePage">
					<h1> Make and Take Polls </h1>
					<p>Register a Username</p>
					<p>Create and edit your own polls </p>
					<p>Vote on other users polls or even your own </p>
					<p>Unlimited voting per poll </p>
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