const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
    new HtmlWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({}),
    new webpack.HotModuleReplacementPlugin({}),
  ],
  devServer: {
    hot: true,
    port: 3000,
  },
  devtool: false,
};
