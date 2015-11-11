var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var env = 'prod';
var fs = require('fs');

function getHtml () {
  return fs.readFileSync('index.html', {encoding: 'utf8'});
}

var config = {
  entry: './entry.js',
  target: 'web',
  output: {
    path:  __dirname + "/build",
    filename: 'bundle.js',
  },
  plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/, 
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer?browsers=last 2 version',
          'sass-loader'
        ]
      },
      { test: /\.woff(\?.*)?$/,  loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?.*)?$/,   loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?.*)?$/,   loader: "file-loader?prefix=fonts/&name=[path][name].[ext]" },
      { test: /\.svg(\?.*)?$/,   loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml"},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} 
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "../styles")] 
  }

};


if (env === 'prod') {
  config.plugins = [
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      inject: true,
        templateContent: function(templateParams, compilation) {
         console.log(templateParams, compilation); 
          return getHtml();
          
        }
      
      }
    
    )
  ];
  config.module.loaders[0].loaders = null;
  config.module.loaders[0].loader = ExtractTextPlugin.extract('style-loader','css-loader!sass-loader');
}
module.exports = config;

