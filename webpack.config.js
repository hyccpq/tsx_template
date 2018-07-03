const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "/dist")
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
            	test: /\.(tsx|ts)?$/,
	            use: [
	            // 	{
		         //    loader: "react-hot-loader/webpack"
	            // },
	            {
		            loader: "babel-loader"
	            },{
		            loader: "awesome-typescript-loader"
	            }]
	
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
	        {
		        enforce: "pre",
		        test: /\.js$/,
		        use: [{
			        loader: "source-map-loader"
		        },{
			        loader: "babel-loader"
		        }]
	           
            },
	        
	        {
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							sourceMap: true,
							javascriptEnabled: true
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			},
	        {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader?limit=8192&name=[name].[ext]&publicPath='
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
	plugins: [
		new UglifyJSPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[hash:8].css',
			chunkFilename: '[id].[hash:8].css'
		})
	]
};
