let React = require('react');
let Router = require('react-router');
let { Route, RouteHandler } = Router;
var Person = require('./Person.jsx');

let App = React.createClass({

  getInitialState: function(){
    return {
      name: "Andrei",
      surname: "Mironov"
    }
  },

  handleNameChange: function(e){
    this.setState({
      name: e.target.value
    });
  },

  handleSurnameChange: function(e){
    this.setState({
      surname: e.target.value
    });
  },

  render: function(){
    return (
      <div>
        <Person name={this.state.name} surname={this.state.surname}/>

        Change name: <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        Change surname: <input type="text" value={this.state.surname} onChange={this.handleSurnameChange} />

        <RouteHandler/>
      </div>
    )
  }
});

let About = React.createClass({
  render: function () {
    return <h2>About</h2>;
  }
});

let Inbox = React.createClass({
  render: function () {
    return <h2>Inbox</h2>;
  }
});

let routes = (
  <Route handler={App}>
    <Route path="about" handler={About}/>
    <Route path="inbox" handler={Inbox}/>
  </Route>
);

Router.run(routes, function (App) {
  React.render(<App surname="Mironov"/>, document.body);
});
