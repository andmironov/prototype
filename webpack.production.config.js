var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

var config = {

  entry: {
    app: path.resolve(__dirname, 'app/main.js'),
    vendors: ['react']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [node_modules],
      loader: 'babel',
    },{
      test: /\.less$/,
      loader: 'style!css!less'
    }]
  }
};

module.exports = config;
