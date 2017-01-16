//DEPENDENCIES
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';

// CUSTOM MODULES
import App from './App';
import SingleMovie from './SingleMovie';
import Home from './Home';
import Upcoming from './Upcoming';
import Top from './Top';
import Popular from './Popular';
import SearchResults from './SearchResults';

// CUSTOM CSS
import './index.css';

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="movie/:id" component={SingleMovie} />
			<Route path="upcoming" component={Upcoming} />
			<Route path="popular" component={Popular} />
			<Route path="topRated" component={Top} />
			<Route path="search/:movieToSearchFor" component={SearchResults} /> 
		</Route>
	</Router>,
	document.getElementById('root')
);
