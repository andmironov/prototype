let React = require('react');
let Timer = require("./Timer.js");

let Bubbles = React.createClass({

  getInitialState: function() {
    return {}
  },

  render: function(){
    let timers = this.props.timers.map(function(timer){
        return <Timer key={timer.id} size={timer.size} isOpened={timer.isOpened} value={timer.value} />
    });

    return (
      <div className="bubbles-inner">
        {timers}
      </div>
    )
  }

});

module.exports = Bubbles;
