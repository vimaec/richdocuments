module.exports = {
	plugins: [],
	presets: [
		[
			'@babel/preset-env',
			{
				corejs: 3,
				useBuiltIns: 'entry',
			},
		],
	],
}
