let React = require('react');
let Styles = require("./messenger.less");

let ChatList = require("./ChatList.js");
let SingleChat = require("./SingleChat.js");
let MessengerControls = require("./MessengerControls.js");
let MessengerHeader = require("./MessengerHeader.js");

let Messenger = React.createClass({
  render: function() {
    return (
      <div>
        <div className="messenger-wrap">
          <MessengerHeader/>
          <ChatList/>
          <SingleChat/>
        </div>
        <MessengerControls/>
      </div>
    )
  }
});

module.exports = Messenger;
