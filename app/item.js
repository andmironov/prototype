let React = require('react');

let Item = React.createClass({
  render: function() {
    return (
      <div>
        <div>Company is {this.props.company}</div>
        <div>Job title is {this.props.jobTitle}</div>
      </div>
    )
  }
});

module.exports = Item;
