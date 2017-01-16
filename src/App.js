// DEPENDENCIES
import React, { Component } from 'react';
import $ from 'jquery'

// CUSTOM MODULES
import Poster from './Poster';
import BootstrapNavBar from './BootstrapNavBar';
import SingleMovie from './SingleMovie';
import Home from './Home';

// CUSTOM CSS
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviePosters: []
        }
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

	render() {

        var postersArray = [];
        this.state.moviePosters.map((poster, index) => {
            postersArray.push(<Poster poster={poster} key={index} />)
        });

		return (
    		<div className="container">
    			<div className="row">
                    <BootstrapNavBar />
                    {this.props.children}
                    <h1>Posters go here</h1>
    				{postersArray}
                    
    			</div>	
    		</div>
    	);
	}
}

export default App;
