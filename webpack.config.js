const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: __dirname,
    filename: "./release/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: __dirname + 'node_modules',
        include: __dirname + 'src',
        options: {
          presets: ['env'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join('./release'),
    port: 9000,
    open: true,
    proxy: {
      '/api/*': {
        // 将 http://localhost:8888/api/* 代理到 http://localhost:9000/api/*
        target: 'http://localhost:8888'
      }
    }
  }
};