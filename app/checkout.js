let React = require('react');
let CheckoutStyles = require("./less/checkout.less");


let Item = React.createClass({
  render: function() {

    function buttonClick() {
      document.querySelectorAll(".phoneButton")[0].classList.add("onClick");
      setTimeout(startLoading, 200)

    }

    function startLoading() {
      document.querySelectorAll(".phoneBG")[0].classList.add("active");
      document.querySelectorAll(".phoneButton")[0].classList.remove("onClick");
    }

    function loadingComplete() {
      document.querySelectorAll(".phoneBG")[0].classList.add("complete");
    }

    function startOver() {
      document.querySelectorAll(".phoneBG")[0].classList.remove("active");
      document.querySelectorAll(".phoneBG")[0].classList.remove("complete");
    }

    return (
      <div>
        <div className="phoneBG">
          <div className="phoneAmount">
            <div className="amountValue">$34.3</div>
            <div className="spinner"><div className="spinnerInner"></div></div>
            <div className="tick">
              <div className="lineWrap lineWrap1"><div className="line line1"></div></div>
              <div className="lineWrap lineWrap2"><div className="line line2"></div></div>
            </div>
          </div>
          <div className="phoneUI"></div>
          <div className="phoneButton">Pay $34.3</div>
        </div>
        <button onClick={buttonClick}>buttonClick</button><br/>
        <button onClick={loadingComplete}>loadingComplete</button><br/>
        <button onClick={startOver}>startOver</button>
      </div>
    )
  }
});

module.exports = Item;
