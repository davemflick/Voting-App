import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import NavBar from './containers/NavBar';
import Footer from './containers/Footer';





class App extends Component{
	

	render(){
		return (
			<div>
				<NavBar />
				<Home />
			</div>
		)
	}	
}

ReactDOM.render(<App />, document.getElementById('root'));