const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  watch: false,
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'foa.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: ['es2015'],
        }
      }
    ],
  },
};
