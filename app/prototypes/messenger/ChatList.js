let React = require('react');
let ChatListItem = require('./ChatListItem');

let ChatList = React.createClass({

  render: function() {
    let expandedChatID = this.props.expandedChatID;
    let expandChat = this.props.expandChat;

    let chatItems = this.props.chatData.chats.map(function(chatItem){
        return <ChatListItem isExpanded={(expandedChatID == chatItem.id) ? true : false} expandChat={expandChat} id={chatItem.id} name={chatItem.name} imageUrl={chatItem.imageUrl} text={chatItem.text} />
    });
    return (
      <div className="messenger-chat-list">
        {chatItems}
      </div>
    )
  }
});

module.exports = ChatList;
