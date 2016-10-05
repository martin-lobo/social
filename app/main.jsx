"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Home = require('./Home/HomePage.jsx');
var Suggestions = require('./Suggestions/SuggestionsPage.jsx');
var App = require('./app.jsx');


ReactDOM.render(
	<ReactRouter.Router history={ReactRouter.browserHistory}>
    	<ReactRouter.Route path="/" component={App}>
    		<ReactRouter.Route path="app" component={Home}/>
    		<ReactRouter.Route path="app/suggestions" component={Suggestions}/>
    	</ReactRouter.Route>
    </ReactRouter.Router>
, document.getElementById('app'));