let React = require('react');
let ChatListItem = require('./ChatListItem');

let classNames = require('classnames');

let ChatList = React.createClass({

  render: function() {

    let expandedChatID = this.props.expandedChatID;
    let expandChat = this.props.expandChat;

    let chatItems = this.props.chatData.chats.map(function(chatItem){
        return <ChatListItem key={chatItem.id} isOnline={(chatItem.status == "online") ? true : false} isExpanded={(expandedChatID == chatItem.id) ? true : false} expandChat={expandChat} id={chatItem.id} hasNew={chatItem.hasNew} name={chatItem.name} time={chatItem.time} deliveryStatus={chatItem.deliveryStatus} imageUrl={chatItem.imageUrl} text={chatItem.text} />
    });

    var chatlistClass = classNames({
      'messenger-chat-list': true,
      'messenger-chat-list--hidden': expandedChatID,
      'messenger-chat-list--shown': !expandedChatID,
    });

    return (
      <div className={chatlistClass}>
        {chatItems}
      </div>
    )
  }
});

module.exports = ChatList;
