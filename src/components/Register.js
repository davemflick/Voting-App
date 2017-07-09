import React, { Component } from 'react';

export default class Register extends Component{

	render(){
		return(
			<div className='ui container segment'>
				<h1> Register User </h1>
				<form action='/user/register' method='post' className='ui form'>
					<div className='field inline'>
						<label> Username </label>
						<input type='text' name='username' placeholder='Choose Username' />
					</div>
					<div className='field inline'>
						<label> Email </label>
						<input type='email' name='email' placeholder='Your email' />
					</div>
					<div className='field inline'>
						<label> Password </label>
						<input type='password' name='password' placeholder='Password' />
					</div>
					<div className='field'>
						<input type='submit' value='Register' className='ui button mini orange' />
					</div>
				</form>
			</div>
		)
	}
}