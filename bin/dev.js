const config = require('./webpack.config.js')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const PORT = 3002

config.mode = 'development'
config.devtool = 'source-map'

const compiler = webpack(config)
const server = new WebpackDevServer(
	{
		static: {
			directory: './docs',
		},
		devMiddleware: {
			publicPath: '/build/',
		},
		hot: true,
		port: PORT,
		host: '0.0.0.0',
	},
	compiler,
)

server.start().catch(err => {
	console.error('ERROR :: ', err)
	process.exit(1)
})
