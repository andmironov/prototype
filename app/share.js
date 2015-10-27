let React = require('react');
let iconStyles = require("./less/share2.less");


let Item = React.createClass({
  render: function() {

    function pushButton() {
      document.querySelectorAll("body")[0].classList.add("push");
      setTimeout(function() {
        document.querySelectorAll(".share-wrap")[0].classList.add("active");
      }, 300)
    }

    function playAnimation() {
      document.querySelectorAll(".share-wrap")[0].classList.add("active");
    }

    function rePlayAnimation() {
      document.querySelectorAll(".share-wrap")[0].classList.remove("active");
      document.querySelectorAll(".share-wrap")[0].classList.remove("hide");
    }

    function stopAnimation() {
      document.querySelectorAll(".share-wrap")[0].classList.add("hide");
    }


    return (
      <div>
        <div className="share-wrap">
          <div className="share-body">
              <div className="share-title">Share</div>
              <div className="share-inner"></div>

              <div className="share-close-wrap"><div className="share-close"></div></div>
              <div className="share-links">

                <div className="share-link-wrap share-link-wrap--facebook">
                <div className="share-link share-link--facebook">
                  Facebook<div className="share-count">12</div>
                </div>
                </div>

                <div className="share-link-wrap share-link-wrap--twitter">
                <div className="share-link share-link--twitter">
                  Twitter<div className="share-count">50</div>
                </div>
                </div>

                <div className="share-link-wrap share-link-wrap--google">
                <div className="share-link share-link--google">
                  Google +<div className="share-count">248</div>
                </div>
                </div>

              </div>

              <div className="share-copyLinkInputWrap">
                <input className="share-copyLinkInput" type="text" value="http://dribbble.com/andmironov" />
              </div>
            </div>
          <div className="share-shadow"></div>
        </div>

        <div className="controls">
          <button onClick={pushButton}>push</button>
          <button onClick={playAnimation}>Play</button>
          <button onClick={stopAnimation}>Stop</button>
          <button onClick={rePlayAnimation}>RePlay</button>
        </div>
      </div>
    )
  }
});

module.exports = Item;
