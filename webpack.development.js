const path = require('path');
const webpack = require('webpack');

module.exports = (baseConfig) => ({
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.dev.js'),
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    publicPath: baseConfig.output.publicPath,
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
});
