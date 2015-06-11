let React = require('react');
let request = require('superagent');
let Tweet = require('./tweet.js');

let App = React.createClass({

  getInitialState: function(){
    return {
      authorUsername: "Andrei",
      tweetText: "Mironov"
    }
  },

  fetchTweet: function(){
    request
      .get("https://api.twitter.com/1.1/statuses/show.json")
      .query({
        id:"598082126190379008"
      })
      .auth({
        oauth_consumer_key: "dmXpNAQ17kCjcj2VjXpvq2uPj",
        oauth_nonce: "885266bf7a5f053cd5f4cbd24d07aff6",
        oauth_signature: "k%2F5Xb25HY3H80jwlkFcPpnbQDuc%3D",
        oauth_signature_method: "HMAC-SHA1",
        oauth_timestamp: "1433105677",
        oauth_token: "43619868-NFfHkwv0IuOEAJydPO732PrWwtRUXUfIbyieEiEtJ",
        oauth_version: "1.0"
      })
      .end(function(err, res){
        if (res.ok) {
          console.log(JSON.stringify(res.body))
        } else {
          console.log("err");
        }
      });

  },

  render: function() {
    return (
      <div>
        <Tweet authorUsername={this.state.authorUsername} tweetText={this.state.tweetText}/>
        <input type="button" onClick={this.fetchTweet} value="Hi"/>
      </div>
    )
  }
});

React.render(<App surname="Mironov"/>, document.body);
