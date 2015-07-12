let React = require("react");
let Item = require("./item.js");
let request = require("superagent");
let styles = require("./less/main.less");

var ItemList = React.createClass({
    getInitialState: function() {
        return {
          items:[]
      }
    },

    componentDidMount: function() {
      request
        .get("/data.json")
        .end((err, res) => {
            if(err) console.error(err);
            if (this.isMounted()) {
              this.setState({items: res.body.items});
            }
        });
    },

    render: function() {
      var items = this.state.items.map(function(item){
        return (
          <li key={item.text}>
            <h2>{item.source}</h2>
            <p>{item.text}</p>
          </li>
        )
      })

      return (
        <div>
        <h2>There are {items.length} items in the item list</h2>
        <ul>
          {items}
        </ul>
        </div>
      )
 }
});

React.render(<ItemList />, document.body);
