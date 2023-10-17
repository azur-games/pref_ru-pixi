const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    devtool: "inline-source-map",
    entry: '/',
    // mode: "development",
    output: {
        publicPath: '',
        path: path.join(__dirname, '/dist'),
        filename: '[name].[chunkhash].bundle.js',
        clean: true
    },
    devServer: {
        // static: "./dist",
        hot: true,
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: "./src/assets", to: "./assets"},
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(webp|png|jpg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: './assets/images/[name][ext]',
                },
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
                generator: {
                    filename: './assets/icons/[name][ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: './assets/fonts/[name][ext]',
                },
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                oneOf: [
                    {
                        include: /node_modules|styles/,
                        use: ["style-loader", "css-loader", "sass-loader"],
                    },
                    {
                        use: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: {localIdentName: '[folder]__[local]__[hash:base64:5]'},
                                },
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true,
                                    additionalData: '@import "styles/mixins.scss";'
                                },
                            }
                        ],
                    },

                ],

            },
        ]
    },
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                configFile: "tsconfig.json"
            })
        ],
        extensions: [".tsx", ".ts", ".js"],
        modules: [path.resolve(__dirname, "node_modules")]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
};