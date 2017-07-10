import React, { Component } from 'react';

export default class Register extends Component{

	render(){
		return(
			<div className='loginRegDiv'>
				<div className='logRegCont'>
					<h1> Register User </h1>
					<form action='/user/register' method='post' className='ui form logRegForm'>
						<div className='field inline'>
							<label> Username </label>
							<input type='text' name='username' placeholder='Be Creative!' />
						</div>
						<div className='field inline'>
							<label> Email </label>
							<input type='email' name='email' placeholder='(Not Required)' />
						</div>
						<div className='field inline'>
							<label> Password </label>
							<input type='password' name='password' placeholder='Super Secret' />
						</div>
						<div className='field'>
							<input type='submit' value='Register' className='ui button mini orange logReg' />
						</div>
					</form>
					<hr className='hrLogin' />
					<h5> Already Registered? </h5>
					<a className='item ui button tiny green' href='/login'> Go to Login </a>
				</div>
			</div>
		)
	}
}