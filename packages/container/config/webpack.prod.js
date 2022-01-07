/*
 * @Description :
 * @Date        : 2021-12-22 01:23:23 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-12-23 01:20:06 +0800
 * @LastEditors : JackChou
 */
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devConfig = {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'index.css' }),
  ],
}

module.exports = merge(commonConfig, devConfig)
