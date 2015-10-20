let React = require('react');
let iconStyles = require("./less/icon.less");


let Item = React.createClass({
  render: function() {

    function startAnimation() {
      //document.querySelectorAll(".phoneBG")[0].classList.add("complete");
    }


    return (
      <div>
        <div className="icon-bg">
          <div className="icon-heart"></div>
        </div>
        <button onClick={startAnimation}>startAnimation</button>
      </div>
    )
  }
});

module.exports = Item;
