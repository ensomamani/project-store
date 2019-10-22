const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'production', //modo desarrollo
    entry: [
        path.resolve(__dirname, './src/app.js')
    ],
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    },
    optimization: {
        splitChunks : {
            chunks : 'all'
        }
    },
    // devTool: 'inline-source-map', //para encontrar la raíz del error
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/agua.pug',
            filename: 'agua.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/bebidas.pug',
            filename: 'bebidas.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/snacks-picante.pug',
            filename: 'snacks-picante.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/snacks-natural.pug',
            filename: 'snacks-natural.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/galleta.pug',
            filename: 'galleta.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/citricos.pug',
            filename: 'citricos.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/jugos.pug',
            filename: 'jugos.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/jugos.pug',
            filename: 'jugos.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/rehidratantes.pug',
            filename: 'rehidratantes.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/bocaditos.pug',
            filename: 'bocaditos.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/kekes.pug',
            filename: 'kekes.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
       
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            },
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: process.env.NODE_ENV === 'development',
                        reloadAll: true
                    },
                  },
                  'css-loader',
                  'postcss-loader',
                  'sass-loader'
                ],
              },
              {
                test: /\.css$./,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        }
                    },
                    'css-loader'
                ]
              },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash:12].[ext]',
                            outputPath: 'assets/'
                        } 
                    }
                ]
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash:12].[ext]'
                        } 
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        open: true,
        compress: true,
        port: 9091
    },
    
}