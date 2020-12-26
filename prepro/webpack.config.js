const path = require('path');
// name of const is a CLASS
// const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/home.js')
    },
  mode: 'development',
  output: {
    path:path.resolve(__dirname, 'prepro/dist'),
    filename: 'js/[name].js'
    },
    // config de webpack HotModuleReplacemente
    devServer:{
      hot: true,
      // para que abra una pestaña del navegador cada vez que guardas cambios,
      // open: true,
      // cambiar de puerto enel local host
      port: 9000,
    },

    //loader
    module:{
    //takes an array of elemnts of objects
      rules: [
        {
          test:/\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
          use: {
            // transforma las imagenes o archivos a los que se les da soporte en test, a un archivo base64
            loader: 'url-loader',
            options: {
              //limite del tamano de la imagen/archivo, si el limite se revasa el file loader (tambien hay que instalarlo) lo exportará como el archivo .jpg/png. Aumentar el limit a un poco más y luego si deberia de transformarlo a base64
              limit: 900000,
            }
          }
        },
        // este loader solamente los intercepta y los manda a babel/core, la cual va a trabajar en cambiar el formato de js moderno a el js del preset-env
        // hay que installar babel/core y el babel loader y el babel preset-env
        {
          test: /\.js$/,
          use: 'babel-loader',
          // exclude puede ser un regex o una carpeta, es recomendable indicar node modules, es un archivo muy grande, si no se excluye la optimización va a incluirla y será muy pesada
          exclude: /node_modules/,
        },
        {
        //tell what type of file you will find, recieves regEx
        test: /\.css$/,
        //once it knows the type of file what do you awnt to do? use this loader:
        use: [
          'style-loader',
         {
           loader: 'css-loader',
           options:{
             importLoaders: 1
           }
         },
         'postcss-loader',
          
        ]
      },
     	{
				test: /\.scss$/,
				use: [ 

					"style-loader",
					"css-loader",
					"sass-loader"
					]
			},
			{
				test: /\.less$/,
				use: [ 

					"style-loader",
					"css-loader",
					"less-loader"
					]
			},
			{
				test: /\.styl$/,
				use: [ 

					"style-loader",
					"css-loader",
					"stylus-loader"
					]
			}

    ]},
    plugins: [
      // Importamos webpack para mejorar la exportación y la recargar de la navegacion que se cambian en lugar de recargar toda la web, es decir, webpack va a recargar modulos y/o secciones y no toda la web
      new webpack.HotModuleReplacementPlugin({
        title: 'Building with react'
      }),
      // es una clase, para instanciarla hay que usar NEW
      // no se necesita usar este plugin en desarrollo, porque es mas rapido inyectar el css con el style loader que exportar los archivo en cada recarga
      // new MiniCSSExtractPlugin({
      //   filename: 'css/[name].css'
      // }),
      // se comenta porque es mas lento que usar el style loader
      new HtmlWebpackPlugin({
        title: 'Bulding with react',
        template: path.resolve(__dirname, './index.html'),
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
