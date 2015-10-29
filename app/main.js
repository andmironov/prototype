let React = require("react");
//let Checkout = require("./checkout.js");
//let Icon = require("./icon.js");
//let Settings = require("./settings.js");
//let Loading = require("./loading.js");
//let Share = require("./share.js");
let Errors = require("./errors.js");

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
    return <Errors/>
  }
});

React.render(<Prototype name="John" />, document.querySelectorAll(".app")[0]);
module.exports = Prototype;
