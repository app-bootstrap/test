'use strict';

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pkg = require('./package.json');

const srcPath = path.resolve(__dirname, 'src');

const plugins = [
  new webpack.ProgressPlugin((percentage, message, ...args) => {
    console.info(`${parseInt(percentage * 100, 10)}%`, message, ...args);
  }),
  new webpack.DefinePlugin({
    'process.env.VERSION': JSON.stringify(pkg.version),
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(srcPath, 'statics'),
        to: 'statics'
      },
    ],
  }),
];

const extensionConfig = {
  target: 'node',
  mode: 'none',
  entry: path.resolve(srcPath, 'extension.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    vscode: 'commonjs vscode',
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  plugins,
  devtool: 'nosources-source-map',
  infrastructureLogging: {
    level: 'log',
  },
};

module.exports = [extensionConfig];
