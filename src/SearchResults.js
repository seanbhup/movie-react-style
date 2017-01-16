import React, { Component } from 'react'
import { Link } from 'react-router';
import Constants from './Constants';
import Config from './Config';

class SearchResults extends Component{
	render(){
		var imagePath = Constants.imageBase;
		var posterLink = '/movie/';
		return(
			<div className="col-sm-6 col-md-3 movie-poster">
				<h1>{this.props.params.movieToSearchFor}</h1>
				<Link to={posterLink} ><img src={imagePath} /></Link>
			</div>
		)
	}
}

export default SearchResults;