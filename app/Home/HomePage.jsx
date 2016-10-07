var React = require('react');

var HomePage = React.createClass({
    displayName: 'HomePage',
    render: function () {
        return (
            <div className="home">
            	<i className="material-icons">favorite</i>
            </div>
        );
    }
});

module.exports = HomePage;