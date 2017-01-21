var path = require('path');

module.exports = {
  context: path.resolve(__dirname, "src/scripts"),

  entry: {
    app: './index.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      }
    ]
  },
};
