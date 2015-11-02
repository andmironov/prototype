let React = require('react');
let ChatListItem = React.createClass({

  render: function() {
    //console.log(this.props);
    return (
      <div className="messenger-chatlist-item">
        <div className="chatlist-item-name">{this.props.name}</div>
        <div className="chatlist-item-text">{this.props.text}</div>
      </div>
    )
  }
});

module.exports = ChatListItem;
