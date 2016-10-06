var React = require('react');

var RatingSuggestion = React.createClass({
	displayName: 'RatingSuggestion',
	render: function () {
		return (
			<div className="mdl-card__actions mdl-card--border">
				<button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
					<i className="material-icons">star_border</i>
				</button>
				<button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
					<i className="material-icons">star_border</i>
				</button>
				<button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
					<i className="material-icons">star_border</i>
				</button>
				<button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
					<i className="material-icons">star_border</i>
				</button>
				<button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
					<i className="material-icons">star_border</i>
				</button>
			</div>
		);
	}
});

module.exports = RatingSuggestion;