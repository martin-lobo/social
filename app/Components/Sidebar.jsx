"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var SideBar = React.createClass({
    displayName: 'SideBar',
    render: function () {
        return (
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Arqatek</span>
                <nav className="mdl-navigation">
                    <Link className="mdl-navigation__link" to="/app">Tareas</Link>
                    <Link className="mdl-navigation__link" to="/salas">Salas</Link>
                </nav>
            </div>
        )
    }
});

module.exports = SideBar;