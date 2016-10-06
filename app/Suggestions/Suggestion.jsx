var React = require('react');
var RatingSuggestion = require('./RatingSuggestion.jsx');

var Suggestion = React.createClass({
	displayName: 'Suggestion',
	render: function () {
		return (
			<div className="mdl-cell mdl-cell--4-col">
				<div className="demo-card-wide mdl-card mdl-shadow--2dp">
					<div className="mdl-card__supporting-text">
						{this.props.suggestion} 
					</div>
					<div className="mdl-card__supporting-text">
						{this.props.author} 
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Suggestion;