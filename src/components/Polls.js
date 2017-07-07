import React, { Component } from 'react';

export default class Polls extends Component {
	

	render(){
		return(
			<div>
				{this.props.polls.map((poll, i)=>
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