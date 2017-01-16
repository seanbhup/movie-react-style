// DEPENDENCIES
import React, { Component } from 'react';
import $ from 'jquery';

// CUSTOM MODULES
import Poster from './Poster'
import Constants from './Constants';
import Config from './Config';
import DiscoverButton from './DiscoverButton';



// CUSTOM CSS
import './App.css';


class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			moviePosters: []
		}
		this.handleCategoryChange = this.handleCategoryChange.bind(this);

	}

	componentDidMount() {
        var apiKey = "55e2d237df80ec5178651841fda5124c"
        var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKey;
        $.getJSON(url, (movieData) =>{
            console.log(movieData);
            this.setState({
                moviePosters: movieData.results
            });
        });

    }

    handleCategoryChange(categoryApiUrl){
    	var url = Constants.baseUrl + categoryApiUrl + Config.apiKey
    	console.log(url);
    	$.getJSON(url, (categoryData) => {
    		this.setState({
    			moviePosters: categoryData.results
    		});
    	});
    }

	render(){
		var postersArray = [];
        this.state.moviePosters.map((poster, index) => {
            postersArray.push(
            	<Poster poster={poster} key={index} />
            )
        });

        var discoverButtons = []
        Constants.discoverLinks.map((category, index) => {
        	discoverButtons.push(
        		<DiscoverButton buttonText={category.buttonText} buttonLink={category.link} functionFromParent={this.handleCategoryChange} key={index} />
        	)
        })

		return(
			<div>
				<h1>Home</h1>
				<h2>Now Playing</h2>
				<div className="col-sm-12">
					{discoverButtons}
				</div>
				{postersArray}
			</div>
		)
	}
}

export default Home