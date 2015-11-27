let React = require('react');
let CountdownControls = React.createClass({

  render: function() {

    return (
      <div className="controls">
        <button onClick={this.props.startCountdown}>startCountdown</button><br/>
      </div>
    )
  }
});

module.exports = CountdownControls;
