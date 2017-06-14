var path = require('path');
var webpack = require('webpack');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION
  ? ['./src/index.js']
  : ['./src/index.js', 'webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080'];

var plugins = PRODUCTION
  ? []
  : [new webpack.HotModuleReplacementPlugin()];

module.exports = {
  devtool: 'source-map',  // Adding sourcmep, showing ES6 source code on the browser
  entry: entry,
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/, //what files to run through babel -> every file which ends in js
      loaders: ['babel-loader'],
      exclude: '/node_modules/' // which files to be exclude
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  }
};
