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
    var chatsItems = this.state.chatData.map(function(chatItem){
        return (
          <ChatListItem key={chatItem.text} name={chatItem.name} text={chatItem.text}/>
        );
    })
    return (
      <div className="messenger-chatlist">
        {chatsItems}
      </div>
    )
  }
});

module.exports = ChatList;
