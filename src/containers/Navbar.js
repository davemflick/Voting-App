import React, { Component } from 'react';


class NavBar extends Component {

	render(){
		return(
			<div className='ui menu'>
				<a className='active item' href='/'> Home </a>
				<a className='item' href='/polls'> Polls </a>
				<a className='item' href='/newpoll'> Create Poll </a>
				<div className='right menu'>
					<a className='item' href='/login'> Login </a>
					<a className='item' href='/register'> Register </a>
					<a className='item' href='/user/logout'> Logout </a>
				</div>
			</div>
		)
	}
}

module.exports = NavBar