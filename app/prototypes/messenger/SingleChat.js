let React = require('react');
let MessageGroup = require('./MessageGroup');

let classNames = require('classnames');

let SingleChat = React.createClass({

  render: function() {
    let messageGroups = this.props.messagesData.messageGroups.map(function(messageGroup){
        return (
          <MessageGroup key={messageGroup.id} date={messageGroup.date} messages={messageGroup.messages} />
        )
    });

    var chatClass = classNames({
      "messenger-single-chat": true,
      'messenger-single-chat--hidden': !this.props.expandedChatID,
      'messenger-single-chat--shown': this.props.expandedChatID,
    });

    return (
      <div className={chatClass}>
        <div className="messenger-groups">
          {messageGroups}
        </div>
        <div className="messenger-textInput">
          Your message
        </div>
      </div>
    )
  }
});

module.exports = SingleChat;
