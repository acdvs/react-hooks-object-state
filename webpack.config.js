const path = require('path');

module.exports = {
  entry: {
    'bundle.js': './test/TestComponent.jsx'
  },
  output: {
    path: path.join(__dirname, '/test/layout'),
    publicPath: '/',
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/test/layout'),
    publicPath: '/',
    port: 8080
  }
}