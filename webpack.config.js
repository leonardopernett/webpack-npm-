const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const assets = require('./assets')
const path = require('path');

module.exports = {
    entry:'./app.js',
    output:{
        path:__dirname + '/dist',
        filename:'bundle.js'
    },
    

    plugins:[
        new  HtmlWebpackPlugin({template:'index.html'}),
        new CopyWebpackPlugin({
            patterns:assets.map(asset=>{
                return {
                    from:path.resolve(__dirname,`./node_modules/${asset}`),
                    to:path.resolve(__dirname,'libs')
                }
            })
        })
    ]
}