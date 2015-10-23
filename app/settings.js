let React = require('react');
let iconStyles = require("./less/settings.less");


let Item = React.createClass({
  render: function() {

    function playAnimation() {
      document.querySelectorAll(".switch-wrap")[0].classList.add("active");
      document.querySelectorAll("body")[0].classList.add("active");
    }

    function rePlayAnimation() {
      document.querySelectorAll(".switch-wrap")[0].classList.remove("active");
      document.querySelectorAll("body")[0].classList.remove("active");
    }



    return (
      <div>
        <div className="switch-wrap">
          <div className="tick">
            <div className="lineWrap lineWrap1"><div className="line line1"></div></div>
            <div className="lineWrap lineWrap2"><div className="line line2"></div></div>
          </div>
        </div>

        <div className="controls">
          <button onClick={playAnimation}>Play</button>
          <button onClick={rePlayAnimation}>RePlay</button>
        </div>
      </div>
    )
  }
});

module.exports = Item;
