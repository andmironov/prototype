let React = require("react");
let classNames = require('classnames');

let MessageAudio = React.createClass({

  render: function() {

    let messageClass = classNames({
      'messenger-message': true,
      'messenger-message--audio': true,
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
          <div className="messenger-message-playButton"></div>
          <div className="messenger-message-timeline">
            <div className="messenger-message-timeline-position"></div>
            <div className="messenger-message-timeline-duration">03:39</div>
          </div>

        </div>
        <div className={statusClass}>
          {this.props.status}
        </div>
      </div>
    )
  }
});

module.exports = MessageAudio;
