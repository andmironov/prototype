let React = require('react');
let iconStyles = require("./less/icon4.less");


let Item = React.createClass({
  render: function() {

    function pushIcon() {
      document.querySelectorAll(".icon-heart")[0].classList.add("active");
    }

    function openScreen() {
      document.querySelectorAll(".icon-heart")[0].classList.remove("active");
    }


    return (
      <div>
        <div className="icon-wrap">
          <div className="icon-shadow"></div>
          <div className="icon-shadow--2"></div>
          <div className="icon-bg">
            <div className="icon-heart">
              <div className="icon-heart--glow"></div>
              <div className="icon-heart--shadow icon-heart--shadow1"></div>
              <div className="icon-heart--shadow icon-heart--shadow2"></div>
              <div className="icon-heart--big"></div>
              <div className="icon-heart--mid"></div>
              <div className="icon-heart--small"></div>
            </div>
          </div>
          <div className="screen"></div>
          <button onClick={pushIcon}>push</button>
          <button onClick={openScreen}>open</button>
        </div>
      </div>
    )
  }
});

module.exports = Item;
