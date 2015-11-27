let chatData = {
  "chats": [
    {"id":1, "status": "online", "hasNew": 2, "deliveryStatus":false, "time":"15:30", "name": "Brad Frost","text": "Hello again! Looking forward too meet you at the conference","imageUrl": "brad.png"},
    {"id":2, "status": false, "deliveryStatus":"seen", "time":"11:12","name": "Trent Walton","text": "How are you today, mate?","imageUrl": "trent.png"},
    {"id":3, "status": false, "deliveryStatus":"seen", "time":"8:30", "name": "Tobias van Schneider","text": "Nice shot, man! I was wondering if you want to have some good time","imageUrl": "tobias.png"},
    {"id":4, "status": false, "hasNew": 1, "deliveryStatus":false, "time":"THU", "name": "Dave Rupert","text": "Nice shot, man!","imageUrl": "dave.png"},
    {"id":5, "status": "online", "deliveryStatus":false, "time":"THU", "name": "Paul Irish","text": "Hello again! Looking forward too meet you at the conference","imageUrl": "paul.png"},
    {"id":6, "status": false, "deliveryStatus":"delivered",  "time":"MON", "name": "Frank Chimero","text": "Nice shot, man!","imageUrl": "frank.png"}
  ]
}

let messagesData = {
  "messageGroups": [
    {"id":0, "date":"Oct 15th", "messages":
      [
        {"id":1, "type": "incoming", "status": false, "text": "Hello again! Looking forward too meet you at the conference"},
        {"id":2, "type": "incoming", "status": false, "text": "Hello again! Looking forward too meet you at the conference"}
      ]
    },
    {"id":1, "date":"Oct 16th", "messages":
      [
        {"id":3, "type": "incoming", "status": false, "text": "Nice shot, man!"},
        {"id":4, "type": "outgoing", "status": "Seen", "format": "audio", "text": "I had a great time meeting you at the conference! Thanks!"},
        {"id":5, "type": "incoming", "status": false, "text": "Nice shot, man! I was wondering if you want to have some good time"},
      ]
    },
    {"id":2, "date":"Today", "messages":
      [
        {"id":6, "type": "outgoing", "status": "Delivered", "text": "Hello again! Looking forward too meet you at the conference"},
      ]
    },
  ]
}

let React = require('react');
let Styles = require("./messengerStyles.less");
let ChatList = require("./ChatList.js");
let MessengerImages = require("./MessengerImages.js");
let SingleChat = require("./SingleChat.js");
let MessengerControls = require("./MessengerControls.js");
let MessengerHeader = require("./MessengerHeader.js");

let Messenger = React.createClass({

  getInitialState: function() {
    return {
      expandedChatID: false
    }
  },

  expandChat: function(id) {
    this.setState({expandedChatID: id});
  },

  closeChat: function() {
    this.setState({expandedChatID: false});
  },

  render: function() {

    return (
      <div>
        <div className="messenger-wrap">
          <div className="messenger-wrap-inner">
            <MessengerImages expandedChatID={this.state.expandedChatID} chatData={chatData}/>
            <MessengerHeader closeChat={this.closeChat} expandedChatID={this.state.expandedChatID}  chatData={chatData}/>
            <ChatList expandedChatID={this.state.expandedChatID} chatData={chatData} expandChat={this.expandChat}/>
            <SingleChat expandedChatID={this.state.expandedChatID} messagesData={messagesData} />
          </div>
        </div>
        <div className="messenger-shadow"></div>
        <MessengerControls expandChat={this.expandChat} closeChat={this.closeChat}/>
      </div>
    )
  }
});

module.exports = Messenger;
