const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: './src/index',
	output: {
		path: path.join(__dirname, 'docs'),
		publicPath: './',
		filename: '[name].[hash].js',
		chunkFilename: '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
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
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({template: './src/index.html'})
	]
};

module.exports = config;
