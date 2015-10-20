let React = require("react");
let Checkout = require("./checkout.js");
let Icon = require("./icon.js");

function getItemsState() {
  return {}
}

var Prototype = React.createClass({

  getInitialState: function() {
    return {}
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  render: function() {
    return <Icon/>
  }
});

React.render(<Prototype name="John" />, document.querySelectorAll(".app")[0]);
module.exports = Prototype;
