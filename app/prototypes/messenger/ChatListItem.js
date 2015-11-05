let React = require("react");
let classNames = require('classnames');

let ChatListItem = React.createClass({

  onClick: function() {
    this.props.expandChat(this.props.id);
  },

  render: function() {
    var itemUniqueClassName = 'messenger-chatlist-item--' + this.props.id;

    var itemClass = classNames(itemUniqueClassName, {
      'messenger-chatlist-item': true,
      'messenger-chatlist-item--isOnline': this.props.isOnline,
      'messenger-chatlist-item--expanded': this.props.isExpanded,
      'messenger-chatlist-item--listed': !this.props.isExpanded
    });


    var imageStyle = {
      backgroundImage: "url(" + this.props.imageUrl + ")",
    };

    return (
      <div className={itemClass} onClick={this.onClick}>
          <div className="chatlist-item-image" style={imageStyle}></div>
          <div className="chatlist-item-textWrap">
                <div className="chatlist-item-name">{this.props.name}</div>
                <div className="chatlist-item-text">{this.props.text}</div>
          </div>
      </div>
    )
  }
});

module.exports = ChatListItem;
