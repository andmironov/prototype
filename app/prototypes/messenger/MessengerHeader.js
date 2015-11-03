let React = require('react');
let MessengerHeader = React.createClass({

  render: function() {

    return (
      <div className="messenger-header">
        <div className="messenger-header-title">Chats</div>
        <div className="messenger-header-icon"></div>
      </div>
    )
  }
});

module.exports = MessengerHeader;
