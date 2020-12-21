const path = require('path');

module.exports = {
  // mode of work, productionnor development
  mode: 'development',
  //entry point file
  entry: './index.js',
  output: {
    // path to where filnal files will be saved and folder
    path:path.resolve(__dirname, 'dist'),
    //name of the file
    filename: './bundle.js'
    }
}