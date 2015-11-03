let React = require("react");
let classNames = require('classnames');

let ChatListItem = React.createClass({

  onClick: function() {
    this.props.expandChat(this.props.id);
  },

  render: function() {

    var itemClass = classNames({
      'messenger-chatlist-item': true,
      'messenger-chatlist-item--expanded': this.props.isExpanded,
    });

    var imageStyle = {
      backgroundImage: "url(" + this.props.imageUrl + ")",
    };

    return (
      <div key={this.props.id} className={itemClass} onClick={this.onClick}>
        <div className="chatlist-item-wrap">
          <div className="chatlist-item-image" style={imageStyle}></div>
          <div className="chatlist-item-textWrap">
            <div className="chatlist-item-name">{this.props.name}</div>
            <div className="chatlist-item-text">{this.props.text}</div>
            </div>
        </div>
      </div>
    )
  }
});

module.exports = ChatListItem;
