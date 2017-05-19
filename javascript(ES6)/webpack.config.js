module.exports = {
  entry:  './app',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ["es2015"]
          }
        }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }
}

// Basic webpack configuration
// you can either .babelrc or query in loaders
