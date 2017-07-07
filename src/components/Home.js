import React, { Component } from 'react';
import Polls from './Polls';

export default class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			polls: [
				{question: "Cars", choices: ['Toyota', 'Ford', 'Chevy']},
				{question: "Food", choices: ['Cereal', 'Pizza', 'Candy']},
				{question: "Animals", choices: ['Dogs', 'Cats', 'Frogs']},
				]
		}
	}

	render(){
		return(
			<div>
				<p>Hello from Home Component </p>
				<ul>
					<Polls polls={this.state.polls} />
				</ul>
			</div>
		)
	}
}