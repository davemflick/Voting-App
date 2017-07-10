import React, { Component } from 'react';
import axios from 'axios';


class NavBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: ''
		}
	}

	componentDidMount(){
		axios.get('/api/polls')
			.then((res)=>{
				let user = res.data.username
				this.setState({
					username: user
				})
			})
			.catch((err)=>{
				console.log(err)
			})
	}

	determineUserStatus(){
		let user = this.state.username;
		if(user === 'noUser' || user === ''){
			return(
				<div className='right menu'>
					<a className='item' href='/login'> Login/Register </a>
				</div>
			)
		} else {
			return (
				<div className='right menu'>
				<a className='item username' href='#'> {user} </a>
				<a className='item' href='/user/logout'> Logout </a>
				</div>
			)
		}
	}

	render(){
		return(
			<div className='ui menu'>
				<a className='active item' href='/'> Home </a>
				<a className='item' href='/polls'> Polls </a>
				<a className='item' href='/newpoll'> Create Poll </a>
				{this.determineUserStatus()}
			</div>
		)
	}
}

module.exports = NavBar