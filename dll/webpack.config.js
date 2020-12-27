const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/home.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js'),
    },
  mode: 'production',
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
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
          {
            loader: MiniCssExtractPlugin.loader
          },
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
          {
            loader: MiniCssExtractPlugin.loader
          },
					"css-loader",
					"sass-loader"
					]
			},
			{
				test: /\.less$/,
				use: [ 
          {
            loader: MiniCssExtractPlugin.loader
          },
					"css-loader",
					"less-loader"
					]
			},
			{
				test: /\.styl$/,
				use: [ 
          {
            loader: MiniCssExtractPlugin.loader
          },
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
      }),
      //este plugin toma la referencia del json del otro archivho dll.config
      new webpack.DllReferencePlugin({
        manifest: require('./modules-manifest.json')
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css'
      })
    ],
    //para prevenir codigo repetido y optimizar el codigo
    optimization:{
      //chunks son pedacitos de la app, por ejemplo cada contenido de cada import en app.js
      splitChunks:{
        // acá se pueden personalizar muchas opciones
        // a quien quieres que aplique, con all va a aplicar entonces a todos los modulos
        chunks: 'all',
        //limite del tamaño del archivo, por ejemplo un archivo de 1000kbytes no lo meta porque es pequeño, pero en 0 añadira todos los archivos
        minSize: 0,
        //como se llamará el módulo donde se exportara el codigo final, commons es un nombre de convencion, aunque puede llamarse de cuaquier manera
        name:'commons',
      }
    }
}

// LOADERS
// webpack functionanility that allows you to interpret .css files and others
// CSS loader only loads the css but doesnt applies it, need to use style-loader

// PLUGINS
/*  para el css: mini-css-extract-plugin
y el plugin para usar html en webpack: html-webpack-plugin

 */
