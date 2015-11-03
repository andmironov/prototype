let React = require('react');

let MessengerControls = React.createClass({
  render: function() {
    function showChat(){

    };

    return (
      <div className="controls"><button onClick={showChat}>showChat</button></div>
    )
  }
});

module.exports = MessengerControls;
