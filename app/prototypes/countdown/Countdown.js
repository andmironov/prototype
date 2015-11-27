let React = require('react');
let CountdownControls = require("./CountdownControls.js");
let Styles = require("./countdownStyles.less");

let Countdown = React.createClass({

  getInitialState: function() {
    return {}
  },
  
  render: function() {
    return (
      <div>
        <div className="countdown-wrap">
        Hello
        </div>

        <CountdownControls/>
      </div>
    )
  }
});

module.exports = Countdown;
