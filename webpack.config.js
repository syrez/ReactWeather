module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
        	{
	            loader: 'babel-loader',
	            query: {
	                presets: ['es2015','stage-0','react']
	            },
	            test: /\.jsx?$/,
	            exclude: /(node_modules|bower_components)/
        	}
        ]
    },
    devtool:'inline-source-map'
}
