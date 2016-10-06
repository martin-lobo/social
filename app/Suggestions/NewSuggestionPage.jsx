var React = require('react');
var $ = require('jquery');
var Router = require('react-router');
var Link = Router.Link;

var NewSuggestionsPage = React.createClass({
    displayName: 'NewSuggestionsPage',

    componentDidMount: function() {
        $.ajax({
          url: location.origin + "/api/user/name",
          dataType: 'json',
          cache: false,
          success: function(data) {
            this.setState({author: data.name});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(location.origin + "/api", status, err.toString());
          }.bind(this)
        });
    },

    onAdd: function (ev) {
        if (this.state.suggestion.length < 15) {
            var data = {message: 'Faltan: ' + (15 - this.state.suggestion.length) + " caracteres."};
            var snackbarContainer = document.querySelector('#demo-toast-example');
            snackbarContainer.MaterialSnackbar.showSnackbar(data);
            return;
        }
        if (!this.state.loading) {
            console.log(this.state.suggestion);
            this.setState({ loading: true });

        }
    },

    getInitialState: function () {
        return {
            suggestion: "",
            author: "",
            loading: false
        };
    },

    handleChange: function (event) {
        this.setState({suggestion: event.target.value});
    },

    render: function() {
     
      return (
        <div> 
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col">
                    <Link to="/app/suggestions" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored">
                        <i className="material-icons">arrow_back</i>
                    </Link>   
                </div>
            </div>
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--3-col"></div>
                <div className="mdl-cell mdl-cell--6-col">
                    <form action="javascript:void(0)">
                      <div className="mdl-textfield mdl-js-textfield">
                        <textarea className="mdl-textfield__input" type="text" rows="6" onChange={this.handleChange} value={this.state.suggestion} id="sample5" ></textarea>
                        <label className="mdl-textfield__label" htmlFor="sample5">Sugerencia</label>
                      </div>
                      <div className="mdl-textfield mdl-js-textfield">
                        Autor: {this.state.author}
                      </div>
                      <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.onAdd} >
                        Agregar
                      </button>
                    </form>
                </div>
                <div className="mdl-cell mdl-cell--3-col"></div>
            </div>
            <div id="demo-toast-example" className="mdl-js-snackbar mdl-snackbar">
              <div className="mdl-snackbar__text">Puta</div>
              <button className="mdl-snackbar__action" type="button"></button>
            </div>
		</div>
      );
    
    }


});

module.exports = NewSuggestionsPage;