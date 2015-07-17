let React = require("react");
let Item = require("./item.js");
var ItemsStore = require('stores/ItemsStore.js');

let request = require("superagent");
let styles = require("./less/main.less");

function getItemsState() {
  return {
    allItems: ItemsStore.getAll()
  }
}

var RemoteJobsApp = React.createClass({

  getInitialState: function() {
    return getTodoState();
  },

  componentDidMount: function() {
    ItemsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ItemsStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <Header />
        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  },

  _onChange: function() {
    this.setState(getTodoState());
  }
});

module.exports = RemoteJobsApp;
