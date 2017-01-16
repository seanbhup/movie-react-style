import React, { Component } from 'react';

class DiscoverButton extends Component{

	handleButtonClickChild(apiLink){
		console.log(apiLink);
		this.props.functionFromParent(apiLink);
	}

	render(){
		var apiLink = this.props.buttonLink;
		var buttonText = this.props.buttonText;
		return(
			<button className="discover-button" onClick={() => this.handleButtonClickChild(apiLink)}>
				{buttonText}
			</button>
		)

	}
}

export default DiscoverButton