var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    },{
      test: /\.less$/,
      loader: 'style!css!less'
    }],
  }
};

module.exports = config;
