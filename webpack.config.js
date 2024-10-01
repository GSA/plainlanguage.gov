var webpack = require('webpack');

module.exports = {
  entry: {
    'site': './assets/js/main.js'
  },

  resolve: {
    extensions: ['', '.js']
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/assets/js/build'
  },

  devtool: 'eval-cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
