import React, {Component} from 'react';


export default class ShowPoll extends Component {
	constructor(props){
		super(props);
		this.state = {
			poll: this.props.poll
		};
	}

	render(){
		return(
			<div>
				<h1> {this.props.poll.question} </h1>
				<form action={"/api/polls/" + this.props.poll._id + '?_method=DELETE'} method='post'>
					<input type='submit' value='Delete This Poll' />
				</form>
			</div>
		)
	}
}