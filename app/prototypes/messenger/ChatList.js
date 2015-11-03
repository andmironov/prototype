let React = require('react');
let ChatListItem = require('./ChatListItem');
let request = require("superagent");

let ChatList = React.createClass({

  getInitialState: function() {
    return {chatData: []};
  },

  componentDidMount: function() {
    request
      .get("./chatData.json")
      .end((err, res) => {
        if(err) console.error(err);
        if (this.isMounted()) {
          this.setState({chatData: res.body.chats});
        }
      });
  },

  render: function() {
    var showChat = this.props.showChat;
    var chatItems = this.state.chatData.map(function(chatItem){
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
