let React = require('react');
let Styles = require("./messengerStyles.less");

let ChatList = require("./ChatList.js");
let SingleChat = require("./SingleChat.js");
let MessengerControls = require("./MessengerControls.js");
let MessengerHeader = require("./MessengerHeader.js");

let Messenger = React.createClass({

  getInitialState: function() {
    return { showSingleChat: false };
  },

  showChat: function() {
    this.setState({showSingleChat: true});
  },

  render: function() {
    return (
      <div>
        <div className="messenger-wrap">
          <MessengerHeader/>
          <ChatList chatData={chatData} showChat={this.showChat}/>
          {this.state.showSingleChat ? <SingleChat/> : null}
        </div>
        <MessengerControls/>
      </div>
    )
  }
});

module.exports = Messenger;

let chatData = {
  "chats": [
    {"name": "Brad Frost","text": "Hello again! Looking forward too meet you at the conference","imageUrl": "brad.png"},
    {"name": "Trent Walton","text": "How are you today, mate?","imageUrl": "trent.png"},
    {"name": "Tobias van Schneider","text": "Nice shot, man! I was wondering if you want to have some good time","imageUrl": "tobias.png"},
    {"name": "Dave Rupert","text": "Nice shot, man!","imageUrl": "dave.png"},
    {"name": "Paul Irish","text": "Hello again! Looking forward too meet you at the conference","imageUrl": "paul.png"},
    {"name": "Frank Chimero","text": "Nice shot, man!","imageUrl": "frank.png"},
    {"name": "Christophe Tauziet","text": "Hello again! Looking forward too meet you at the conference","imageUrl": "chris.png"
    }
  ]
}
