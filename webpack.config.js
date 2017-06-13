const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
	entry: [
		'react-hot-loader/patch',
		'webpack/hot/only-dev-server',
		'webpack-dev-server/client?/',
		'./src/index'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: path.join(__dirname, 'src'),
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: ['es2015', 'stage-0', 'react']
					}
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.svg$/,
				use: [
					'file-loader?hash=sha512&digest=hex&name=assets/[hash].[ext]'
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({template: './src/index.html'})
	]
};

module.exports = config;
