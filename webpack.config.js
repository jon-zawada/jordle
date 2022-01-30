const path = require('path');

const DIST_DIR = path.join(__dirname, 'app', 'dist');
const SRC_DIR = path.join(__dirname, 'app', 'src', 'index.jsx');

module.exports = {
  entry: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  }
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.join(__dirname, 'dist', 'index.html'),
  //   }),
  // ],
};
