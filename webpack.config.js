const path = require('path');
module.exports = {
  entry: './src/app.js',
	devtool: 'inline-source-map',
	output: {
    filename: 'scheson.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Scheson',
    libraryTarget: 'this' // bundle can be used by html and node
  }
};
