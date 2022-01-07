/*
 * @Description :
 * @Date        : 2021-12-22 01:23:23 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-12-23 01:40:21 +0800
 * @LastEditors : JackChou
 */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
            // presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: 'assets/resource',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
}
