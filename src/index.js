//DEPENDENCIES
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';

// CUSTOM MODULES
import App from './App';
import SingleMovie from './SingleMovie';
import Home from './Home';

// CUSTOM CSS
import './index.css';

render(
	<Router history={hashHistory}>
		<Route path="/" component={App} />
			<IndexRoute component={Home} />
			<Route path="movie/:id" component={SingleMovie} />
	</Router>,
	document.getElementById('root')
);
