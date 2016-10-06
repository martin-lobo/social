var React = require('react');
var $ = require('jquery');
var Router = require('react-router');
var Link = Router.Link;
var Suggestion = require('./Suggestion.jsx');

var SuggestionsPage = React.createClass({
    displayName: 'SuggestionsPage',

    componentDidMount: function() {
      $.ajax({
          url: location.origin + "/api/suggestions",
          dataType: 'json',
          cache: false,
          success: function(data) {
            console.log(data);
            this.setState({suggestions: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(location.origin + "/api", status, err.toString());
          }.bind(this)
        });
    },

    getInitialState: function () {
        return {
              suggestions: []
        };
    },

    render: function() {
    	var optionalElement;

	    if (!this.state.suggestions.length) {
	        optionalElement = (<div> <p className="empty-message">No existen sugerencias hasta el momento, escribe la tuya!</p> </div>);
	    }
        return (
        	<div className="mdl-grid suggestion-list">
	        	{this.state.suggestions.map(function(data, i) {
	                return (<Suggestion author={data.author} suggestion={data.text} key={i} />)
	            })}
        		{optionalElement}
            <Link to="/app/suggestions/new" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored add-button">
              <i className="material-icons">add</i>
            </Link>
			    </div>
        );
    }
});

module.exports = SuggestionsPage;