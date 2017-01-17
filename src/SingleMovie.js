import React, { Component } from 'react';
import $ from 'jquery';

class SingleMovie extends Component{
	constructor(props) {
		super(props);
		this.state = {
			currentMovieData: [],
			budget: "",
			revenue: ""
		}
	}

	componentDidMount() {
		var currentMovieId = this.props.params.id;
		var url = 'https://api.themoviedb.org/3/movie/'+currentMovieId+'?api_key=55e2d237df80ec5178651841fda5124c';
		$.getJSON(url, (movieApiResponse) =>{
			console.log(movieApiResponse);
			var revenue = "$"+movieApiResponse.revenue;
			var budget = "$"+movieApiResponse.budget;
			this.setState({
				currentMovieData: movieApiResponse,
				revenue: revenue,
				budget: budget
			})
		});
	}

	render(){
		var posterPath = 'http://image.tmdb.org/t/p/original' + this.state.currentMovieData.poster_path;
		return(
			<div className="col-sm-8">
				<div>
						<img src={posterPath} className="clicked-poster" />
				</div>
				<div className="col-sm-12 clicked-poster-text">
					<a href={this.state.currentMovieData.homepage} target="_blank">
						Click to View Website
					</a>
				</div>
			</div>

		)
	}
}

export default SingleMovie;