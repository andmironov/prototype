let React = require("react");
let Chat = require("./prototypes/chat/chat.js");

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

    return <Chat/>
  }
});

React.render(<Prototype name="John" />, document.querySelectorAll(".app")[0]);
module.exports = Prototype;
