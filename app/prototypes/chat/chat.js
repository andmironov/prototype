let React = require('react');
let CheckoutStyles = require("chat.less");

let Item = React.createClass({
  render: function() {

    var results = this.props.results;

    function showChat() {

        setTimeout(function(){
        }, 100);
    }

    function showOverlay() {
      document.querySelectorAll(".messenger-wrap")[0].classList.add("hide");
    }


    return (
      <div>
        <div className="messenger-wrap">
          <div className="messenger-header"></div>

          <div className="messenger-contact-list">
            {results.map(function(result) {
              return <div key={result.id}>{result.text}</li>;
            })}
            <div className="messenger-contact">
            </div>
          </div>
          <div className="messenger-chat">
          </div>
        </div>

        <div className="controls">
          <button onClick={showChat}>showChat</button><br/><br/>
        </div>
      </div>
    )
  }
});

module.exports = Item;
