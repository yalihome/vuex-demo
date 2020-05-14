const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: {
        vendor: ["vue"],
        app: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: "style-loader"
                    }
                    , {
                        loader: "css-loader",
                        options: {
                            modules: false
                        }
                    }
                    , {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 30720,
                            fallback: "file-loader"
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["./dist"]
        }),
        // new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new webpack.optimize.SplitChunksPlugin({
            name: "vendor"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    mode: "development"
};
