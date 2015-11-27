let React = require('react');
let classNames = require('classnames');
let Timer = React.createClass({

  getInitialState: function() {
    return {}
  },

  render: function() {

    let bubbleClassNames = classNames("bubble--" + this.props.value, "bubble--size-" + this.props.size, {
      'bubble': true,
      'bubble-isOpened': this.props.isOpened
    });

    return (
      <div className={bubbleClassNames}>
        <div className="bubble-value">{this.props.value}</div>
        <div className="bubble-unit">min</div>

      </div>
      )
  }
});

module.exports = Timer;
