let React = require("react");
let classNames = require('classnames');

let ChatListItem = React.createClass({


  getInitialState: function() {
    return { chatListItemExpanded: false }
  },

  onClick: function() {
    this.setState({chatListItemExpanded: true});
    this.props.showChat();
  },

  render: function() {
    var imageStyle = {
      backgroundImage: "url(" + this.props.imageUrl + ")",
    };

    return (
      <div className="messenger-chatlist-item" onClick={this.onClick}>
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
