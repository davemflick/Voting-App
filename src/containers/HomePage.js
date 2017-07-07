import React, { Component } from 'react';


class Home extends Component {

	render(){
		return(
			<div>
				<h1> Voting App </h1>
				<div className="ui container segment">
					<p>Register a Username </p>
					<p>Create Custom Polls </p>
					<p>Vote on public polls made by others </p>
					<p>View results of all polls</p>
				</div>
			</div>
		)
	}
}

module.exports = Home