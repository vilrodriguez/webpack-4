const path = require('path');

module.exports = {
  //multiple entry points
  entry: {
    home: path.resolve(__dirname, 'src/js/home.js'),
    contact: path.resolve(__dirname, 'src/js/contacts.js'),
    prices: path.resolve(__dirname, 'src/js/prices.js'),
    },
    //need different outputs
  output: {
    // path to where filnal files will be saved and folder
    path:path.resolve(__dirname, 'multi-entry-points/dist'),
    //[name] : it's a webpack template to indicate the output file will ahve the same name of the one from the entry, also allows to set up the path
    filename: 'js/[name].js'
    }
}