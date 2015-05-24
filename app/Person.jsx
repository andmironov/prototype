let React = require('react');

let Person = React.createClass({
  render: function() {
    return (
      <div>
        Name is {this.props.name} <br/>
        Surname is {this.props.surname}
      </div>
    )
  }
});

module.exports = Person;
