let React = require('react');
let iconStyles = require("./less/icon.less");


let Item = React.createClass({
  render: function() {

    function startAnimation() {
      document.querySelectorAll(".icon-heart")[0].classList.add("active");
      setTimeout(()=>{
        document.querySelectorAll(".icon-heart")[0].classList.remove("active");
      }, 4000)
    }


    return (
      <div>
        <div className="icon-wrap">
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
          <button onClick={startAnimation}>startAnimation</button>
        </div>
      </div>
    )
  }
});

module.exports = Item;
