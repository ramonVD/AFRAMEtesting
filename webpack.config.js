var path = require('path');

module.exports = {
  target: "web",
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    compress: true,
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