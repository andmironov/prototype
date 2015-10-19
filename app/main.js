let React = require("react");
var ReactDOM = require('react-dom');
let Item = require("./item.js");
let styles = require("./less/main.less");

function getItemsState() {
  return {}
}

var RemoteJobsApp = React.createClass({

  getInitialState: function() {
    return getItemsState();
  },

  componentDidMount: function() {
    document.querySelectorAll(".phoneButton")[0].addEventListener("click", function(argument) {
      document.querySelectorAll(".phoneBG")[0].classList.add("active");
    });
  },

  componentWillUnmount: function() {

  },

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
        <Item/>
        <button onClick={buttonClick}>buttonClick</button><br/>
        <button onClick={loadingComplete}>loadingComplete</button><br/>
        <button onClick={startOver}>startOver</button>
      </div>

    )
  },

  _onChange: function() {
    this.setState(getItemsState());
  }



});
React.render(<RemoteJobsApp name="John" />, document.querySelectorAll(".app")[0]);
module.exports = RemoteJobsApp;
