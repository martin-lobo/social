"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var SideBar = React.createClass({
    displayName: 'SideBar',
    render: function () {
        return (
            <div className="mdl-layout__drawer sidebar">
                <span className="mdl-layout-title title">Arqatek</span>
                <nav className="mdl-navigation">
                    <Link className="mdl-navigation__link" to="/app">Inicio</Link>
                    <Link className="mdl-navigation__link" to="/app/suggestions">Sugerencias</Link>
                    <a className="mdl-navigation__link" href="/logout">Salir</a>
                </nav>
            </div>
        )
    }
});

module.exports = SideBar;
