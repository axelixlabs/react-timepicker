const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./webpack.config.js')

const BR = '----------------------'
const COLORS = {
	RED: '\x1b[31m',
	YELLOW: '\x1b[33m',
	RESET: '\x1b[0m',
}

config.mode = 'production'
config.module.rules[1] = {
	test: /\.(s?)css$/,
	use: [
		MiniCssExtractPlugin.loader,
		'css-loader',
		{
			loader: 'postcss-loader',
			options: {
				postcssOptions: {
					plugins: [require('autoprefixer')(), require('cssnano')()],
				},
			},
		},
		'sass-loader',
	],
}
config.plugins.push(
	new MiniCssExtractPlugin({
		filename: 'style.css',
	}),
)

webpack(config, (err, stats) => {
	if (err) {
		throw new Error('WEBPACK BUILD ERROR ::', err)
	}
	console.log(`Successfully built bundle in "${config.output.path}"`)

	const info = stats.toJson()
	if (stats.hasErrors()) {
		console.log(`\n${COLORS.RED}:: ERRORS ::${COLORS.RESET}`)
		info.errors &&
			info.errors.length &&
			info.errors.map(w => {
				console.error(`${BR}\n`, w)
			})
	}
	if (stats.hasWarnings()) {
		console.log(`\n${COLORS.YELLOW}:: WARNINGS ::${COLORS.RESET}`)
		info.warnings &&
			info.warnings.length &&
			info.warnings.map(w => {
				console.error(`${BR}\n`, w)
			})
	}

	const fin = stats.toString({
		chunks: true,
		colors: true,
		modules: false,
		chunkModules: false,
	})
	console.log(`${BR}\n\n`, fin)
})
