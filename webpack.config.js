// var webpack = require('webpack');
// var path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
//
// module.exports = {
//     mode: "production",
//     entry: [
//         './src/index.js',
//     ],
//     experiments: {
//         outputModule: true,
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'index.js',
//         library:{
//             type: 'module',
//         }
//     },
//     module: {
//         rules: [
//             {
//                 test:/\.css$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     {
//                         'loader':'css-loader',
//                     },
//                     {
//                         'loader':'postcss-loader'
//                     }
//                 ]
//             },
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//                 options:
//                     {
//                         presets: [
//                             ['@babel/preset-env'], '@babel/react'
//                         ]
//                     }
//             }
//         ],
//     },
//     optimization: {
//         minimize: true,
//         minimizer: [
//             new CssMinimizerPlugin(),
//         ],
//     },
// }