let React = require('react');
let superagent = require('superagent');
let CountdownControls = require("./CountdownControls.js");
let Bubbles = require("./Bubbles.js");
let Styles = require("./countdownStyles.less");

let Countdown = React.createClass({

  getInitialState: function() {
    return {
      "timers" : []
    }
  },

  componentDidMount: function() {
   superagent.get("./timers.json", function(err, res){
     let data = JSON.parse(res.text);
     if(this.isMounted()) this.setState({"timers" : data.timers});
   }.bind(this)).set('Accept', 'application/json');
 },

  render: function() {
    return (
      <div>
        <div className="bubbles-wrap">
          <Bubbles timers={this.state.timers}/>
        </div>

        <CountdownControls/>
      </div>
    )
  }
});

module.exports = Countdown;
