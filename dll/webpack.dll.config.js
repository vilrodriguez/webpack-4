const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: {
//el dll hara un bundle de todas las app que son comunes en la app
  modules: [
    //son basicamente las dependencias (core)
    'react',
    'react-dom'
  ]
    },
  mode: 'production',
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    // enlaza de manera global este archivo a el codigo, name toma el nombre module indicado arriba
    library: '[name]'
    },

    plugins: [
      new webpack.DllPlugin({
        name:'[name]',
        path: path.join(__dirname, '[name]-manifest.json')
      })
    ],
}

// LOADERS
// webpack functionanility that allows you to interpret .css files and others
// CSS loader only loads the css but doesnt applies it, need to use style-loader

// PLUGINS
/*  para el css: mini-css-extract-plugin
y el plugin para usar html en webpack: html-webpack-plugin

 */
