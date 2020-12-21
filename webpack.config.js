const path = require('path');

module.exports = {
  entry: {
    home: path.resolve('css-loader/src/js/home.js'),
    contacts: path.resolve('css-loader/src/js/contacts.js'),
    prices: path.resolve('css-loader/src/js/prices.js'),
    },
  output: {
    path:path.resolve(__dirname, 'css-loader/dist'),
    filename: 'js/[name].js'
    },

    //loader
    module:{
    //takes an array of elemnts of objects
      rules: [{
        //tell what type of file you will find, recieves regEx
        test: /\.css$/,
        //once it knows the type of file what do you awnt to do? use this loader:
        use: ["style-loader",'css-loader']
      }

    ]}
}

// LOADERS
// webpack functionanility that allows you to interpret .css files and others
// CSS loader only loads the css but doesnt applies it, need to use style-loader