let React = require('react');
let CheckoutStyles = require("./less/errors.less");


let Item = React.createClass({
  render: function() {

    function minimizePlaceholder(input) {
        input.target.parentNode.classList.add("focused");;
    }

    function pushButton() {
        showOverlay();
        setTimeout(function(){
          minimizeButton();
          hideButtonLabel();
        }, 400)

    }
    function unPushButton() {
        unMinimizeButton();
        unHideButtonLabel();
    }

    function showOverlay() {
        document.querySelectorAll(".form-buttonOverlay")[0].classList.add("show");
    }

    function minimizeButton() {
        document.querySelectorAll(".form-buttonBody")[0].classList.add("small");
    }
    function unMinimizeButton() {
        document.querySelectorAll(".form-buttonBody")[0].classList.remove("small");
    }


    function hideButtonLabel() {
        document.querySelectorAll(".form-buttonLabel")[0].classList.add("hidden");
    }
    function unHideButtonLabel() {
        document.querySelectorAll(".form-buttonLabel")[0].classList.remove("hidden");
    }

    function showSpinner() {
      document.querySelectorAll(".form-buttonSpinner")[0].classList.add("active");
    }
    function hideSpinner() {
      document.querySelectorAll(".form-buttonSpinner")[0].classList.remove("active");
    }

    function showTick() {
      document.querySelectorAll(".form-tick")[0].classList.add("show");
    }

    function focusOnPasswordInput() {
      document.querySelectorAll(".form-input-password")[0].focus();
    }


    function showError() {
        shakeSpinner();
    }

    function shakeSpinner() {
        document.querySelectorAll(".form-button-wrap")[0].classList.add("shaky");
        setTimeout(function(){
          document.querySelectorAll(".form-button-wrap")[0].classList.remove("shaky");
        }, 600)
    }

    function spinButton() {
        document.querySelectorAll(".form-button-wrap")[0].classList.add("spin");
    }



    function maximizePlaceholder(input) {
      //input.target.parentNode.classList.remove("focused");;
    }


    return (
      <div>
        <div className="form-wrap">

          <div className="form-inputWrap">
            <div className="form-inputLabel">Username</div>
            <input className="form-input" onFocus={minimizePlaceholder} onBlur={maximizePlaceholder} type="text" />
          </div>

          <div className="form-inputWrap">
            <div className="form-inputLabel">Password</div>
            <input className="form-input form-input-password" onFocus={minimizePlaceholder} onBlur={maximizePlaceholder} type="password" />
          </div>

          <div className="form-button-wrap">
            <div className="form-button-inner">
              <div className="form-buttonBody"></div>
              <div className="form-buttonLabel">Sign in</div>
              <div className="form-buttonOverlay"></div>
              <div className="form-buttonSpinner"><div className="form-buttonSpinner-inner"></div></div>
              <div className="form-tick">
                <div className="lineWrap lineWrap1"><div className="line line1"></div></div>
                <div className="lineWrap lineWrap2"><div className="line line2"></div></div>
              </div>
            </div>
          </div>

        </div>
        <div className="controls">


        <button onClick={pushButton}>PushButton</button><button onClick={unPushButton}>unPushButton</button><br/><br/>

        <button onClick={showSpinner}>showSpinner</button><button onClick={hideSpinner}>hideSpinner</button><br/><br/>

        <button onClick={showTick}>showTick</button><br/>

        <button onClick={showError}>showError</button><br/>
        <button onClick={spinButton}>spinButton</button><br/>

        <button onClick={focusOnPasswordInput}>focusOnPasswordInput</button><br/>
        </div>
      </div>
    )
  }
});

module.exports = Item;
