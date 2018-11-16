const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/1/main.js',
  watch: false,
  output: {
    path: path.resolve(__dirname, './dist/1'),
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
