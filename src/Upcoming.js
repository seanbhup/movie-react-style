// DEPENDENCIES
import React, { Component } from 'react';
import $ from 'jquery';

// CUSTOM MODULES
import Poster from './Poster'



// CUSTOM CSS
import './App.css';


class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			moviePosters: []
		}
	}

	componentDidMount() {
        var apiKey = "55e2d237df80ec5178651841fda5124c"
        var url = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + apiKey;
        $.getJSON(url, (movieData) =>{
            console.log(movieData);
            this.setState({
                moviePosters: movieData.results
            });
        });

    }

	render(){
		var postersArray = [];
        this.state.moviePosters.map((poster, index) => {
            postersArray.push(<Poster poster={poster} key={index} />)
        });
		return(
			<div>
				<h1>Upcoming</h1>
				{postersArray}
			</div>
		)
	}
}

export default Home