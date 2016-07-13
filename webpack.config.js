var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');
var webpack = require('webpack');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');


var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'client.js'),
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  module: {
      loaders: [
          {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
          }
      ]
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.ProvidePlugin({
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  }),
   new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
      ,
        new UnminifiedWebpackPlugin()

  ,new webpack.DefinePlugin({
  "process.env": { 
     NODE_ENV: JSON.stringify("production") 
   }
})
],


};
