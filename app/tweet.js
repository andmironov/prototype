let React = require('react');

let Tweet = React.createClass({
  render: function() {
    return (
      <div>
        <div>Author username is {this.props.authorUsername}</div>
        <div>Tweet text is {this.props.tweetText}</div>
      </div>
    )
  }
});

module.exports = Tweet;
