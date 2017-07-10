import React, { Component } from 'react';

export default class Login extends Component{

	render(){
		return(
			<div className='loginRegDiv'>
			<div className='logRegCont'>
				<h1> Login </h1>
				<form action='/user/login' method='post' className='ui form logRegForm'>
					<div className='field inline'>
						<label> Username </label>
						<input type='text' name='username' placeholder='Choose Username' />
					</div>
					<div className='field inline'>
						<label> Password </label>
						<input type='password' name='password' placeholder='Password' />
					</div>
					<div className='field'>
						<input type='submit' value='Login' className='ui button mini orange logReg' />
					</div>
				</form>
				<hr className='hrLogin' />
				<h5> Not Registered? </h5>
				<a className='item ui button tiny green' href='/register'> Go to Register </a>
			</div>
			</div>
		)
	}
}