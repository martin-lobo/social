"use strict";

var React = require('react');
var Sidebar = require('./Components/Sidebar.jsx');

var App = React.createClass({
    displayName: 'App',
    render: function (RouteHandler) {
    	return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
                <Sidebar />
                <main className="mdl-layout__content">
                    <div className="page-content">{this.props.children}</div>
                </main>
            </div>

    	);
    }
});

module.exports = App;