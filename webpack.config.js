const path = require('path');

module.exports = {
  entry: './JS/base.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  }
}