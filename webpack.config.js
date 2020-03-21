const path = require('path');

module.exports = {
    entry: './client/index.js', 
    output: {
        path: path.resolve(__dirname, 'build'), 
        filename: 'bundle.js'
    }, 
    mode: process.env.NODE_ENV, 
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/, 
                use: {
                    // babel-loader: compiles our application to translate newer version of browser language to be read in older versions 
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                },
            
            }, 
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader?sourceMap',
                    // Compiles Sass to CSS
                    'sass-loader?sourceMap'
                ],
            },
            { 
                test: /\.(png|jpg)$/,
                loader: 'url-loader' 
             }
          
        ],
    }, 

    devServer: {
        publicPath: '/build/',
        contentBase: path.join(__dirname, 'client'),
        port: 8080,
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }
}