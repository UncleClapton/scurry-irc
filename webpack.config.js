/* eslint-disable global-require */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const baseConfig = {
  target: 'electron-renderer',
  entry: path.join(__dirname, 'src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'res/app.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, 'src', 'js'),
      path.join(__dirname, 'node_modules'),
    ],
    plugins: [
      new DirectoryNamedWebpackPlugin(),
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'res/app.css',
      allChunks: true,
    }),

    new webpack.NamedModulesPlugin(),
  ],
};

module.exports = (env, argv) => {
  const mode = (env && env.mode) || (argv && argv.mode) || 'development';

  let envConfig = mode === 'production'
    ? require('./webpack.production')
    : require('./webpack.development');

  if (typeof envConfig === 'function') {
    envConfig = envConfig(baseConfig, env, argv);
  }

  return merge.smart(
    baseConfig,
    envConfig,
  );
};
