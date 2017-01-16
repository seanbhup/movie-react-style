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
					<a href={this.state.currentMovieData.homepage} target="_blank">
						<img src={posterPath} className="clicked-poster" />
					</a>
				</div>
				<div className="col-sm-12 clicked-poster-text">
					Click Picture to View Website
				</div>
			</div>

		)
	}
}

export default SingleMovie;