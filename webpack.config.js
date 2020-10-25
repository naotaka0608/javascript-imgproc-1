const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/javascripts/bundle.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: './javascripts/bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.(ts|tsx)/, 
                exclude: "/node_modules/",
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ], 
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: '[name].[ext]',
                            outputPath : './images/',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 100,
                            }
                        }
                    },
                ],
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },

    plugins:[
        new MiniCssExtractPlugin({
            filename: './stylesheets/style.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/index.html',
            filename: './index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};