import React, { Component } from 'react';

export default class Polls extends Component {
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

	// createPollList(){
	// 	let polls = this.state.polls;
	// 	let pollMap = [];
	// 	polls.forEach((poll, i)=>{
	// 		pollMap.push(<li key={i}>
	// 			<h3>{poll.question}</h3>
	// 				<ul>
	// 				{poll.choices.map((choice, ind)=>
	// 					<li key={ind}> {choice} </li>
	// 				)}
	// 				</ul>
	// 			</li>)
	// 	})

	// 	return pollMap
	// }

	render(){
		return(
			<div>
				{this.state.polls.map((poll, i)=>
					<li key={i}>
						<h3>{poll.question}</h3>
						<ul>
						{poll.choices.map((choice, ind)=>
							<li key={ind}> {choice} </li>
						)}
						</ul>
					</li>
				)}
			</div>
		)
	}
}