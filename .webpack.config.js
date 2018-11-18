const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  watch: false,
  output: {
    filename: 'foa.js',
    library: 'foa',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist/'),
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
