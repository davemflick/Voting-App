import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';


export default class ShowPoll extends Component {
	constructor(props){
		super(props);
		this.state = {
			poll: this.props.poll,
			user: this.props.user
		};
	}

	createPoll(){
		let poll = this.state.poll;
		if(Array.isArray(poll.choices)){
			return poll.choices.map((opts, i)=>{
				poll.pickIndex = i;
				return (
					<div key={`${opts}-${i}`} className='field' >
						<div className='radio checkbox'>
							<input type='radio' name='pick' value={JSON.stringify(poll)}/>
							<lable className='choiceOpt'>{opts}</lable>
						</div>
					</div>
				)
			})
		}
	}

	
	createResults(){
		let answers = [];
		let votes = [];
		let totalVotes = 0;
		this.state.poll.answers.forEach(ans=>{
			answers.push(ans[0]);
			votes.push(+ans[1]);
			totalVotes += +ans[1]
		})
		let data = {
			labels: answers,
			datasets: [{
				data: votes,
				backgroundColor: this.createColors(answers.length),
			}]
		}


		return totalVotes > 0 ?
				 <Doughnut data={data} width={200} height={200} /> :
				 <h2> No Votes Casted Yet </h2>
	}

	createColors(n){
		let chars=['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];
		let colors = [];
		for(let i=0; i<n; i++){
			let hex = '#'
			for(var x=1; x<=6; x++){
				hex += chars[Math.floor(Math.random() *16)]
			}
			colors.push(hex);
		}

		return colors;
	}

	checkIfPollCreator(){
		let currUser = this.state.poll.author.username;
		let creator = this.state.user;
		if(currUser === creator){
			return(
				<div>
					<a href={'/editpoll/' + this.state.poll._id}>
						<button className='ui button mini orange editPoll'> Edit Poll </button>
					</a>
					<form action={"/api/polls/" + this.state.poll._id + '?_method=DELETE'} method='post' className='deleteForm'>
						<input type='submit' value='Delete This Poll' className='ui button mini red deletePoll' />
					</form>
				</div>
			)
		}
	}

	render(){
		return(
			<div className='ui container segment showPage'>
				<div className='ui container segment showQuestion'>
					<h2> {this.state.poll.question} </h2>
					<form action={'/api/polls/' + this.state.poll._id + '/answer?_method=PUT'} method='post' className='ui form'>
						{this.createPoll()}
						<input type='submit' className='ui button blue mini' value='Vote!' />
					</form>
					{this.checkIfPollCreator()}
				</div>
				<div className='ui container segment showResults'>
					{this.createResults()}
				</div>
			</div>
		)
	}
}