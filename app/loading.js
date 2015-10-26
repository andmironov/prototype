let React = require('react');
let iconStyles = require("./less/loading2.less");


let Item = React.createClass({
  render: function() {

    function playAnimation() {
      document.querySelectorAll(".loading-wrap")[0].classList.add("active");
    }

    function rePlayAnimation() {
      document.querySelectorAll(".loading-wrap")[0].classList.remove("active");
    }


    return (
      <div>
        <div className="loading-wrap">
          <div className="loading-dots">
            <div className="loading-dot loading-dot--1"></div>
            <div className="loading-dot loading-dot--2"></div>
            <div className="loading-dot loading-dot--3"></div>
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
