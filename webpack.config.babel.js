'use strict';


const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;

console.log("env: ", env);

const javascriptEntryPath = path.resolve(__dirname, 'src', 'index.js');
const serverEntryPath = path.resolve(__dirname, 'static-server', 'server.js');
const htmlIndexPath = path.resolve(__dirname, 'src', 'index.html');
const distLocationPath = path.resolve(__dirname, 'dist');
const htmlEntryPath = path.resolve(__dirname, htmlIndexPath);
const buildPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

console.log("javascriptEntryPath: ", javascriptEntryPath);
console.log("htmlEntryPath: ", htmlEntryPath);
console.log("buildPath:", buildPath);
console.log("srcPath: ", srcPath);

const reactHotLoaderString = 'react-hot-loader/patch';
const hotMiddlewareString = 'webpack-hot-middleware/client?reload=true';

const clientEntryBase = [
  reactHotLoaderString,
  javascriptEntryPath
];
const clientReloadServer = [
  reactHotLoaderString,
  hotMiddlewareString,
  javascriptEntryPath
];
const clientEntry = (env === 'development')? clientReloadServer : clientEntryBase;

console.log("clientEntry: ",  clientEntry);

module.exports = [
  {
    context: __dirname,
    name: 'client',
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      hot: true
    },
    entry: clientEntry,
    stats: {
      colors: true
    },
    output: {
      publicPath: '/',
      filename: "index.js",
      path: distLocationPath
    },
    resolve: {
      extensions: ['*', '.html', '.js', '.jsx', '.json', '.scss', '.less', '.css'],
      modules: [
        path.join(__dirname),
        "node_modules"
      ]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: ['babel-loader'],
          include: srcPath
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ],
          include: srcPath
        },
        {
          test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
          loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
        }
      ],
    },
    plugins: [ 
      // new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.NoEmitOnErrorsPlugin()
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
      })
    ]
  }
];