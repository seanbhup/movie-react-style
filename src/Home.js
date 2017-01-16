// DEPENDENCIES
import React, { Component } from 'react';

// CUSTOM MODULES


// CUSTOM CSS
import './App.css';


class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			moviePosters: []
		}
	}

	render(){
		return(
			<h1>Home Page</h1>
		)
	}
}

export default Home