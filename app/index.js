let React = require("react");
let Prototype = require("./prototypes/countdown/Countdown.js");

function getItemsState() {
  return {}
}

var App = React.createClass({

  getInitialState: function() {
    return {}
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  render: function() {

    return <Prototype/>
  }
});

React.render(<App/>, document.querySelectorAll(".app")[0]);

module.exports = App;
