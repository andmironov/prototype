let chatData = {
  "chats": [
    {"id":0, "name": "Brad Frost","text": "Hello again! Looking forward too meet you at the conference","imageUrl": "brad.png"},
    {"id":1, "name": "Trent Walton","text": "How are you today, mate?","imageUrl": "trent.png"},
    {"id":2, "name": "Tobias van Schneider","text": "Nice shot, man! I was wondering if you want to have some good time","imageUrl": "tobias.png"},
    {"id":3, "name": "Dave Rupert","text": "Nice shot, man!","imageUrl": "dave.png"},
    {"id":4, "name": "Paul Irish","text": "Hello again! Looking forward too meet you at the conference","imageUrl": "paul.png"},
    {"id":5, "name": "Frank Chimero","text": "Nice shot, man!","imageUrl": "frank.png"},
    {"id":6, "name": "Christophe Tauziet","text": "Hello again! Looking forward too meet you at the conference","imageUrl": "chris.png"
    }
  ]
}

let React = require('react');
let Styles = require("./messengerStyles.less");

let ChatList = require("./ChatList.js");
let SingleChat = require("./SingleChat.js");
let MessengerControls = require("./MessengerControls.js");
let MessengerHeader = require("./MessengerHeader.js");

let Messenger = React.createClass({

  getInitialState: function() {
    return {
      chatIsExpanded: false,
      expandedChatID: null
      //showSingleChat: false
    }
  },

  showChat: function() {
    //this.setState({showSingleChat: true});
  },

  render: function() {
    return (
      <div>
        <div className="messenger-wrap">
          <MessengerHeader/>
          <ChatList chatData={chatData} showChat={this.showChat}/>
          <SingleChat/>
        </div>
        <MessengerControls/>
      </div>
    )
  }
});

module.exports = Messenger;
