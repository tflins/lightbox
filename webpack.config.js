const { resolve } = require('path')

module.exports = {
	mode: 'development',
	entry: resolve(__dirname, './src/index.js'),
	output: {
		filename: '[name].[hash:16].js',
		path: resolve(__dirname, './dist/')
	}
}
