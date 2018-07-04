'use strict'
const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.config')
const { resolve } =require('path')

const dev = merge(baseConfig, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		// contentBase: resolve(__dirname, '../dist'),
		historyApiFallback: true,
		overlay: true,
		inline: true,
		port: 8086,
		compress: false
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
})

module.exports = dev