const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");


module.exports = {
    devtool: "inline-source-map",
    entry: "./index.tsx",
    //mode: "production",
    mode: "development",
    devServer: {
        static: "./dist",
        hot: true,
        port: 3000,
        historyApiFallback: {index: "/", disableDotRule: true},
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{from: "./src/assets", to: "assets"}, {from: "./public", to: "./"}]
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
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '',
        clean: true
    }
};