let React = require("react");
let classNames = require('classnames');

let Message = React.createClass({

  render: function() {

    let messageClass = classNames({
      'messenger-message': true,
      'messenger-message--outgoing': this.props.type == "outgoing",
      'messenger-message--incoming': this.props.type == "incoming"
    });

    let statusClass = classNames({
      'messenger-message-status': true,
      'messenger-message-status--seen': this.props.status == "Seen",
      'messenger-message-status--delivered': this.props.status == "Delivered"
    });

    return (
      <div className={messageClass}>
        <div className="messenger-message-text">
          {this.props.text}
        </div>
        <div className={statusClass}>
          {this.props.status}
        </div>
      </div>
    )
  }
});

module.exports = Message;
