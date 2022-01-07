/*
 * @Description :
 * @Date        : 2021-12-22 01:23:23 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-12-26 01:30:09 +0800
 * @LastEditors : JackChou
 */
const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJSON = require('../package.json')

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../public/index.html'), title: 'market' }),
    new MiniCssExtractPlugin({ filename: 'index.css' }),
    new ModuleFederationPlugin({
      name: 'marketApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Index': './src/bootstrap',
      },
      // shared: { react: '^17.0.2', 'react-dom': '^17.0.2' },
      shared: packageJSON.dependencies,
    }),
  ],
}

module.exports = merge(commonConfig, devConfig)
