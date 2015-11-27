let React = require('react');
let Message = require('./Message');
let MessageAudio = require('./MessageAudio');

let MessageGroup = React.createClass({

  render: function() {
    let messages = this.props.messages.map(function(message){
        if(message.format == "audio") {
          return <MessageAudio key={message.id} type={message.type} status={message.status} text={message.text} />
        } else {
          return <Message key={message.id} type={message.type} status={message.status} text={message.text} />
        }
    });

    return (
      <div className="messenger-group">
        <div className="messenger-group-date">{this.props.date}</div>
          <div className="messenger-group-messages">
            {messages}
          </div>
      </div>
    )
  }
});

module.exports = MessageGroup;
