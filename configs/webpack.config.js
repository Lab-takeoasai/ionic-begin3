var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: {
    app: './src/app.ts'
  },
  output: {
    filename: 'www/js/[name].js'
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
  },
  moduleDirectories: [
    'node_modules'
  ],
  watch: true,
  cache: true,
  devtool: 'eval',
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['ng-annotate', 'ts-loader'] },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ]
}
