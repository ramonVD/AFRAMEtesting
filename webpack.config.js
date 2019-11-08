var path = require('path');

module.exports = {
  target: "web",
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    compress: true,
    host: '127.0.0.1',
    port: 3000,
    publicPath: "/dist",
    watchContentBase: true,
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
  mode: 'development',
}