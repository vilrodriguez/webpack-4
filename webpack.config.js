const path = require('path');
// name of const is a CLASS
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    home: path.resolve('plugins/src/js/home.js'),
    contacts: path.resolve('plugins/src/js/contacts.js'),
    prices: path.resolve('plugins/src/js/prices.js'),
    },
  output: {
    path:path.resolve(__dirname, 'plugins/dist'),
    filename: 'js/[name].js'
    },

    //loader
    module:{
    //takes an array of elemnts of objects
      rules: [{
        //tell what type of file you will find, recieves regEx
        test: /\.css$/,
        //once it knows the type of file what do you awnt to do? use this loader:
        use: [
         {
           loader: MiniCSSExtractPlugin.loader
         },
          'css-loader'
        ]
      }

    ]},
    plugins: [
      // es una clase, para instanciarla hay que usar NEW
      new MiniCSSExtractPlugin({
        filename: 'css/[name].css'
      })
    ]
}

// LOADERS
// webpack functionanility that allows you to interpret .css files and others
// CSS loader only loads the css but doesnt applies it, need to use style-loader

// PLUGINS
/*  para el css: mini-css-extract-plugin
y el plugin para usar html en webpack: html-webpack-plugin

 */
