let React = require('react');
let classNames = require('classnames');

let MessengerHeader = React.createClass({

  render: function() {

      var titleClass = classNames({
        'messenger-header-title': true,
        'messenger-header-title--hidden': this.props.expandedChatID,
      });

      var iconClass = classNames({
        'messenger-header-icon': true,
        'messenger-header-icon--ham': !this.props.expandedChatID,
        'messenger-header-icon--back': this.props.expandedChatID,
      });

    return (
      <div className="messenger-header" onClick={this.props.closeChat}>
        <div className={iconClass} >
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
        <div className={titleClass}>Chats</div>
      </div>
    )
  }
});

module.exports = MessengerHeader;
