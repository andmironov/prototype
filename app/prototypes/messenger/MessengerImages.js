let React = require('react');
let ChatListItem = require('./ChatListItem');

let classNames = require('classnames');

let MessengerImages = React.createClass({



  render: function() {
    let expandedChatID = this.props.expandedChatID;
    
    var imageWrapClass = classNames({
      'messenger-chat-images': true,
      'messenger-chat-images--shown': !expandedChatID,
      'messenger-chat-images--hidden': expandedChatID
    });

    let chatImages = this.props.chatData.chats.map(function(chatItem){
      var imageClassNameWithId = 'messenger-chat-image--' + chatItem.id;

      var imageClass = classNames(imageClassNameWithId, {
        'messenger-chat-image': true,
        'messenger-chat-image--shown': expandedChatID == chatItem.id,
        'messenger-chat-image--listed': !expandedChatID,
        'messenger-chat-image--isOnline': chatItem.status,
        'messenger-chat-image--hidden': expandedChatID && expandedChatID !== chatItem.id
      });

      var imageStyle = {
        backgroundImage: "url(" + chatItem.imageUrl + ")",
      };
      return (
          <div key={chatItem.id} className={imageClass} style={imageStyle}></div>
      )
    });

    return (
      <div className={imageWrapClass}>
        {chatImages}
      </div>
    )
  }
});

module.exports = MessengerImages;
