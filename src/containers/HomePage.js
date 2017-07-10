import React, { Component } from 'react';


class Home extends Component {

	render(){
		return(

			<div className='homePageDiv'>
				<div className="homePage">
					<h1> Fullstack Voting App </h1>
					<div className='homeAbout'>
						<div className='about'>
							<i className='unhide icon'></i>
							<h3> Browse through the list of polls. </h3>
						</div>
						<div className='about'>
							<i className='add user icon'></i>
							<h3> Create an account and add your own polls to the list. </h3>
						</div>
						<div className='about'>
							<i className='checkmark icon'></i>
							<h3> View the results and vote as much as you want. </h3>
						</div>
					</div>
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