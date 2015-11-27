let React = require('react');

let MessengerControls = React.createClass({


      expandChatOne: function (){
        this.props.expandChat(1);
      },

      expandChatTwo: function (){
        this.props.expandChat(2);
      },

      closeChat: function (){
        this.props.closeChat();
      },

  render: function() {

    return (
      <div className="controls">
        <button onClick={this.expandChatOne}>expandChatOne</button><br/>
        <button onClick={this.closeChat}>closeChat</button><br/>
      </div>
    )
  }
});

module.exports = MessengerControls;
