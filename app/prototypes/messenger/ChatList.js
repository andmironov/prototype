let React = require('react');
let ChatListItem = require('./ChatListItem');
let request = require("superagent");

let ChatList = React.createClass({

  render: function() {
    var showChat = this.props.showChat;
    var chatItems = this.props.chatData.chats.map(function(chatItem){
        return (
          <ChatListItem showChat={showChat} key={chatItem.name} name={chatItem.name} imageUrl={chatItem.imageUrl} text={chatItem.text} />
        );
    });
    return (
      <div className="messenger-chat-list">
        {chatItems}
      </div>
    )
  }
});

module.exports = ChatList;
