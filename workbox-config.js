module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,png,json,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};