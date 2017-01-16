// DEPENDENCIES
import React, { Component } from 'react';
import $ from 'jquery'

// CUSTOM MODULES

// CUSTOM CSS
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Poster extends Component{

	render(){
		var imagePath = 'http://image.tmdb.org/t/p/w300' + this.props.poster.poster_path;
		return(
			<div className="col-sm-6 col-md-3 movie-poster">
				<img src={imagePath} className="poster"/>
			</div>
		)
	}
}

export default Poster;