const path = require('path');
// name of const is a CLASS
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/home.js')
    },
  mode: 'development',
  output: {
    path:path.resolve(__dirname, 'webpack-dev-server/dist'),
    filename: 'js/[name].js'
    },
    // config de webpack HotModuleReplacemente
    devServer:{
      hot: true,
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
      // Importamos webpack para mejorar la exportación y la recargar de la navegacion que se cambian en lugar de recargar toda la web, es decir, webpack va a recargar modulos y/o secciones y no toda la web
      new webpack.HotModuleReplacementPlugin({}),
      // es una clase, para instanciarla hay que usar NEW
      new MiniCSSExtractPlugin({
        filename: 'css/[name].css'
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack plugin tests'
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
