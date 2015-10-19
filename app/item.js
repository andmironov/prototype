let React = require('react');

let Item = React.createClass({
  render: function() {



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
      </div>
    )
  }
});

module.exports = Item;
