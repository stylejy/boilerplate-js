const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/App.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Typing Game - JooYoung Lee',
      template: './src/index.html',
    }),
    new webpack.SourceMapDevToolPlugin({}),
    new webpack.HotModuleReplacementPlugin({}),
  ],
  devServer: {
    hot: true,
    port: 3000,
    open: true,
  },
  devtool: false,
};
